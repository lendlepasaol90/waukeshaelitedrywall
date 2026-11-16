// Header state, mobile menu, services dropdown, estimate dialog,
// scroll reveals, before/after sliders, service preview and finish-level tabs.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Header */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Mobile menu */
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
function setMenu(open: boolean) {
  if (!menuBtn || !menu || !header) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('open', open);
  header.classList.toggle('menu-open', open);
  menu.toggleAttribute('inert', !open);
  document.documentElement.style.overflow = open ? 'hidden' : '';
}
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setMenu(false); });
window.matchMedia('(min-width: 62.01rem)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

/* Services dropdown (click / keyboard; hover handled in CSS) */
const drop = document.querySelector<HTMLElement>('[data-drop]');
if (drop) {
  const btn = drop.querySelector('button')!;
  const set = (open: boolean) => { drop.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open)); };
  btn.addEventListener('click', () => set(!drop.classList.contains('open')));
  document.addEventListener('click', (e) => { if (!drop.contains(e.target as Node)) set(false); });
  drop.addEventListener('mouseenter', () => btn.setAttribute('aria-expanded', 'true'));
  drop.addEventListener('mouseleave', () => btn.setAttribute('aria-expanded', String(drop.classList.contains('open'))));
}
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (drop?.classList.contains('open')) { drop.classList.remove('open'); drop.querySelector('button')?.focus(); }
  if (menu?.classList.contains('open')) { setMenu(false); menuBtn?.focus(); }
});

/* Estimate dialog — links fall back to /estimate/ when JS or <dialog> is unavailable */
const dialog = document.querySelector<HTMLDialogElement>('#estimate-dialog');
if (dialog && typeof dialog.showModal === 'function') {
  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>('[data-estimate-open]');
    if (!trigger) return;
    e.preventDefault();
    const slug = trigger.dataset.service;
    if (slug) {
      const select = dialog.querySelector<HTMLSelectElement>('select[name="service"]');
      const opt = select?.querySelector<HTMLOptionElement>(`option[data-slug="${slug}"]`);
      if (select && opt) select.value = opt.value;
    }
    dialog.showModal();
  });
  dialog.querySelector('[data-estimate-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
}

/* Scroll reveals */
const revealEls = document.querySelectorAll<HTMLElement>('.reveal, .reveal-img');
if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealEls.forEach((el) => io.observe(el));
  // Safety net: never leave content hidden if the observer misfires.
  window.setTimeout(() => revealEls.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in'); }), 2500);
}

/* Before / after sliders */
document.querySelectorAll<HTMLElement>('[data-ba]').forEach((ba) => {
  const range = ba.querySelector<HTMLInputElement>('input[type="range"]');
  if (!range) return;
  const update = () => {
    ba.style.setProperty('--pos', range.value + '%');
    range.setAttribute('aria-valuetext', `${range.value}% before, ${100 - Number(range.value)}% after`);
  };
  range.addEventListener('input', update);
  update();
});

/* Service list → image preview */
const preview = document.querySelector<HTMLElement>('[data-preview]');
if (preview) {
  const imgs = preview.querySelectorAll<HTMLImageElement>('img[data-for]');
  const show = (slug: string) => imgs.forEach((img) => img.classList.toggle('on', img.dataset.for === slug));
  document.querySelectorAll<HTMLAnchorElement>('[data-preview-link]').forEach((a) => {
    const slug = a.dataset.previewLink!;
    a.addEventListener('mouseenter', () => show(slug));
    a.addEventListener('focus', () => show(slug));
  });
}

/* Finish level tabs */
const levels = document.querySelector<HTMLElement>('[data-levels]');
if (levels) {
  const tabs = Array.from(levels.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const panels = levels.querySelectorAll<HTMLElement>('[role="tabpanel"]');
  const swatch = levels.querySelector<HTMLElement>('.swatch');
  const select = (i: number, focus = false) => {
    tabs.forEach((t, n) => { t.setAttribute('aria-selected', String(n === i)); t.tabIndex = n === i ? 0 : -1; });
    panels.forEach((p, n) => (p.hidden = n !== i));
    if (swatch) swatch.dataset.level = String(i);
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); select((i + 1) % tabs.length, true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
      if (e.key === 'Home') { e.preventDefault(); select(0, true); }
      if (e.key === 'End') { e.preventDefault(); select(tabs.length - 1, true); }
    });
  });
}
