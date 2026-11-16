/**
 * The 12 service landing pages for Waukesha Elite Drywall.
 * Each entry renders at /services/<slug>/ with its own metadata and copy.
 * Photos are licensed stock (Envato Elements) used for illustration only.
 */
export interface Service {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  photo: string;
  photoAlt: string;
  facts: { k: string; v: string }[];
  intro: string[];
  what: { h: string; p: string[] };
  situations: { h: string; items: { t: string; d: string }[] };
  process: { h: string; steps: { t: string; d: string }[] };
  materials: { h: string; p: string[] };
  benefits: { h: string; items: { t: string; d: string }[] };
  local: { h: string; p: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
  ba: { before: string; after: string; beforeAlt: string; afterAlt: string };
}

export const services: Service[] = [
  {
    slug: 'commercial-drywall-services',
    name: 'Commercial Drywall Services',
    short: 'Steel framing, rated walls and finish work for offices, shops and industrial space.',
    title: 'Commercial Drywall Services in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Commercial drywall in Waukesha: metal stud framing, rated partitions, board and finish for offices, retail, medical and light industrial space. Built to plan.',
    h1: 'Commercial drywall services in Waukesha',
    lede: 'Framing, board and finish for commercial interiors. Built to the wall types on the plans and turned over when we said it would be.',
    photo: 'empty-office-carpet-windows',
    photoAlt: 'Empty office floor with finished white walls, ceiling grid and a row of windows',
    facts: [
      { k: 'Typical projects', v: 'Tenant build-outs, office changes, retail, light industrial' },
      { k: 'Framing', v: 'Light-gauge steel stud and track, wood where specified' },
      { k: 'Scheduling', v: 'Days, evenings or weekends to suit the building' },
    ],
    intro: [
      'A commercial drywall job has one real measure. Did the walls go up right, and did they go up on time? Everything else on site waits on the answer. Ceilings, paint, flooring, millwork and the move-in date all sit behind the board.',
      'We frame and finish commercial interiors in Waukesha and the surrounding county. General contractors bring us in as the drywall sub. Owners and property managers call us directly for smaller changes. Both get the same thing: a clear number, a realistic schedule, and walls that match the drawings.',
    ],
    what: {
      h: 'Scope we cover',
      p: [
        'Layout and framing in steel stud. Board on walls, ceilings, soffits and column wraps. Taping and finishing to the specified level. Rated assemblies at corridors, shafts and demising walls. Sound batts and acoustical sealant where a partition has to keep conversations private.',
        'We read the partition schedule before pricing, not after. If the drawings call for a wall type that will not work at a given height or span, you hear about it at bid time, when it is cheap to fix.',
      ],
    },
    situations: {
      h: 'Where we get called',
      items: [
        { t: 'New tenant, old suite', d: 'Take down what the last tenant built, put up what the next one needs, and tie into existing walls cleanly.' },
        { t: 'Growing offices', d: 'More private rooms and meeting space carved out of open floor, often with staff working next door.' },
        { t: 'Retail turnovers', d: 'Sales floor, stock room and fitting-room partitions on a tight opening date.' },
        { t: 'Shop and warehouse offices', d: 'Offices, break rooms and restrooms built inside industrial space, with rated separation where required.' },
        { t: 'Damage and wear', d: 'Forklift hits, roof leaks and move-out damage repaired without closing the building.' },
      ],
    },
    process: {
      h: 'Sequence on site',
      steps: [
        { t: 'Bid from the drawings', d: 'Wall types, heights, finish levels and exclusions listed line by line.' },
        { t: 'Lay out and frame', d: 'Lines snapped, track shot down, studs set, openings and backing framed.' },
        { t: 'One-side and inspect', d: 'One face boarded so trades can rough in and inspectors can see inside.' },
        { t: 'Close and finish', d: 'Second side hung, joints taped and coated, surfaces sanded.' },
        { t: 'Punch out', d: 'Walk with the superintendent, correct the list, hand over for paint.' },
      ],
    },
    materials: {
      h: 'Board, studs and ratings',
      p: [
        'Standard partitions use 3-5/8-inch 25-gauge studs at 16 or 24 inches on center with 5/8-inch Type X board. Taller walls and heavy door openings move up to 20-gauge. Wet areas get moisture-resistant board. High-traffic corridors can take abuse-resistant panels that shrug off carts and chair backs.',
        'Fire-rated walls are assembled exactly as the listed design describes, including fastener pattern, joint offsets and the head-of-wall joint. The rating belongs to the whole assembly, so we do not substitute parts of it.',
      ],
    },
    benefits: {
      h: 'What you get',
      items: [
        { t: 'Dates that hold', d: 'Trades behind us can book their crews against our schedule.' },
        { t: 'Clean inspections', d: 'Rated walls built to the listing leave the inspector little to write up.' },
        { t: 'A straight answer on cost', d: 'An itemized bid, with changes priced before the work is done.' },
        { t: 'A quiet job', d: 'Dust control and off-hours work keep the neighbors in business.' },
      ],
    },
    local: {
      h: 'Commercial space in Waukesha',
      p: [
        'Waukesha has a wide spread of commercial buildings. Downtown around Five Points there are multi-story brick buildings more than a century old, with uneven floors and plaster under later layers. Along Moreland Boulevard, Grandview Boulevard and Sunset Drive the stock is newer: office buildings, medical suites, strip retail and a large amount of light industrial.',
        'Each type calls for a different approach. Old masonry buildings need furring and patience. Flex and industrial buildings need tall walls braced to the structure. We price them as what they are.',
      ],
    },
    faqs: [
      { q: 'Do you bid as a subcontractor?', a: 'Yes. Send the drawings and the bid date. We return an itemized number with clarifications and exclusions.' },
      { q: 'Can you handle a small job, such as one new office?', a: 'Yes. A single wall and door frame is a normal request from owners and managers, and we price it the same careful way.' },
      { q: 'Will our business have to close during the work?', a: 'Usually not. We separate the work area, control dust and schedule loud work outside your busy hours.' },
      { q: 'Who pulls the permit?', a: 'On most projects the general contractor or owner holds the building permit. We build to the approved plans and are on hand for inspections of our work.' },
      { q: 'Do you install acoustical ceilings?', a: 'Our scope is framing, board and finish, including drywall ceilings and soffits. Suspended tile ceilings are typically done by a ceiling contractor, and we coordinate with them.' },
    ],
    related: ['drywall-installation', 'drywall-taping-mudding', 'drywall-finishing', 'drywall-repair'],
    ba: { before: 'commercial-space-under-construction', after: 'empty-office-smooth-walls-ceiling-grid', beforeAlt: 'Open commercial floor stripped back during construction', afterAlt: 'Completed office space with smooth white walls and new ceiling' },
  },
  {
    slug: 'residential-drywall-services',
    name: 'Residential Drywall Services',
    short: 'Board and finish for remodels, additions and new homes.',
    title: 'Residential Drywall Services in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Residential drywall in Waukesha for remodels, additions and new homes. Board hung properly, joints finished flat, the house kept clean. Free written estimates.',
    h1: 'Residential drywall services in Waukesha',
    lede: 'Remodels, additions and new construction. We put the walls back so the rest of the project can finish.',
    photo: 'remodel-interior-drywall-primed',
    photoAlt: 'Remodeled house interior with new drywall finished and ready for paint',
    facts: [
      { k: 'Typical projects', v: 'Kitchens, baths, additions, whole-house board and finish' },
      { k: 'Standard finish', v: 'Level 4, with Level 5 available for critical rooms' },
      { k: 'Single room', v: 'About a week from hanging to paint-ready' },
    ],
    intro: [
      'Every remodel reaches the same point. The framing is done, the wires and pipes are in, the inspector has signed off, and the house is a set of open stud walls. Nothing else can move until drywall goes up.',
      'That is our part. We hang the board, tape it, finish it and sand it. Then the painter, the trim carpenter and the flooring installer can get in. We do this for homeowners running their own project and for remodelers who need a dependable drywall crew.',
    ],
    what: {
      h: 'What the job includes',
      p: [
        'Measuring and ordering the right board for each room. Stocking it in the house. Hanging ceilings and walls with screws. Taping every joint and corner. Three coats of compound, sanded. A final check with a work light, and clean-up.',
        'We also handle the awkward parts of remodel work: meeting old walls that are not flat, matching an existing texture, and closing the holes left where wiring or plumbing was fished through finished rooms.',
      ],
    },
    situations: {
      h: 'Jobs homeowners call about',
      items: [
        { t: 'Kitchen and bathroom gut jobs', d: 'New board once cabinets, plumbing and wiring have moved.' },
        { t: 'Room additions', d: 'New space boarded and blended into the existing house.' },
        { t: 'Finished attics and bonus rooms', d: 'Sloped ceilings, knee walls and a lot of angles to tape.' },
        { t: 'New homes', d: 'Complete board and finish for builders and owner-builders.' },
        { t: 'Plaster to drywall', d: 'Failing plaster removed or covered and replaced with a flat surface.' },
      ],
    },
    process: {
      h: 'How it goes',
      steps: [
        { t: 'Measure and quote', d: 'We see the space and give you a written price and timeline.' },
        { t: 'Cover and contain', d: 'Floors protected, the work area closed off, vents covered.' },
        { t: 'Hang', d: 'Ceilings first, then walls. Usually a day or two.' },
        { t: 'Tape and coat', d: 'Three coats over several days, each fully dry before the next.' },
        { t: 'Sand and check', d: 'Sanded with a vacuum sander, inspected, touched up, cleaned.' },
      ],
    },
    materials: {
      h: 'Board for each room',
      p: [
        'Half-inch board on most walls. A stiffer ceiling board, or 5/8-inch, overhead so it stays flat. Moisture-resistant panels in baths and laundry rooms. Fire-rated 5/8-inch on the garage side of the house. Cement board, not drywall, inside a shower.',
        'Joints are taped with paper and finished with three coats. If a room has big windows or you plan a paint with some sheen, ask us about Level 5. It adds a skim coat over the whole wall and hides what a standard finish cannot.',
      ],
    },
    benefits: {
      h: 'Why it is worth doing well',
      items: [
        { t: 'Paint goes on evenly', d: 'No bands or shiny spots where the joints are.' },
        { t: 'Corners stay sharp', d: 'Proper bead and tape hold up to daily knocks.' },
        { t: 'The schedule keeps moving', d: 'Your other trades get the room when promised.' },
        { t: 'Less mess to live with', d: 'Dust stays in the work area and leaves with us.' },
      ],
    },
    local: {
      h: 'Homes around Waukesha',
      p: [
        'Waukesha is an old city with new edges. Near downtown and Carroll University there are houses from the late 1800s and early 1900s with plaster on wood lath. South and west there are mid-century ranches and split-levels. Out toward the city limits are subdivisions built in the last thirty years.',
        'Each era brings its own drywall work. In the oldest houses we are often blending new board into thick plaster. In the ranches it is cracks and dated texture. In newer homes it is basements and nail pops. We see all three in an ordinary month.',
      ],
    },
    faqs: [
      { q: 'Do I need to move out during drywall work?', a: 'No. For a room or two, we seal off the area and you carry on living in the rest of the house.' },
      { q: 'How soon can you start?', a: 'It depends on the season and the size of the job. We give you a start date with the estimate and keep to it.' },
      { q: 'Will you work with my contractor?', a: 'Yes. Many of our jobs come through remodelers. We fit into their schedule and deal with them directly if you prefer.' },
      { q: 'Can new drywall be joined to old plaster?', a: 'Yes. The joint is shimmed flush, taped with a setting compound and feathered wide so the change does not show.' },
      { q: 'What happens to the scrap?', a: 'We haul away our own off-cuts and debris. It is part of the job.' },
    ],
    related: ['drywall-installation', 'basement-drywall-installation', 'drywall-repair', 'drywall-finishing'],
    ba: { before: 'house-interior-drywall-hung', after: 'empty-room-smooth-plaster-walls', beforeAlt: 'House interior with drywall hung and joints still exposed', afterAlt: 'Finished empty room with smooth, even walls' },
  },
  {
    slug: 'popcorn-ceiling-removal',
    name: 'Popcorn Ceiling Removal',
    short: 'Old sprayed texture removed and the ceiling finished smooth.',
    title: 'Popcorn Ceiling Removal in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Popcorn ceiling removal in Waukesha. We test older texture, scrape or cover it, re-tape the joints and skim the ceiling smooth and ready for primer.',
    h1: 'Popcorn ceiling removal in Waukesha',
    lede: 'Scraped, repaired, skimmed and sanded. A flat ceiling in place of a dusty, dated one.',
    photo: 'scraping-popcorn-ceiling-corner',
    photoAlt: 'Worker scraping popcorn texture away from the corner of a ceiling',
    facts: [
      { k: 'Best for', v: 'Homes from the 1960s to 1980s with sprayed ceilings' },
      { k: 'First step', v: 'Lab test for asbestos on older texture' },
      { k: 'Average bedroom', v: 'Three to four working days' },
    ],
    intro: [
      'Nobody installs popcorn ceilings any more, and for good reason. They trap dust and cobwebs. They cannot be cleaned. They crumble when a ladder bumps them. And once they are stained or patched, they never match again.',
      'Getting rid of one is a two-part job. Part one is taking the texture off. Part two is making the bare ceiling presentable, which is where most of the hours go. We do both.',
    ],
    what: {
      h: 'What is under the popcorn',
      p: [
        'Texture was sprayed over ceilings that had been taped once and left. Scrape it off and you find tape edges, screw heads, ridges and the odd gouge. None of it was ever meant to be seen.',
        'So after scraping, the ceiling is finished the way it should have been to begin with. Loose tape is replaced. Joints and fasteners are coated. Then the whole surface gets skim coats until it is flat from wall to wall.',
      ],
    },
    situations: {
      h: 'Good reasons to remove it',
      items: [
        { t: 'You are repainting anyway', d: 'Ceilings first, then walls. It is the right order.' },
        { t: 'There is a stain or a patch', d: 'A repair in popcorn always shows. A repair in a smooth ceiling does not.' },
        { t: 'You are adding lights', d: 'Recessed cans and popcorn do not mix well.' },
        { t: 'The texture is falling', d: 'Flakes on the furniture mean the bond has failed.' },
      ],
    },
    process: {
      h: 'The steps',
      steps: [
        { t: 'Test', d: 'A sample goes to a lab if the house predates the late 1980s.' },
        { t: 'Mask the room', d: 'Plastic on floors and walls, fixtures down or wrapped.' },
        { t: 'Wet and scrape', d: 'Texture is soaked and taken off with wide blades.' },
        { t: 'Repair and skim', d: 'Joints fixed, then two or three thin coats over everything.' },
        { t: 'Sand and clear out', d: 'Vacuum sanded, checked with a light, plastic rolled up and removed.' },
      ],
    },
    materials: {
      h: 'When scraping is not the answer',
      p: [
        'Some popcorn has been painted so many times that water will not soften it. Some sits on board that is too fragile to scrape. And some tests positive for asbestos, in which case we do not disturb it.',
        'For those ceilings we install a new layer of thin drywall directly over the old surface, screwed into the joists, then tape and finish it. The result is the same smooth ceiling, and the old texture stays sealed where it is.',
      ],
    },
    benefits: {
      h: 'The payoff',
      items: [
        { t: 'More light', d: 'Flat ceilings bounce light around the room.' },
        { t: 'Cleaner air', d: 'No more texture shedding dust.' },
        { t: 'Simple upkeep', d: 'Roll on a coat of paint whenever it needs one.' },
        { t: 'Buyer appeal', d: 'One less thing on a buyer’s list of projects.' },
      ],
    },
    local: {
      h: 'Sprayed ceilings in Waukesha',
      p: [
        'The ranches and split-levels built across the south and west sides of Waukesha in the 1960s and 1970s nearly all came with sprayed ceilings. So did many of the apartment and condo buildings from the same years.',
        'Texture from that period is the kind most likely to contain asbestos, which is why we start every one of these jobs with a test. It is a small cost and a short wait.',
      ],
    },
    faqs: [
      { q: 'Is the dust dangerous?', a: 'If the texture contains asbestos, yes, which is why it is tested first and not scraped if positive. Ordinary texture is just messy, and we contain it.' },
      { q: 'Can you do the whole house at once?', a: 'Yes, and it costs less per room that way. An empty house is ideal, but occupied homes can be done in stages.' },
      { q: 'Will the ceiling be perfectly smooth?', a: 'It will be finished to a paint-ready standard and checked with a light. Flat or matte ceiling paint gives the best look.' },
      { q: 'Do you repaint afterward?', a: 'We leave the ceiling sanded and ready for primer. Tell us if you need painting and we will say what we can arrange.' },
      { q: 'What does it cost?', a: 'Price depends on ceiling area, height, whether the texture is painted and how much repair it needs underneath. We quote after seeing it.' },
    ],
    related: ['ceiling-drywall-repair', 'drywall-finishing', 'drywall-taping-mudding', 'residential-drywall-services'],
    ba: { before: 'scraping-popcorn-ceiling-corner', after: 'empty-room-smooth-plaster-walls', beforeAlt: 'Popcorn ceiling texture being scraped off', afterAlt: 'Room with a smooth, flat ceiling' },
  },
  {
    slug: 'drywall-patching',
    name: 'Drywall Patching',
    short: 'Holes cut out, backed, filled and blended in.',
    title: 'Drywall Patching in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Drywall patching in Waukesha for doorknob holes, plumbing and electrical cut-outs, anchor damage and dents. Solid backing, taped joints, texture matched.',
    h1: 'Drywall patching in Waukesha',
    lede: 'One hole or twenty. Each one cut square, backed, taped and feathered until the wall looks whole.',
    photo: 'trowel-smoothing-patch-closeup',
    photoAlt: 'Close view of a trowel smoothing compound over a wall patch',
    facts: [
      { k: 'Sizes', v: 'From screw anchors to several square feet' },
      { k: 'Visits', v: 'Usually two, sometimes one' },
      { k: 'Finish', v: 'Sanded, texture matched, ready for primer' },
    ],
    intro: [
      'A hole in the wall is a small problem. A bad patch is a permanent one. It sits there as a raised square under the paint, and everybody who walks in sees it.',
      'We patch drywall the long way, which is the only way that works. The damaged piece comes out. A new piece goes in on solid backing. The joints are taped and coated wide. When the paint goes on, the patch is gone.',
    ],
    what: {
      h: 'The difference between a patch and a fix',
      p: [
        'Stick-on mesh squares and a tub of spackle will cover a hole. They will not hide it. The mesh adds thickness, the spackle shrinks, and without tape the edge cracks inside a year.',
        'A proper repair replaces the missing drywall with drywall. The seams are treated like any other joint in the house: tape, three coats, each wider than the last. The final coat runs a foot or more past the patch, so there is no hump to catch the light.',
      ],
    },
    situations: {
      h: 'What we patch',
      items: [
        { t: 'Door handle holes', d: 'The classic. Usually paired with a new door stop.' },
        { t: 'Plumber and electrician cuts', d: 'Access holes after a repipe, a rewire or a leak hunt.' },
        { t: 'TV mount and shelf damage', d: 'Pulled anchors and torn paper.' },
        { t: 'Old openings', d: 'Removed wall heaters, phone jacks, intercoms and vents.' },
        { t: 'Rental turnovers', d: 'Every ding in a unit handled in one trip.' },
      ],
    },
    process: {
      h: 'How a patch is built',
      steps: [
        { t: 'Cut it clean', d: 'Damage is cut back to a neat rectangle with firm edges.' },
        { t: 'Back it', d: 'Wood or metal backing is fixed behind the opening.' },
        { t: 'Fill it', d: 'New board of the same thickness is screwed in flush.' },
        { t: 'Tape and coat', d: 'Joints taped, then three coats, feathered wide.' },
        { t: 'Sand and texture', d: 'Sanded smooth and textured to match the wall.' },
      ],
    },
    materials: {
      h: 'What we use',
      p: [
        'Matching board thickness matters. Most walls are 1/2-inch. Some ceilings and garage walls are 5/8-inch. A thin patch in a thick wall will always sit low.',
        'We use setting compound for the first coats because it hardens fast and barely shrinks, then a lightweight finishing compound that sands easily. Torn paper is sealed first so it does not bubble.',
      ],
    },
    benefits: {
      h: 'Results',
      items: [
        { t: 'Invisible after paint', d: 'No outline, no hump, no change in texture.' },
        { t: 'Strong', d: 'Backed and taped, it will not crack out.' },
        { t: 'Fast', d: 'Small jobs are in and out quickly.' },
        { t: 'Affordable in batches', d: 'Several patches in one visit cost far less each.' },
      ],
    },
    local: {
      h: 'Patching around Waukesha',
      p: [
        'With Carroll University in town and a large stock of rentals around it, Waukesha has plenty of move-out repairs every summer. Landlords and managers call us with a list, and we work through a unit in a day or two.',
        'Homeowners more often call after trade work. Older houses here are still being rewired and repiped, and each of those jobs leaves a trail of access holes behind.',
      ],
    },
    faqs: [
      { q: 'Can you match my wall texture?', a: 'In most cases. We test on a scrap first. Common textures like orange peel and knockdown match well.' },
      { q: 'Do I have to repaint the whole wall?', a: 'For the best result, yes. Touch-up paint on a patch usually shows as a different sheen.' },
      { q: 'How big a hole can be patched?', a: 'Any size. Past a certain point it is quicker to replace the whole sheet, and we will tell you when that is the better route.' },
      { q: 'Is a small job worth your time?', a: 'Yes. Small repairs are regular work for us.' },
      { q: 'Can a patch be done in one day?', a: 'Small ones often can, using fast-setting compound. Larger patches need a second visit for the final coat and sanding.' },
    ],
    related: ['drywall-repair', 'ceiling-drywall-repair', 'water-damaged-drywall-repair', 'drywall-finishing'],
    ba: { before: 'trowel-smoothing-patch-closeup', after: 'empty-room-smooth-plaster-walls', beforeAlt: 'Wall patch being coated with compound', afterAlt: 'Smooth finished walls in an empty room' },
  },
  {
    slug: 'water-damaged-drywall-repair',
    name: 'Water-Damaged Drywall Repair',
    short: 'Wet, stained or moldy board removed and replaced.',
    title: 'Water-Damaged Drywall Repair in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Water-damaged drywall repair in Waukesha. Wet and stained board cut out, the cavity dried, new drywall installed and finished after leaks and floods.',
    h1: 'Water-damaged drywall repair in Waukesha',
    lede: 'The leak is fixed. Now the ceiling or wall needs to be. We cut out what got wet and rebuild it.',
    photo: 'water-damaged-ceiling-around-fan',
    photoAlt: 'Ceiling with peeling paint and dark water damage around a ceiling fan',
    facts: [
      { k: 'Common causes', v: 'Roof leaks, ice dams, plumbing, sump failure' },
      { k: 'First check', v: 'Moisture readings beyond the visible stain' },
      { k: 'Before rebuilding', v: 'Leak repaired and framing dry' },
    ],
    intro: [
      'Water ruins drywall quickly. The board swells and goes soft. The paper lets go. Paint bubbles and peels. Leave it wet for a few days and mold moves in behind it.',
      'We deal with what the water left behind. Wet board comes out. The space behind it gets dried. New board goes in and is finished to match. If the leak is still active, we will tell you to fix that first.',
    ],
    what: {
      h: 'Repair or replace',
      p: [
        'A light stain on board that is still hard can be sealed and painted. Board that sags, crumbles, smells or feels spongy has to go. So does anything that sat in standing water.',
        'Stains lie about the size of the problem. Water runs along framing and soaks insulation well away from the mark you can see. We use a moisture meter to find the real edge, then cut a few inches past it.',
      ],
    },
    situations: {
      h: 'What causes it',
      items: [
        { t: 'Roof and flashing leaks', d: 'Stains on upstairs ceilings, often near chimneys and vents.' },
        { t: 'Ice dams', d: 'Winter stains along the outside edge of ceilings.' },
        { t: 'Pipes and fixtures', d: 'Leaks from bathrooms above, supply lines and drains.' },
        { t: 'Basement water', d: 'Wet board along the floor after heavy rain or a failed pump.' },
        { t: 'Condensation', d: 'Peeling ceilings in bathrooms without a working fan.' },
      ],
    },
    process: {
      h: 'Order of work',
      steps: [
        { t: 'Stop the water', d: 'A roofer or plumber fixes the source before we start.' },
        { t: 'Find the limits', d: 'Meter readings show how far to cut.' },
        { t: 'Tear out', d: 'Wet board and insulation are bagged and removed.' },
        { t: 'Dry down', d: 'Fans and time until the framing reads dry.' },
        { t: 'Rebuild', d: 'New insulation and board, taped, finished and sealed for paint.' },
      ],
    },
    materials: {
      h: 'Building it back better',
      p: [
        'Where water is likely to return, we use board made for it: mold-resistant panels in baths and basements, held half an inch off concrete floors. Around a tub or shower the right backer is cement board.',
        'Old stains next to the repair get a coat of stain-blocking primer. Without it, the brown ring comes straight back through fresh paint.',
      ],
    },
    benefits: {
      h: 'Why not just paint over it',
      items: [
        { t: 'Mold stays out', d: 'Wet material is removed, not sealed in.' },
        { t: 'The ceiling stays up', d: 'Soaked board loses its grip on the screws.' },
        { t: 'The stain stays gone', d: 'Sealed properly, it does not bleed back.' },
        { t: 'Claims go smoother', d: 'We can itemize the estimate for your insurer.' },
      ],
    },
    local: {
      h: 'Water trouble in Waukesha',
      p: [
        'Parts of Waukesha sit low along the Fox River, and the city has seen serious flooding in wet years. Even away from the river, clay soil and spring rain keep sump pumps busy. Finished basements are where we see the most damage.',
        'Upstairs, the usual culprit is winter. Ice builds at the eaves of older, lightly insulated roofs and meltwater finds its way onto the ceiling below.',
      ],
    },
    faqs: [
      { q: 'How fast should wet drywall be removed?', a: 'Within a day or two if possible. The longer it stays wet, the more likely mold becomes.' },
      { q: 'Can you tell if there is mold?', a: 'We will see it when the wall is opened. Small areas are cleaned and treated. Large areas need a remediation contractor, and we will stop and tell you.' },
      { q: 'Will the repair match the rest of the ceiling?', a: 'Yes. The joints are feathered and the texture matched. The whole ceiling should then be repainted.' },
      { q: 'Do you deal with insurance adjusters?', a: 'We give you a detailed written estimate and photos. You handle the claim itself.' },
      { q: 'My stain is dry and old. Is it a problem?', a: 'Maybe not. If the board is hard and flat, sealing and painting may be all it needs. We can check it.' },
    ],
    related: ['ceiling-drywall-repair', 'basement-drywall-installation', 'drywall-repair', 'drywall-patching'],
    ba: { before: 'water-damaged-ceiling-around-fan', after: 'finished-family-room-recessed-lights', beforeAlt: 'Water-damaged ceiling with peeling paint', afterAlt: 'Room with a clean, smooth ceiling and recessed lights' },
  },
  {
    slug: 'garage-drywall-installation',
    name: 'Garage Drywall Installation',
    short: 'Fire-rated board hung and finished in attached and detached garages.',
    title: 'Garage Drywall Installation in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Garage drywall installation in Waukesha. Fire-rated 5/8-inch board, insulation, and a finish from fire-taped to paint-ready for attached and detached garages.',
    h1: 'Garage drywall installation in Waukesha',
    lede: 'Open studs covered with the right board, taped and finished as far as you want to take it.',
    photo: 'white-room-exposed-ceiling-joists',
    photoAlt: 'Large empty room with white finished walls, a single door and exposed ceiling joists',
    facts: [
      { k: 'Board', v: '5/8-inch Type X recommended throughout' },
      { k: 'Finish options', v: 'Fire-tape, Level 2 or full Level 4' },
      { k: 'Two-car garage', v: 'Roughly a week including finishing' },
    ],
    intro: [
      'An unfinished garage works. A finished one works better. It is brighter, cleaner, warmer and easier to organize. It also gives you the fire separation between the garage and the house that codes call for.',
      'We hang and finish garage drywall. Bring us bare studs and we will leave you sealed, solid walls and a ceiling that will not sag.',
    ],
    what: {
      h: 'Garage rules',
      p: [
        'The wall a garage shares with the house, and the ceiling if there are rooms above, generally has to be covered with fire-rated board with taped joints. We confirm the exact requirement with the building department before we price.',
        'Garages are also rough on drywall. Temperature swings. Damp floors. Car doors. We hang thicker board, keep it off the slab, and use more screws overhead.',
      ],
    },
    situations: {
      h: 'Common requests',
      items: [
        { t: 'Finish what the builder left', d: 'Insulate and board the open walls.' },
        { t: 'Workshop build', d: 'Painted walls, backing for cabinets and tool storage.' },
        { t: 'Heat the garage', d: 'Insulation and tight board so the heater can keep up.' },
        { t: 'Fix old damage', d: 'Holes, sags and rotted bottom edges replaced.' },
        { t: 'New detached garage', d: 'Board and finish from scratch.' },
      ],
    },
    process: {
      h: 'How we do it',
      steps: [
        { t: 'Look it over', d: 'Framing, wiring and insulation checked. Requirements confirmed.' },
        { t: 'Insulate', d: 'Walls and ceiling insulated if you want it.' },
        { t: 'Hang', d: 'Ceiling first, then walls, half an inch off the floor.' },
        { t: 'Tape and finish', d: 'To the level you choose.' },
        { t: 'Clean up', d: 'Scrap out, floor swept.' },
      ],
    },
    materials: {
      h: 'Board and finish levels',
      p: [
        'We recommend 5/8-inch Type X on every garage surface. It is required on the house side, it holds up to bumps, and it will not sag between ceiling joists.',
        'A fire-tape finish is one coat over tape. It meets the separation requirement and is fine for storage. Level 4 is three coats, sanded, ready for paint. Choose based on how much time you will spend out there.',
      ],
    },
    benefits: {
      h: 'What changes',
      items: [
        { t: 'Safer', d: 'A rated barrier between cars, fuel and your living space.' },
        { t: 'Warmer', d: 'Insulated walls hold heat.' },
        { t: 'Usable walls', d: 'Hang shelves, cabinets and racks anywhere.' },
        { t: 'Better looking', d: 'A finished room, not a shed.' },
      ],
    },
    local: {
      h: 'Garages in Waukesha',
      p: [
        'Older Waukesha neighborhoods have detached garages on the alley or at the back of the lot. Many were never insulated or boarded. Newer homes have attached two- and three-car garages where the builder boarded only what the code required.',
        'Either way, winter is long here. A garage that holds some heat is worth having from November through March.',
      ],
    },
    faqs: [
      { q: 'Do detached garages need fire-rated drywall?', a: 'Often not, but it depends on how close the garage is to the house or lot line. We check for your property.' },
      { q: 'Can you work around my stored items?', a: 'If the walls and ceiling can be reached. Moving things to the middle and covering them usually works.' },
      { q: 'Will you insulate the ceiling too?', a: 'Yes, if there is attic space above or you plan to heat the garage.' },
      { q: 'Does the drywall need paint?', a: 'Not for code. But primer and paint protect the paper from damp and make the space much brighter.' },
      { q: 'Can it be done in winter?', a: 'Yes. Hanging is fine in the cold. For finishing we bring heat so the compound cures.' },
    ],
    related: ['drywall-installation', 'drywall-taping-mudding', 'drywall-repair', 'residential-drywall-services'],
    ba: { before: 'new-room-drywall-taped-window', after: 'white-room-exposed-ceiling-joists', beforeAlt: 'Room with new drywall hung and joints taped', afterAlt: 'Finished white walls in a large open room' },
  },
  {
    slug: 'basement-drywall-installation',
    name: 'Basement Drywall Installation',
    short: 'Walls, ceilings and soffits for finished lower levels.',
    title: 'Basement Drywall Installation in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Basement drywall installation in Waukesha. Moisture-resistant board, clean soffits around ducts and beams, access panels and a smooth, paint-ready finish.',
    h1: 'Basement drywall installation in Waukesha',
    lede: 'Board, soffits and finish that turn a framed basement into rooms you will use.',
    photo: 'finished-family-room-recessed-lights',
    photoAlt: 'Finished family room with smooth walls, recessed ceiling lights and a sectional sofa',
    facts: [
      { k: 'Board', v: 'Mold- and moisture-resistant on exterior walls' },
      { k: 'Ceiling', v: 'Drywall with access panels, soffits at ducts' },
      { k: 'Typical basement', v: 'About two weeks, mostly drying time' },
    ],
    intro: [
      'Basements are the hardest floor of a house to drywall. Low ceilings. Ducts and pipes in the way. Concrete on three sides. A beam down the middle. It takes planning to make all of that disappear behind flat walls and straight soffits.',
      'We hang and finish basements once the framing and rough-ins are done. The goal is a lower level that looks like it was always part of the house.',
    ],
    what: {
      h: 'What takes the time',
      p: [
        'Soffits. Every duct run and beam gets boxed, and every box has two outside corners that need bead and three coats. A typical basement has more corner work than the rest of the house combined.',
        'Then there is moisture. Board is kept off the floor. Exterior walls get moisture-resistant panels. We look for signs of past water before we cover anything, because finishing over a damp wall just hides the problem for a year.',
      ],
    },
    situations: {
      h: 'Projects we take',
      items: [
        { t: 'Whole basement finish', d: 'Family room, bedroom, bath and hall.' },
        { t: 'One room at a time', d: 'An office or gym now, the rest later.' },
        { t: 'Paneling replacement', d: 'Dark 1970s paneling out, smooth walls in.' },
        { t: 'Drop ceiling to drywall', d: 'More headroom and a cleaner look.' },
        { t: 'Flood repairs', d: 'Lower walls rebuilt after water.' },
      ],
    },
    process: {
      h: 'Step by step',
      steps: [
        { t: 'Check the prep', d: 'Framing straight, inspections passed, insulation in.' },
        { t: 'Mark access', d: 'Shut-offs and cleanouts flagged for panels.' },
        { t: 'Hang ceilings and soffits', d: 'Lids and boxes first.' },
        { t: 'Hang walls', d: 'Off the slab, joints staggered.' },
        { t: 'Finish', d: 'Bead, tape, three coats, sand.' },
      ],
    },
    materials: {
      h: 'Materials',
      p: [
        'Mold-resistant board on outside walls and in bathrooms. Lightweight ceiling board overhead. Vinyl or paper-faced corner bead on soffits because it takes knocks without denting.',
        'Want a quiet theater or a bedroom under the kitchen? Sound insulation and resilient channel go in before the board. Ask at the estimate.',
      ],
    },
    benefits: {
      h: 'What you gain',
      items: [
        { t: 'Real living space', d: 'Rooms, not a basement with carpet.' },
        { t: 'Headroom kept', d: 'Tight soffits and a drywall lid save inches.' },
        { t: 'Durability', d: 'Board chosen for a below-grade room.' },
        { t: 'Access where needed', d: 'Panels at every valve and cleanout.' },
      ],
    },
    local: {
      h: 'Waukesha basements',
      p: [
        'Most houses in Waukesha have full basements. In the older parts of the city they are stone or block with low ceilings and are best left as utility space. From the 1950s on they are poured concrete or block with enough height to finish.',
        'Ground water is the thing to respect. If your sump runs often in spring, deal with drainage first. We will be honest about what we see when we visit.',
      ],
    },
    faqs: [
      { q: 'Do you frame basements?', a: 'We start after framing, electrical, plumbing and insulation are complete and inspected.' },
      { q: 'What about the area around the furnace?', a: 'Mechanical rooms are usually left unfinished or boarded with fire-rated panels, with clearances kept. We follow the code and the equipment labels.' },
      { q: 'How do you reach pipes after the ceiling is closed?', a: 'With access panels placed at shut-offs, cleanouts and junction boxes. We plan them before hanging.' },
      { q: 'Can drywall go straight onto concrete walls?', a: 'No. It needs framing or furring and proper insulation behind it. Board glued to concrete will fail.' },
      { q: 'Is regular drywall acceptable in a basement?', a: 'On interior partitions, yes. On exterior walls and in baths we use moisture-resistant board.' },
    ],
    related: ['drywall-installation', 'water-damaged-drywall-repair', 'drywall-finishing', 'residential-drywall-services'],
    ba: { before: 'house-interior-drywall-hung', after: 'finished-family-room-recessed-lights', beforeAlt: 'Interior with drywall hung and seams exposed', afterAlt: 'Finished family room with smooth walls and ceiling' },
  },
  {
    slug: 'ceiling-drywall-repair',
    name: 'Ceiling Drywall Repair',
    short: 'Cracks, sags, pops and stains fixed overhead.',
    title: 'Ceiling Drywall Repair in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Ceiling drywall repair in Waukesha for cracks, sagging board, nail pops, loose tape and leak damage. Re-secured, re-taped and blended into the ceiling.',
    h1: 'Ceiling drywall repair in Waukesha',
    lede: 'Cracks that keep coming back, board that droops, stains from an old leak. Fixed so they stay fixed.',
    photo: 'repairing-water-damaged-ceiling',
    photoAlt: 'Person on a ladder scraping damaged material from a ceiling before repair',
    facts: [
      { k: 'Common faults', v: 'Seam cracks, nail pops, sagging, stains' },
      { k: 'Core fix', v: 'Re-screw, re-tape, feather wide' },
      { k: 'After repair', v: 'Whole ceiling should be repainted' },
    ],
    intro: [
      'You notice a ceiling problem lying in bed or sitting on the couch. After that you cannot stop seeing it. A crack from one wall to the other. A dip between joists. A yellow ring where the roof leaked years ago.',
      'Ceiling repairs are harder than wall repairs. The work is overhead, gravity is against you, and light hits a ceiling at an angle that shows every flaw. We fix them properly and blend the repair into the rest.',
    ],
    what: {
      h: 'Why ceilings fail',
      p: [
        'Most ceiling cracks follow a joint between sheets. The tape has let go or was never bedded well. Filling the crack does nothing, because the two sheets still move against each other.',
        'Sagging comes from board that is too thin for the joist spacing, too few fasteners, or old water damage. Nail pops come from lumber drying and shrinking. Each has a mechanical cause, and the repair starts there.',
      ],
    },
    situations: {
      h: 'What we repair',
      items: [
        { t: 'Long seam cracks', d: 'Old tape cut out, joint re-taped.' },
        { t: 'Popped fasteners', d: 'New screws beside each one, then refinished.' },
        { t: 'Sags and waves', d: 'Board re-screwed or replaced.' },
        { t: 'Leak stains', d: 'Sealed if sound, replaced if soft.' },
        { t: 'Corner cracks', d: 'Where ceiling meets wall and opens each winter.' },
        { t: 'Fixture holes', d: 'Old lights, fans and vents closed up.' },
      ],
    },
    process: {
      h: 'How we work',
      steps: [
        { t: 'Find the cause', d: 'Loose board, bad tape, movement or water.' },
        { t: 'Cover everything', d: 'Floors and furniture protected.' },
        { t: 'Screw it tight', d: 'Board pulled back to the joists.' },
        { t: 'Re-tape', d: 'New paper tape in setting compound.' },
        { t: 'Feather and texture', d: 'Wide coats, then texture to match.' },
      ],
    },
    materials: {
      h: 'Materials and method',
      p: [
        'Screws, not nails. Paper tape, not mesh, on flat ceiling joints. Setting compound for the first coat because it grips and does not shrink back.',
        'Many Waukesha ceilings have a texture: stipple, swirl or knockdown. We match it after the repair. For heavy popcorn, see our removal service instead.',
      ],
    },
    benefits: {
      h: 'What you end up with',
      items: [
        { t: 'A crack that does not return', d: 'Because the joint was rebuilt.' },
        { t: 'A flat ceiling', d: 'No ridge where the repair is.' },
        { t: 'No worry overhead', d: 'Loose board is secure again.' },
        { t: 'Ready for paint', d: 'Sanded and sealed.' },
      ],
    },
    local: {
      h: 'Ceilings and Wisconsin winters',
      p: [
        'Cold is hard on ceilings here. Roof trusses flex as the temperature drops, and the ceiling lifts slightly off the interior walls. A crack shows at the corner in January and closes by summer. It is common in homes built from the 1970s on.',
        'In Waukesha’s oldest houses the ceilings are plaster, and the failure is different: the plaster loses its hold on the lath and sags. Those can be re-secured or covered with drywall.',
      ],
    },
    faqs: [
      { q: 'Why does my crack come back every winter?', a: 'The joint moves with the seasons and was only filled, not re-taped. It needs to be re-secured and rebuilt.' },
      { q: 'Should I worry about a sagging ceiling?', a: 'Have it looked at. Mild sag is cosmetic. Sag after a leak can mean the board is close to letting go.' },
      { q: 'Can you repair plaster ceilings?', a: 'Yes. Loose plaster can be re-fastened and skimmed, or covered with a new drywall layer.' },
      { q: 'Will I see the repair?', a: 'Not after the full ceiling is painted. Spot-painting a ceiling repair nearly always shows.' },
      { q: 'How long does a ceiling repair take?', a: 'Most take two or three short visits on consecutive days to allow drying.' },
    ],
    related: ['popcorn-ceiling-removal', 'water-damaged-drywall-repair', 'drywall-repair', 'drywall-patching'],
    ba: { before: 'repairing-water-damaged-ceiling', after: 'empty-office-smooth-walls-ceiling-grid', beforeAlt: 'Damaged ceiling being scraped for repair', afterAlt: 'Clean, flat finished ceiling' },
  },
  {
    slug: 'drywall-taping-mudding',
    name: 'Drywall Taping & Mudding',
    short: 'Tape, three coats and sanding on board that is already hung.',
    title: 'Drywall Taping & Mudding in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Drywall taping and mudding in Waukesha. We tape and finish board hung by you or your contractor: paper tape, three coats, sanded and ready for primer.',
    h1: 'Drywall taping and mudding in Waukesha',
    lede: 'You hung it, or your contractor did. We tape it, coat it and sand it.',
    photo: 'applying-joint-tape-to-seam',
    photoAlt: 'Worker in a hard hat pressing joint tape along a drywall seam',
    facts: [
      { k: 'Tape', v: 'Paper on flats and inside corners' },
      { k: 'Coats', v: 'Three over joints, corners and screws' },
      { k: 'Timeline', v: 'Four to five days for most rooms' },
    ],
    intro: [
      'Hanging drywall is heavy work, but most handy people can do it. Taping is different. It is a skill built over years, and a first attempt nearly always shows. Ridges, bubbles, visible seams, and a house full of sanding dust.',
      'That is why taping is the part people hire out. We take over once the board is up and carry it through to a surface that is ready to prime.',
    ],
    what: {
      h: 'What taping covers',
      p: [
        'Flat joints. Butt joints. Inside corners. Outside corners with bead. Every screw head. All of them get tape or bead, then three coats of compound, each one wider and thinner.',
        'Before we start we check the hanging. Screws that stick out, gaps wider than a quarter inch and sheets with no backing at the edge all need fixing first. We will point them out and can correct them.',
      ],
    },
    situations: {
      h: 'Who hires us for this',
      items: [
        { t: 'Do-it-yourselfers', d: 'Board is up, energy is gone.' },
        { t: 'Remodelers', d: 'Their carpenters hang, we finish.' },
        { t: 'Owners of unfinished spaces', d: 'Garages and basements with bare seams.' },
        { t: 'People fixing a bad tape job', d: 'Old work stripped back and redone.' },
      ],
    },
    process: {
      h: 'Coat by coat',
      steps: [
        { t: 'Prep', d: 'Screws set, gaps pre-filled, bead installed.' },
        { t: 'Tape', d: 'Paper tape bedded on all seams and corners.' },
        { t: 'Second coat', d: 'Wider knife, tape buried, screws coated again.' },
        { t: 'Third coat', d: 'Widest pass, feathered thin.' },
        { t: 'Sand', d: 'Light sanding under a work light.' },
      ],
    },
    materials: {
      h: 'Tools and compound',
      p: [
        'All-purpose compound for bedding tape, lightweight for the top coats. Setting compound where we need strength or speed. Knives from six to fourteen inches.',
        'On large jobs we use automatic taping tools, which lay tape and compound together and apply even coats quickly. On small jobs, hand tools.',
      ],
    },
    benefits: {
      h: 'Why hire it out',
      items: [
        { t: 'Seams disappear', d: 'Flat under primer and paint.' },
        { t: 'Far less dust', d: 'Clean coats need little sanding.' },
        { t: 'Days, not weeks', d: 'Done on a schedule.' },
        { t: 'It lasts', d: 'Properly bedded tape does not blister or crack.' },
      ],
    },
    local: {
      h: 'Taping conditions here',
      p: [
        'Compound needs warmth and moving air to dry. A Waukesha basement in August is humid, and a garage in January is freezing. Neither is a good drying room without help.',
        'We bring fans, dehumidifiers or heat as the season demands, and plan the coats around real drying times.',
      ],
    },
    faqs: [
      { q: 'Will you finish drywall I hung myself?', a: 'Yes. We look it over first and tell you if anything needs fixing before tape goes on.' },
      { q: 'Paper or mesh tape?', a: 'Paper for almost everything. It is stronger on seams and the only good choice for inside corners.' },
      { q: 'Do you sand between coats?', a: 'Only to knock down ridges. Most sanding happens once, at the end.' },
      { q: 'How should I prepare the room?', a: 'Clear the floor along the walls and make sure there is power and heat. We cover what stays.' },
      { q: 'Is priming included?', a: 'Our work ends at a sanded surface. We can recommend the right primer for new drywall.' },
    ],
    related: ['drywall-finishing', 'drywall-installation', 'garage-drywall-installation', 'basement-drywall-installation'],
    ba: { before: 'new-room-drywall-taped-window', after: 'empty-room-smooth-plaster-walls', beforeAlt: 'New drywall with taped seams and coated screw heads', afterAlt: 'Smooth finished walls ready for paint' },
  },
  {
    slug: 'drywall-finishing',
    name: 'Drywall Finishing',
    short: 'Level 4 and Level 5 finishes, skim coats and texture.',
    title: 'Drywall Finishing in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Drywall finishing in Waukesha: Level 4 for most rooms, Level 5 skim coat for bright rooms and glossy paint, plus knockdown and orange peel texture.',
    h1: 'Drywall finishing in Waukesha',
    lede: 'The finish level decides how the wall looks under paint. We help you pick the right one and then deliver it.',
    photo: 'finisher-coating-wall-hard-hat',
    photoAlt: 'Finisher in a hard hat applying a coat of compound to a white wall',
    facts: [
      { k: 'Levels offered', v: 'Level 2 through Level 5' },
      { k: 'Textures', v: 'Smooth, orange peel, knockdown' },
      { k: 'Checked with', v: 'Raking work light before sign-off' },
    ],
    intro: [
      'Paint does not hide drywall. It shows it. Whatever is on the surface when the roller comes out is what you live with: every ridge, every scratch, every joint that was one coat short.',
      'Finishing is the stage that sets that surface. We finish new board, upgrade walls that were left rough, and skim coat over old texture and repairs.',
    ],
    what: {
      h: 'The levels, briefly',
      p: [
        'Level 2: tape and one coat. Garages and tile backer. Level 3: two coats, for walls getting heavy texture. Level 4: three coats, sanded. This is the normal standard for painted rooms.',
        'Level 5 is Level 4 plus a thin skim across the entire surface. It makes the paper and the joints take paint identically. Use it where light is harsh or paint is shiny.',
      ],
    },
    situations: {
      h: 'When to step up to Level 5',
      items: [
        { t: 'Sun along the wall', d: 'Windows at the end of a long wall.' },
        { t: 'Eggshell, satin or gloss', d: 'Sheen shows joints.' },
        { t: 'Dark colors', d: 'Deep paint shows every wave.' },
        { t: 'Wall washers and cove lights', d: 'Light skimming the surface.' },
        { t: 'Removing old texture', d: 'Skim coating over a wall you want smooth.' },
      ],
    },
    process: {
      h: 'Our routine',
      steps: [
        { t: 'Set the spec', d: 'Finish level agreed room by room.' },
        { t: 'Build the coats', d: 'Each coat dry before the next.' },
        { t: 'Skim', d: 'Full-surface coat where Level 5 is called for.' },
        { t: 'Sand under light', d: 'A lamp against the wall shows what to fix.' },
        { t: 'Touch up and clean', d: 'Marked spots corrected, dust removed.' },
      ],
    },
    materials: {
      h: 'Compounds and texture',
      p: [
        'Topping compound for final coats because it sands fine and leaves no pinholes. Skim coats go on with a roller and wide blade or a trowel.',
        'For texture we spray orange peel and knockdown and can hand-trowel a skip finish. A sample board comes first. For smooth walls, start painting with a high-build drywall primer.',
      ],
    },
    benefits: {
      h: 'What a good finish does',
      items: [
        { t: 'Makes paint look better', d: 'An even base gives an even coat.' },
        { t: 'Hides the joints', d: 'In any light.' },
        { t: 'Opens your options', d: 'Any color, any sheen.' },
        { t: 'Saves rework', d: 'Cheaper now than fixing it after paint.' },
      ],
    },
    local: {
      h: 'Finishing in Waukesha homes and offices',
      p: [
        'Open floor plans are everywhere in newer Waukesha construction. Long walls, tall windows and rows of recessed lights make a basic finish look worse than it is.',
        'Offices have the same issue under continuous strip lighting. We look at the lighting plan before recommending a level, at home or at work.',
      ],
    },
    faqs: [
      { q: 'Is Level 5 worth the extra cost?', a: 'In bright rooms and with shiny or dark paint, yes. In a closet or a dim hall, no. We will tell you which rooms need it.' },
      { q: 'Can you smooth my textured walls?', a: 'Yes. Skim coating fills the texture and leaves a flat wall. It takes two or three coats.' },
      { q: 'What causes joints to show through paint?', a: 'Compound and paper absorb paint differently. A skim coat or a high-build primer evens it out.' },
      { q: 'Do you spray texture?', a: 'Yes. Orange peel and knockdown, on walls and ceilings.' },
      { q: 'Can you finish over someone else’s taping?', a: 'Yes, after checking it. Poor base coats take extra work to bring up.' },
    ],
    related: ['drywall-taping-mudding', 'drywall-installation', 'popcorn-ceiling-removal', 'commercial-drywall-services'],
    ba: { before: 'house-interior-drywall-hung', after: 'empty-office-smooth-walls-ceiling-grid', beforeAlt: 'Drywall hung with joints showing', afterAlt: 'Smooth walls finished to a paint-ready standard' },
  },
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    short: 'Cracks, pops, dents, loose tape and broken corners put right.',
    title: 'Drywall Repair in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Drywall repair in Waukesha: cracks, nail pops, peeling tape, dented corners and holes. We fix what caused the damage, then refinish and match texture.',
    h1: 'Drywall repair in Waukesha',
    lede: 'The cracks, pops and dents a house collects over the years, fixed in one organized visit.',
    photo: 'cracked-wall-surface',
    photoAlt: 'Jagged crack running across a white wall surface',
    facts: [
      { k: 'Common repairs', v: 'Cracks, nail pops, tape, corners, holes' },
      { k: 'Approach', v: 'Fix the cause, then the surface' },
      { k: 'Best time', v: 'Before repainting or listing a home' },
    ],
    intro: [
      'Drywall takes abuse. Houses settle. Lumber shrinks. Doors slam. Kids happen. After ten or twenty years the walls show it, and a coat of paint will not cover any of it.',
      'We repair drywall for homeowners, landlords and businesses. Give us the list. We fix what is behind each problem, then make the surface right.',
    ],
    what: {
      h: 'Cause first',
      p: [
        'A crack is not the problem. It is the sign of one: tape that failed, a joint in the wrong place, framing that moves. Fill it without fixing that, and it will be back next season.',
        'Our repairs go to the cause. Loose board is screwed down. Failed tape is cut out. Broken bead is replaced. Then the area is taped, coated, sanded and textured.',
      ],
    },
    situations: {
      h: 'The usual list',
      items: [
        { t: 'Cracks over doors and windows', d: 'Diagonal lines from the corners of openings.' },
        { t: 'Nail pops', d: 'Small bumps or circles in walls and ceilings.' },
        { t: 'Peeling or bubbled tape', d: 'Seams lifting at corners and ceilings.' },
        { t: 'Crushed corners', d: 'Dented bead on outside corners.' },
        { t: 'Dents and gouges', d: 'From furniture and everyday life.' },
        { t: 'Old bad patches', d: 'Redone so they vanish.' },
      ],
    },
    process: {
      h: 'A repair visit',
      steps: [
        { t: 'Walk and mark', d: 'We go room to room with you and tag each spot.' },
        { t: 'Protect', d: 'Drop cloths and plastic where we work.' },
        { t: 'Fix the cause', d: 'Screws, tape, bead or new board.' },
        { t: 'Coat', d: 'Two or three coats on each repair.' },
        { t: 'Sand, texture, clean', d: 'Ready for primer.' },
      ],
    },
    materials: {
      h: 'What goes in',
      p: [
        'Drywall screws to re-fasten. Paper tape and setting compound for joints. New corner bead where the old is bent. Lightweight compound to finish.',
        'For cracks that have returned more than once, we add reinforcement and may look at whether the framing needs attention.',
      ],
    },
    benefits: {
      h: 'Why bother',
      items: [
        { t: 'Paint that looks new', d: 'Sound walls make the paint job.' },
        { t: 'Problems stop recurring', d: 'Fixed at the source.' },
        { t: 'One trip', d: 'Every repair in the building handled together.' },
        { t: 'Better value at sale', d: 'Buyers and inspectors notice walls.' },
      ],
    },
    local: {
      h: 'Wear and tear in Waukesha',
      p: [
        'Dry winter air shrinks framing. Humid summers swell it. That yearly cycle is the main reason Waukesha walls crack and pop, in new houses as much as old ones.',
        'We also do steady repair work for landlords near the university and for businesses downtown, where older buildings shift a little every year.',
      ],
    },
    faqs: [
      { q: 'Are cracks a sign of foundation problems?', a: 'Rarely. Hairline cracks at joints and openings are normal movement. Wide or growing cracks with sticking doors should be checked by a structural professional.' },
      { q: 'What is a nail pop?', a: 'A fastener that has worked loose and pushed its covering out. We add a screw next to it and refinish.' },
      { q: 'Can you repair before my painter arrives?', a: 'Yes. That is the ideal order. Tell us the painter’s date and we work back from it.' },
      { q: 'Do you charge by the repair or the job?', a: 'By the job. We see the full list and give one price.' },
      { q: 'Do you work in rental units?', a: 'Yes. We coordinate access with the owner or manager.' },
    ],
    related: ['drywall-patching', 'ceiling-drywall-repair', 'water-damaged-drywall-repair', 'drywall-finishing'],
    ba: { before: 'cracked-wall-surface', after: 'empty-room-smooth-plaster-walls', beforeAlt: 'Wall with a wide crack across the surface', afterAlt: 'Smooth repaired wall in a finished room' },
  },
  {
    slug: 'drywall-installation',
    name: 'Drywall Installation',
    short: 'Board measured, stocked and hung on wood or steel framing.',
    title: 'Drywall Installation in Waukesha, WI | Waukesha Elite Drywall',
    description: 'Drywall installation in Waukesha for new builds, additions, remodels and commercial space. Right board, correct fastening, few joints, ready to finish.',
    h1: 'Drywall installation in Waukesha',
    lede: 'Hung flat, screwed off properly, with as few joints as the room allows.',
    photo: 'installer-driving-screws-wall',
    photoAlt: 'Installer in overalls driving screws into a drywall panel',
    facts: [
      { k: 'Framing', v: 'Wood or steel stud' },
      { k: 'Fasteners', v: 'Screws throughout' },
      { k: 'Speed', v: 'Most rooms hung in a day' },
    ],
    intro: [
      'Hanging looks simple. Put the sheet up, screw it on. But how the board is hung decides how hard it is to finish and how long it stays crack-free.',
      'We install drywall in houses and commercial buildings across Waukesha. We plan the layout, use long sheets, and fasten to the book.',
    ],
    what: {
      h: 'What good hanging means',
      p: [
        'Fewer joints. Long sheets run across the framing cut the number of seams and almost eliminate butt joints in smaller rooms.',
        'Joints in the right places. Never at the corner of a door or window, where walls crack. Screws at the right spacing and depth. Tight cut-outs around boxes. Framing checked and corrected before the board hides it.',
      ],
    },
    situations: {
      h: 'Where we hang',
      items: [
        { t: 'New houses', d: 'Top to bottom, on the builder’s schedule.' },
        { t: 'Additions', d: 'New rooms joined to existing ones.' },
        { t: 'Gutted remodels', d: 'Rooms stripped to the studs.' },
        { t: 'Basements and garages', d: 'First-time finishes.' },
        { t: 'Commercial interiors', d: 'Partitions and ceilings on steel.' },
        { t: 'Single walls', d: 'A new partition or a filled-in doorway.' },
      ],
    },
    process: {
      h: 'Installation steps',
      steps: [
        { t: 'Take-off', d: 'Sheets counted by room and length.' },
        { t: 'Delivery', d: 'Board stocked where it will be used.' },
        { t: 'Framing check', d: 'Bowed studs fixed, backing added.' },
        { t: 'Hang', d: 'Ceilings, then walls.' },
        { t: 'Scrap out', d: 'Off-cuts gone, floors swept.' },
      ],
    },
    materials: {
      h: 'Board types',
      p: [
        'Regular 1/2-inch for walls. Sag-resistant or 5/8-inch for ceilings. Type X where a fire rating applies. Moisture-resistant in wet rooms. Abuse-resistant where walls take hits.',
        'We use 12-foot sheets whenever they will fit through the door. On steel studs, fine-thread screws. On wood, coarse-thread, with adhesive where it helps prevent pops.',
      ],
    },
    benefits: {
      h: 'What it gets you',
      items: [
        { t: 'A flatter wall', d: 'Board follows straight framing.' },
        { t: 'Lower finishing cost', d: 'Fewer joints, less compound.' },
        { t: 'Fewer cracks', d: 'Seams kept out of stress points.' },
        { t: 'Passed inspections', d: 'Right board, right fastening.' },
      ],
    },
    local: {
      h: 'Building in Waukesha',
      p: [
        'New homes are still going up on the edges of Waukesha, and older houses in the middle are being opened up and rebuilt inside. Both need board hung on a schedule that fits with inspections.',
        'In winter the building has to be closed in and heated first. Cold framing and frozen compound cause problems that show up months later.',
      ],
    },
    faqs: [
      { q: 'Do you supply materials?', a: 'Yes, normally. Board, screws, bead and compound are in the estimate. Labor-only pricing is available.' },
      { q: 'How do you get 12-foot sheets upstairs?', a: 'Through a window by boom truck when possible, or carried. We plan delivery before ordering.' },
      { q: 'Can you install over old walls?', a: 'Sometimes. Thin board can be laminated over sound plaster or damaged drywall. We check the wall first.' },
      { q: 'Do you install the insulation?', a: 'We can, if it is not already part of another trade’s scope. Say so when you ask for the estimate.' },
      { q: 'Will you hang and let me finish?', a: 'Yes, though most customers have us do both.' },
    ],
    related: ['drywall-taping-mudding', 'drywall-finishing', 'commercial-drywall-services', 'basement-drywall-installation'],
    ba: { before: 'commercial-space-under-construction', after: 'empty-room-smooth-plaster-walls', beforeAlt: 'Interior space open to the structure before boarding', afterAlt: 'Room with completed smooth walls' },
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
