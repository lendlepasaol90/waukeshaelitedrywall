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
  mapQuery: 'Waukesha Elite Drywall, 1643 Arcadian Ave #526, Waukesha, WI 53186' as string, // what the footer Google Map shows ('' hides the map)

  // --- Contact ------------------------------------------------------------
  phone: '(262) 599-6156' as string, // displayed as written
  email: 'office@waukeshaelitedrywall.com' as string,
  address: {
    street: '1643 Arcadian Ave #526' as string,
    city: 'Waukesha' as string,
    region: 'WI' as string,
    postalCode: '53186' as string,
  },
  hours: 'Mon–Sat 7am–6pm · Sunday closed' as string, // shown in the footer
  // Opening hours for structured data (24-hour times). Days not listed are closed.
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '18:00' },
  ],
  owner: 'John Howser' as string,
  category: 'Drywall Contractor',
  about:
    'Waukesha Elite Drywall brings precision and craftsmanship to drywall projects throughout Waukesha, WI, and surrounding communities. From installing drywall in new homes and finished basements to repairing damaged walls and ceilings, we help property owners achieve smooth, professional results. Our drywall services include sheetrock installation, drywall patching, taping, mudding, sanding, and finishing for residential and commercial spaces. Whether you’re updating a single room, renovating an entire property, or completing new construction, Waukesha Elite Drywall delivers dependable service and careful attention to detail. Proudly serving Waukesha, Pewaukee, Brookfield, New Berlin, Delafield, and nearby Wisconsin communities.',

  // --- Service areas -------------------------------------------------------
  serviceAreas: ['Waukesha', 'Pewaukee', 'Brookfield', 'New Berlin', 'Delafield'],

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
