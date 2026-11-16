/** Long-form supporting sections for service pages (part 2 of 2) and the homepage. */
import type { Extra } from './more';

export const moreB: Record<string, Extra[]> = {
  'basement-drywall-installation': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Basements carry more obstacles per square foot than any other room in the house.`],
      rows: [
        ['Soffits and boxes', `Ducts, beams and drain lines get framed around. Every soffit adds outside corners that need bead and three coats.`],
        ['Stair access', `Full sheets do not always make the turn. Shorter sheets go down easier and leave more joints to finish.`],
        ['Ceiling choice', `Drywall ceilings look clean and take the most labor. Decide early, since it changes the framing and the access plan.`],
        ['Room count', `One open room is quick. A bedroom, bath, closet and hallway mean more corners and more door openings.`],
        ['Moisture measures', `Moisture-resistant board in the bath and along risky walls costs a little more per sheet.`],
      ],
    },
    {
      id: 'ready',
      h: 'What must be done before we hang',
      p: [
        `Water first. If the basement has ever leaked, or the walls show white mineral bloom or damp patches after rain, deal with that before finishing. Grading, gutters, sealing, drainage. Drywall is the wrong tool for a wet wall.`,
        `Then everything inside the walls. Framing straight and complete. Plumbing and electrical roughed in. Insulation installed. Inspections passed where your permit requires them. Once the board is on, changes mean cutting it open.`,
        `Last, access. Every shutoff valve, cleanout, sump line and junction box needs to stay reachable. Mark them. We frame for access panels or leave openings where they belong.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where basements go wrong',
      rows: [
        ['Board on concrete', `Slabs pass moisture. We keep the bottom edge off the floor and let the baseboard cover the gap.`],
        ['Damp air', `Compound dries slowly below grade. A dehumidifier runs for the whole finishing stage.`],
        ['Buried valves', `A shutoff behind a finished wall is found again with a saw.`],
        ['Low soffits', `Boxing every duct at its lowest point drops the ceiling everywhere. Good soffit layout keeps headroom where people walk.`],
      ],
      after: [
        `Before delivery, clear the stairs and a place to stack sheets flat. Measure the tightest turn. If twelve-foot sheets will not make it, we order to suit.`,
        `Keep the basement at room temperature while we work, with the dehumidifier on. After the last coat, give it a few days before primer. Then prime everything. Basement air is hard on bare paper.`,
      ],
    },
  ],
  'ceiling-drywall-repair': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Overhead work is slower, and ceilings show more than walls.`],
      rows: [
        ['Type of damage', `A straight crack, a stain, a sag and a hole are four different jobs.`],
        ['Extent', `One joint or the whole room. Wide damage may be cheaper to re-board than to patch piece by piece.`],
        ['Texture', `Smooth ceilings blend easiest. Popcorn, knockdown and swirl need matching across the repair.`],
        ['Height', `Standard ceilings work from a bench. High ceilings need scaffold.`],
        ['Repaint area', `Ceilings rarely touch up. Budget for painting wall to wall.`],
      ],
    },
    {
      id: 'cause',
      h: 'Find the cause first',
      p: [
        `Stains mean water. A roof leak, a bathroom above, a sweating duct, or frost melting in the attic after a cold snap. The ceiling repair waits until that is traced and stopped.`,
        `Cracks mean movement. A crack that opens every winter along the line where ceiling meets wall is usually truss uplift. It is seasonal and cosmetic. The lasting repair lets the corner flex and does not fight it with more compound.`,
        `Sagging means the board has let go of the framing or was too thin for the spacing. Sometimes it screws back up. If the board got wet, or crumbles at the fasteners, it comes down and new board goes up.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where ceiling repairs go wrong',
      rows: [
        ['Narrow feathering', `A ceiling joint finished like a wall joint shows as a band. Ceilings need wider coats.`],
        ['Patching wet board', `Board that has been soaked stays weak after it dries. Replace it.`],
        ['Spot paint', `Flat ceiling paint touched up in one spot reads as a lighter patch. Paint the full plane.`],
        ['Ignoring the attic', `Wet or missing insulation above the repair brings the problem back.`],
      ],
      after: [
        `Clear the room under the repair or let us cover it. Everything falls down from a ceiling job. Compound, dust, old texture.`,
        `If the stain is new and you do not know the source, tell us. We can open the ceiling and look before anything is priced for repair.`,
      ],
    },
  ],
  'drywall-taping-mudding': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Taping is priced by board area, then adjusted for these.`],
      rows: [
        ['Hang quality', `Tight joints and properly set screws tape fast. Gaps, proud screws and broken edges add prep and coats.`],
        ['Butt joints', `Ends without a factory taper need wide feathering. Fewer butt joints means less labor.`],
        ['Corners', `Every inside corner is taped by hand. Every outside corner gets bead and three coats. Count them.`],
        ['Height', `Above nine feet, the work moves to stilts or scaffold.`],
        ['Finish level', `Level 3 under texture, Level 4 for paint, Level 5 for critical light. Each step adds a pass.`],
      ],
    },
    {
      id: 'conditions',
      h: 'Conditions that decide the result',
      p: [
        `Heat. Compound cures by drying. Below about 55 degrees it slows badly and bonds poorly. The space needs steady heat for a day before we start and until the last coat is dry.`,
        `Air. Humid, still air keeps coats wet. Moving air and a dehumidifier keep the schedule. Too much direct heat on one spot dries it too fast and cracks it.`,
        `Prep. Before any tape, we go over the board. Loose sheets get screws. Proud screws get set. Wide gaps get pre-filled with setting compound and left to harden. Torn paper gets cut out. Ten minutes of this per room saves a callback.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where taping goes wrong',
      rows: [
        ['Dry tape', `Not enough compound under the tape. It blisters weeks later.`],
        ['Heavy coats', `Thick fills shrink and crack. Thin coats, more of them.`],
        ['Over-sanding', `Scuffed paper beside the joint shows through paint as fuzz.`],
        ['Rushed recoats', `Compound over a wet coat traps moisture and fails.`],
      ],
      after: [
        `If you hung the board yourself, send photos before we quote. We will tell you straight whether it is ready to tape or needs fixing first.`,
        `Between visits, leave the room alone. Heat on, air moving, nothing leaning on the walls. When we finish, the walls are ready for primer.`,
      ],
    },
  ],
  'drywall-finishing': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Finishing is priced by level and area. Light and paint decide the level.`],
      rows: [
        ['Level chosen', `Level 4 is the standard for flat paint. Level 5 adds a full skim coat over every square foot.`],
        ['Lighting', `Long windows, skylights and wall-washing fixtures show everything. Those surfaces need the higher level.`],
        ['Paint sheen', `Flat hides. Eggshell shows more. Satin and gloss show all of it.`],
        ['Starting point', `Fresh taped board is one thing. Old walls with patches, cracks and paint ridges need repair before any skim.`],
        ['Ceilings', `Ceilings in open rooms are the hardest surface to finish and the first place the eye goes.`],
      ],
    },
    {
      id: 'levels',
      h: 'Picking the right level by room',
      p: [
        `You do not need Level 5 everywhere. A typical house does well with Level 5 on the main-floor ceilings and the walls that face big windows, and Level 4 in bedrooms, closets and halls with ordinary light.`,
        `Walk the house in the afternoon when the sun is low. Look along the walls, not at them. Anywhere you can see light skimming down a surface is a place where joints will show under a lower finish.`,
        `Dark colors change the answer. Deep blues, greens and charcoals reflect like a mirror compared with off-white, and they show ridges that pale paint hides. If a feature wall is going dark, finish it higher.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where finishes go wrong',
      rows: [
        ['Narrow joints', `Compound kept tight to the tape leaves a ridge. Width is what makes a joint vanish.`],
        ['Photographing', `Joints that show through paint as a different sheen. Caused by skipping primer or by uneven porosity on a Level 4 wall under critical light.`],
        ['Sanding scratches', `Coarse paper leaves lines that paint will not fill. Final sanding is fine grit with a light behind it.`],
        ['Dust left on', `Paint over sanding dust does not bond. Walls get wiped down.`],
      ],
      after: [
        `Tell us the paint before we start. Brand does not matter. Sheen and color do.`,
        `After we finish, prime with a drywall primer and look again in daylight before color goes on. Primer shows small flaws while they are still a two-minute fix.`,
      ],
    },
  ],
  'drywall-repair': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Repair is priced by time on site and number of visits.`],
      rows: [
        ['The list', `One crack or a whole-house punch list. A longer list costs more in total and much less per item.`],
        ['Type of damage', `Screw pops are quick. Long joint cracks need the tape cut out and replaced. Crushed corners need new bead.`],
        ['Texture', `Matching existing texture adds a step to every repair on that wall.`],
        ['Reach', `Stairwells and high ceilings need staging.`],
        ['Cause', `If the cause is still active, the repair waits or it gets repeated.`],
      ],
    },
    {
      id: 'causes',
      h: 'Why walls crack and pop',
      p: [
        `Wood moves. It shrinks in a dry Wisconsin winter with the furnace on and swells in a humid summer. Drywall does not move with it. The stress shows up at the weakest points: joints, corners, and the fasteners.`,
        `Screw pops happen when the board is not tight to the stud. As the stud shrinks, the screw head stays put and the board moves in, leaving a bump. The fix is a new screw nearby to pull the board tight, then both get filled.`,
        `Cracks above doors and windows follow the framing around the opening. Those need paper tape and setting compound. Caulk and spackle in a moving crack last one season.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where repairs go wrong',
      rows: [
        ['Spackle in a joint crack', `It fills. It does not hold. The crack is back by spring.`],
        ['Re-driving the same screw', `The hole is already stripped. A new screw goes beside it.`],
        ['Narrow repairs', `Tight patches leave ridges. Feather wide.`],
        ['No primer', `Repairs flash through the finish coat.`],
      ],
      after: [
        `Walk the house with painter's tape and mark every spot. Check ceilings and closets too. Send photos, and we will price the list as one job.`,
        `If the house is new, consider waiting through one full winter. Most of the movement happens early, and one repair visit after it settles beats three during.`,
      ],
    },
  ],
  'drywall-installation': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Board count is the base. These adjust it.`],
      rows: [
        ['Board type', `Standard 1/2-inch for most walls. 5/8-inch for ceilings on wide framing and for rated walls. Moisture-resistant in baths. Heavier board hangs slower.`],
        ['Layout', `Long clear walls take long sheets and few joints. Chopped-up rooms mean more cuts and more seams.`],
        ['Height', `Standard walls hang from the floor. Tall walls and ceilings need lifts or scaffold.`],
        ['Access', `Stocking a second floor or a basement by hand takes labor before the first sheet goes up.`],
        ['Framing condition', `Straight framing hangs fast. Bowed studs and uneven joists need correcting first.`],
      ],
    },
    {
      id: 'ready',
      h: 'Ready-to-hang checklist',
      p: [
        `Rough-in done and inspected. Electrical, plumbing, HVAC, low voltage. We do not cover work that is waiting on an inspector.`,
        `Insulation and vapor retarder in place. Blocking installed for cabinets, vanities, grab bars, televisions and stair rails. If something heavy will hang on the wall, it needs wood behind it now.`,
        `Framing checked. We run a straightedge over the studs and joists and flag anything out of line. A bowed stud is a ten-minute fix before board and a permanent wave in the wall after. Take photos of the open walls the day before we hang. You will want them later.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where installs go wrong',
      rows: [
        ['Overdriven screws', `A screw that breaks the paper holds nothing. Those pop later.`],
        ['Joints at openings', `Seams at door and window corners crack. Board runs past the corner.`],
        ['Forced sheets', `Board jammed in tight cracks as framing moves. Cut to fit with a small gap.`],
        ['Short sheets', `More small pieces mean more joints to finish and more places to crack.`],
      ],
      after: [
        `Give us a clear delivery path and a dry, flat place to stack. Tell us about tight stairs or low doorways before we order.`,
        `Once the board is up, taping starts as soon as the space is heated and dry. If you are bringing in your own finisher, we leave the hang ready for them: screws set, edges clean, scrap out.`,
      ],
    },
  ],
};

export const homeGuide: { h: string; p: string[] }[] = [
  {
    h: 'What drywall work actually includes',
    p: [
      `Three stages. Hanging puts board on framing. Taping covers joints and fasteners with tape and compound. Finishing is the last coats and sanding, done to an agreed level so the surface is ready for primer.`,
      `Some jobs need all three. A basement, an addition, a build-out. Some need only the last two, such as a room where the owner hung the board. Repairs compress all three into a small area and add a fourth task, which is blending the new work into the old wall.`,
      `When you ask for a price, say which stages you want. When you compare prices, check that each one covers the same stages and the same finish level.`,
    ],
  },
  {
    h: 'How finish levels work',
    p: [
      `The industry describes finish in levels from 0 to 5. Level 0 is bare board. Levels 1 and 2 are for hidden spaces and garages. Level 3 goes under heavy texture. Level 4 is the normal standard for painted walls. Level 5 adds a thin skim over the whole surface for the most demanding light and paint.`,
      `Higher is not always better. It is more labor, and in a closet nobody benefits. The right level depends on the light in the room and the sheen of the paint. We will recommend one for each area and write it into the estimate.`,
    ],
  },
  {
    h: 'What Waukesha houses tend to need',
    p: [
      `This is an old city with new edges. Near downtown there are houses with original plaster, later drywall additions, and a century of repairs layered on both. Mid-century neighborhoods have ranches with sprayed ceilings and basements finished in paneling. The newer subdivisions have tall ceilings, open plans, and the screw pops and corner cracks that come with young framing.`,
      `Each calls for something different. Plaster-to-drywall transitions need reinforcing. Sprayed ceilings need testing before removal. New homes mostly need patience, then one thorough repair visit after the lumber has finished drying.`,
    ],
  },
  {
    h: 'Weather and timing',
    p: [
      `Compound dries by evaporation, so the season matters. In winter, heated houses dry fast and unheated spaces do not dry at all. In summer, basements stay damp and slow everything down unless a dehumidifier is running.`,
      `Plan for it. Garages and additions in cold months need temporary heat. Basements need air movement. A normal three-coat finish needs at least three visits with drying time between. That time can be shortened a little with setting compounds. It cannot be removed.`,
    ],
  },
  {
    h: 'Permits and inspections',
    p: [
      `Patching a wall does not usually involve a permit. Finishing a basement, adding a room or altering a commercial space generally does. In those jobs the drywall stage waits on inspections of the framing, wiring, plumbing and insulation behind it.`,
      `The rules come from the municipality. The City of Waukesha building department, or the one for your town or village, can tell you what applies. If your project has a permit, tell us where it stands and we will schedule the hang after the rough inspections pass.`,
    ],
  },
  {
    h: 'How to get an accurate number',
    p: [
      `Send photos. One wide, one close, with something for scale. Give rough room sizes and ceiling height. Say whether the space is lived in or empty, and what the walls will be painted with.`,
      `Say what caused the damage if it is a repair. Say when you need it done. If a painter or a flooring crew is booked behind us, we need that date at the start.`,
      `For small repairs, that is often enough to price the job. For larger work we come out, measure, and look at the framing and the access before putting a number in writing.`,
    ],
  },
  {
    h: 'Repair or replace',
    p: [
      `Dry, firm, well-fastened board can be repaired almost indefinitely. Cracks, holes, dents and loose tape are all repairs. Board that has been soaked, has gone soft, or crumbles at the screws should be replaced.`,
      `Scale matters too. When a ceiling has a dozen patches of different ages and thicknesses, a new layer of board over the whole thing is often less work and gives a flatter result. We look at what is there and recommend the smaller job when the smaller job will last.`,
    ],
  },
  {
    h: 'After we leave',
    p: [
      `Prime first. New board and compound absorb paint at different rates, and a drywall primer evens that out. Look at the primed walls in daylight and mark anything you want touched up before color.`,
      `Expect some movement in the first year of new construction. A hairline at a corner or a screw that shows after winter is routine and easy to correct. Keep indoor humidity steady through the seasons and the walls will stay quieter.`,
    ],
  },
  {
    h: 'Doing part of it yourself',
    p: [
      `Plenty of owners handle demolition, clear the rooms, or hang their own board. That is a reasonable way to control cost. Finishing is the stage to hire out, because it depends on feel that takes years to build.`,
      `If you plan to hang and have us finish, call before you start. Sheet layout, screw depth and where the butt joints land all affect how the finish turns out. Ten minutes of advice at the beginning saves a day at the end.`,
    ],
  },
];
