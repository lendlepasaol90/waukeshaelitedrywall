/**
 * Estimate form behaviour: validation, spam checks, loading / success / error
 * states and submission.
 *
 * Submission architecture
 * -----------------------
 * The form posts multipart/form-data (fields + optional photos) to
 * `site.form.endpoint` (src/config/site.ts) and expects any 2xx response.
 * That works unchanged with Formspree, Web3Forms, Basin, Getform, a
 * Cloudflare Worker / Pages Function, or a CRM webhook.
 *
 * Until an endpoint is configured the form validates normally and then tells
 * the visitor that online requests are not connected yet. It never shows a
 * false success message.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 2500; // humans take longer than this to fill seven fields

function setError(input: HTMLElement, message: string) {
  const err = document.getElementById(input.id + '-err');
  if (err) err.textContent = message;
  if (message) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
}

function validateField(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, form: HTMLFormElement): string {
  const v = el.value.trim();
  switch (el.name) {
    case 'first_name': return v ? '' : 'Enter your first name.';
    case 'last_name': return v ? '' : 'Enter your last name.';
    case 'email': return !v ? 'Enter your email address.' : EMAIL.test(v) ? '' : 'That email address looks incomplete.';
    case 'phone': {
      const digits = v.replace(/\D/g, '');
      return !v ? 'Enter a phone number we can reach you on.' : digits.length >= 10 && digits.length <= 15 ? '' : 'Enter a 10-digit phone number.';
    }
    case 'service': return v ? '' : 'Choose the service closest to what you need.';
    case 'description': return v.length >= 10 ? '' : 'Tell us a little about the project (a sentence or two is fine).';
    case 'photos': {
      const files = Array.from((el as HTMLInputElement).files || []);
      const maxN = Number(form.dataset.maxPhotos || 5);
      const maxMb = Number(form.dataset.maxMb || 10);
      if (files.length > maxN) return `Attach up to ${maxN} photos.`;
      if (files.some((f) => !f.type.startsWith('image/'))) return 'Photos must be image files.';
      if (files.some((f) => f.size > maxMb * 1024 * 1024)) return `Each photo must be under ${maxMb} MB.`;
      return '';
    }
    default: return '';
  }
}

function showStatus(form: HTMLFormElement, kind: 'success' | 'error', title: string, body: string) {
  const box = form.querySelector<HTMLElement>('.form-status')!;
  box.className = 'form-status' + (kind === 'error' ? ' error' : '');
  box.replaceChildren();
  const strong = document.createElement('strong');
  strong.textContent = title;
  const span = document.createElement('span');
  span.textContent = body;
  box.append(strong, span);
  box.hidden = false;
  box.focus();
}

function initForm(form: HTMLFormElement) {
  const loadedAt = Date.now();
  const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input[name], select[name], textarea[name]'))
    .filter((el) => !['company_website', 'page'].includes(el.name));
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const label = button.querySelector<HTMLElement>('[data-label]')!;
  const idleLabel = label.textContent || '';

  fields.forEach((el) => {
    el.addEventListener('blur', () => setError(el, validateField(el, form)));
    el.addEventListener('input', () => { if (el.hasAttribute('aria-invalid')) setError(el, validateField(el, form)); });
    el.addEventListener('change', () => setError(el, validateField(el, form)));
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    form.querySelector<HTMLElement>('.form-status')!.hidden = true;

    let firstBad: HTMLElement | null = null;
    for (const el of fields) {
      const msg = validateField(el, form);
      setError(el, msg);
      if (msg && !firstBad) firstBad = el;
    }
    if (firstBad) { firstBad.focus(); return; }

    // Spam checks: honeypot filled or form completed implausibly fast → drop silently.
    const honeypot = form.querySelector<HTMLInputElement>('input[name="company_website"]');
    if ((honeypot && honeypot.value) || Date.now() - loadedAt < MIN_FILL_MS) {
      showStatus(form, 'success', 'Request received.', 'Thank you. We will be in touch shortly.');
      return;
    }

    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      showStatus(form, 'error', 'Online requests are not connected yet.',
        'Your details were checked but not sent. The form has not been linked to an inbox. Site owner: set form.endpoint in src/config/site.ts.');
      return;
    }

    button.disabled = true;
    form.classList.add('is-sending');
    label.textContent = 'Sending…';
    try {
      const data = new FormData(form);
      data.delete('company_website');
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      showStatus(form, 'success', 'Request sent.', 'Thank you. We have your details and will reply about your project soon.');
    } catch (err) {
      console.error('[estimate-form]', err);
      showStatus(form, 'error', 'Your request did not send.',
        'Nothing was lost. Check your connection and press the button again. If it keeps failing, try with fewer or smaller photos.');
    } finally {
      button.disabled = false;
      form.classList.remove('is-sending');
      label.textContent = idleLabel;
    }
  });
}

document.querySelectorAll<HTMLFormElement>('[data-estimate-form]').forEach(initForm);
