/**
 * SITE CONFIGURATION — the single place to update business details.
 *
 * Anything left as an empty string ('') or null is simply not rendered
 * anywhere on the site (header, footer, structured data, form), so no
 * fake phone numbers, addresses or emails can leak into production.
 *
 * TODO(owner): fill in the values marked PLACEHOLDER when they are available.
 */
export const site = {
  // --- Brand ---------------------------------------------------------------
  name: 'Waukesha Elite Drywall',
  wordmark: { primary: 'Waukesha Elite', secondary: 'Drywall' }, // text fallback, shown only if `logo` is set to null
  logo: '/logo.png' as string | null, // full logo for light backgrounds (file in /public); also used in structured data
  logoLight: '/logo-light.png' as string, // same logo with light lettering, for dark backgrounds
  logoSize: { width: 900, height: 475 },
  url: 'https://waukeshaelitedrywall.com',

  // --- Location ------------------------------------------------------------
  city: 'Waukesha',
  state: 'Wisconsin',
  stateAbbr: 'WI',

  // --- Contact (PLACEHOLDERS — leave empty until confirmed) ----------------
  phone: '' as string, // e.g. '(262) 555-0100' — displayed as written
  email: '' as string, // e.g. 'estimates@waukeshaelitedrywall.com'
  address: {
    street: '' as string,
    city: '' as string,
    region: '' as string,
    postalCode: '' as string,
  },
  hours: '' as string, // e.g. 'Mon–Fri 7am–5pm'

  // --- Service areas (PLACEHOLDER — confirm the list you actually serve) ---
  serviceAreas: ['Waukesha', 'Pewaukee', 'Brookfield', 'New Berlin', 'Delafield', 'Wales', 'Genesee', 'Big Bend'],

  // --- Social profiles (PLACEHOLDERS) --------------------------------------
  social: {
    facebook: '' as string,
    instagram: '' as string,
    googleBusiness: '' as string,
  },

  // --- Estimate form -------------------------------------------------------
  form: {
    /**
     * PLACEHOLDER: URL that receives the estimate request as a multipart
     * POST (Formspree, Web3Forms, Basin, a Cloudflare Worker, a CRM webhook…).
     * While this is empty the form validates but tells the visitor that
     * online requests are not connected yet — it never pretends to send.
     */
    endpoint: '' as string,
    /** Optional Cloudflare Turnstile site key. Honeypot + timing checks run regardless. */
    turnstileSiteKey: '' as string,
    maxPhotos: 5,
    maxPhotoMb: 10,
  },
};

export const telHref = site.phone ? `tel:${site.phone.replace(/[^\d+]/g, '')}` : '';
