/** Long-form supporting sections (part 3): decisions, terms and handover notes. */
import type { Extra } from './more';

export const moreC: Record<string, Extra[]> = {
  'commercial-drywall-services': [
    {
      id: 'handover',
      h: 'Handover',
      p: [
        `At the end we walk the space with whoever is signing off. Walls are checked under a work light, corners sighted for straightness, and rated walls checked for sealed penetrations. Anything on the list gets fixed before the painters start, not after.`,
        `You get the space broom-clean with scrap and empty buckets removed. If the building has rules for waste, recycling or dock use, we follow them on the way out the same as on the way in. Leftover board and compound stay only if you ask for them.`,
        `If tenant improvements will continue in phases, we note what was built and where the rated walls run, so the next phase starts from facts.`,
      ],
    },
  ],
  'residential-drywall-services': [
    {
      id: 'decide',
      h: 'Decisions to make before we start',
      p: [
        `Smooth or textured. If the house has textured walls and you are doing one room, matching is usually the right call. If you are redoing a whole floor, this is the moment to go smooth if you have wanted to.`,
        `How far to take the paint. A repair can end at primer, and you or your painter take it from there. Decide who is painting and when, so the wall does not sit unprimed for weeks.`,
        `What else is behind the wall. If you have been meaning to add an outlet, move a switch, run a cable or insulate an outside wall, do it while the board is off. Opening a finished wall a second time doubles the drywall cost of the project.`,
        `Which rooms come first. In a lived-in house we work in an order that keeps a bathroom, the kitchen and a bedroom usable at all times.`,
      ],
    },
  ],
  'popcorn-ceiling-removal': [
    {
      id: 'decide',
      h: 'Scrape, skim or cover',
      p: [
        `There are three ways to get rid of a popcorn ceiling, and the right one depends on the ceiling. Scraping suits unpainted texture on sound board. It is the least material and the most mess.`,
        `Skimming over suits texture that is painted hard and well bonded. The peaks are knocked down and the whole ceiling is coated flat with compound in several passes. Nothing is removed, so less dust is released, but it takes more coats.`,
        `Covering suits ceilings in poor shape or texture that should not be disturbed. New thin board is screwed through to the joists and finished like any new ceiling. The room loses a fraction of an inch of height and gains a ceiling with fresh, flat joints.`,
        `We check a test patch in a closet or corner and tell you which method fits. If two would work, we price both.`,
      ],
    },
    {
      id: 'after',
      h: 'What you get at the end',
      p: [
        `A flat ceiling, sanded and ready for primer. Light fixtures and vent covers go back up, or stay down if you are replacing them. The plastic comes out with the debris in it, and floors are vacuumed. Expect to prime and paint the ceiling before the room looks finished. Flat white is the forgiving choice. If you want recessed lights added, have the electrician in before we skim.`,
      ],
    },
  ],
  'drywall-patching': [
    {
      id: 'methods',
      h: 'Which patch method fits which hole',
      rows: [
        ['Nail and screw holes', `Filled with compound in two passes and sanded. No tape needed. The second pass covers the shrinkage of the first.`],
        ['Up to about two inches', `Small enough to bridge with a reinforced patch and setting compound, as long as the board around it is firm.`],
        ['Fist to dinner plate', `Cut square, backed with wood strips screwed inside the wall, filled with new board, taped on all four sides.`],
        ['Larger than a stud bay', `Cut back to the middle of the studs on each side so the new piece fastens to framing. Finished like a new joint.`],
        ['Around boxes and pipes', `Oversized cut-outs are closed with fitted pieces and taped tight to the box or escutcheon so the cover plate hides the edge.`],
      ],
      after: [
        `The method decides how long the patch lasts. A plate-sized hole bridged with mesh and no backing will look fine for a few months. Then someone leans on it.`,
        `We also fix what caused the hole where that is simple. A door stop behind a handle hole. A proper anchor or blocking where a shelf pulled out. Otherwise the same spot gets hit again and the new patch takes the damage.`,
        `If the patch sits on a wall that has been repaired before, expect us to widen the work. Old humps and ridges next to a new flat patch look worse than before, so we blend the lot.`,
      ],
    },
  ],
  'water-damaged-drywall-repair': [
    {
      id: 'signs',
      h: 'Reading the signs',
      rows: [
        ['Brown ring, dry and firm', `An old leak that stopped, or a slow one. Check that the source is fixed. If the board is solid, it can be sealed and repainted without replacement.`],
        ['Soft or crumbling', `The gypsum core has broken down. That section comes out.`],
        ['Bubbling paint or tape', `Water got between the layers. Tape lifts first. The joint needs to be stripped and rebuilt once dry.`],
        ['Sagging ceiling', `The board is holding water or has lost its grip on the screws. Treat it as urgent and stay out from under it.`],
        ['Musty smell, no stain', `Moisture inside the cavity. Worth opening a small inspection hole before it shows on the surface.`],
      ],
      after: [
        `Location tells you a lot. Stains under a bathroom usually trace to the tub drain, the toilet seal or the shower valve. Stains near an outside wall or chimney usually trace to the roof or flashing. Stains that appear in late winter along the eaves often come from ice dams.`,
        `Basement walls are their own case. Damage along the bottom edge points to water on the floor. Damage higher up points to a pipe or a window well. We note what we see and tell you which trade to call if the source is not ours to fix.`,
        `When the repair is finished, keep an eye on it through the next heavy rain or the next few weeks of showers. If the stain does not return, the source was found. If it does, call before it spreads.`,
      ],
    },
  ],
  'garage-drywall-installation': [
    {
      id: 'decide',
      h: 'Decisions to make first',
      p: [
        `How finished do you want it? There is a real range. At one end, board is hung and the joints get tape and a single coat to seal them. It is functional and looks like a garage. At the other end, walls and ceiling are finished smooth, primed and painted, and the space looks like a room. Most people land in between: a clean taped finish with two coats, painted white so the lights work harder.`,
        `Will it be heated? If so, insulate now and consider the ceiling as well as the walls. A heated garage with a bare ceiling loses most of its heat upward. Insulation also changes which inspections apply.`,
        `Do you need attic access? If there is storage or mechanical equipment above the garage ceiling, plan the hatch or pull-down stair before the ceiling is boarded. Cutting one in afterward means reframing between trusses.`,
        `What about the lower walls? Garages take abuse from car doors, bikes and tools. Some owners add a durable panel or trim over the lower few feet after drywall. Tell us and we will leave the bottom edge ready for it.`,
      ],
    },
    {
      id: 'terms',
      h: 'Terms you will hear',
      rows: [
        ['Type X', `Fire-rated gypsum board, usually 5/8-inch, with a denser core. Commonly required between a garage and living space.`],
        ['Fire taping', `Tape and one coat of compound over all joints. Seals the assembly. Not a paint-ready finish.`],
        ['Sag-resistant board', `Ceiling board made to span wide framing without drooping.`],
        ['Separation wall', `The wall or ceiling between the garage and the house.`],
      ],
      after: [`Your building department has the final word on what your garage needs. We build to what the permit and inspector call for.`],
    },
  ],
  'basement-drywall-installation': [
    {
      id: 'decide',
      h: 'Decisions to make first',
      p: [
        `Ceiling: drywall or drop? A drywall ceiling looks like the rest of the house and gives the most headroom between joists. It also closes in every pipe and wire above it. A suspended ceiling keeps everything reachable and costs you a few inches. Some basements use both: drywall in the main room, a removable section under the plumbing.`,
        `Smooth or textured ceiling? Smooth looks best and shows the most. Basement ceilings are low and lit from close range, so joints are easy to see. A light texture is a fair choice here if budget matters.`,
        `Where do the soffits go? Ducts and beams have to be boxed. A good layout runs soffits along walls and over hallways, and keeps the full ceiling height in the middle of the room where it is noticed.`,
        `Which rooms get moisture-resistant board? The bathroom, certainly. The laundry and any wall near the sump or water heater are worth considering.`,
      ],
    },
    {
      id: 'terms',
      h: 'Terms you will hear',
      rows: [
        ['Soffit', `A framed and boarded box that hides a duct, beam or pipe below the main ceiling.`],
        ['Access panel', `A removable door set into drywall so a valve or junction stays reachable.`],
        ['Moisture-resistant board', `Gypsum board with a treated core and face for damp areas. Not waterproof, and not a tile backer for showers.`],
        ['Corner bead', `Metal or vinyl strip that forms a straight outside corner. Soffits use a lot of it.`],
        ['Egress', `A code-required escape route, such as a window, in a basement bedroom. Decided at framing, long before drywall.`],
      ],
      after: [`If any of this is still undecided when we visit, we will go through it with you on site and price the options side by side.`],
    },
  ],
  'ceiling-drywall-repair': [
    {
      id: 'methods',
      h: 'Repair methods by problem',
      rows: [
        ['Hairline joint crack', `Old tape cut out, joint re-taped with paper, three coats feathered wide.`],
        ['Ceiling-to-wall crack', `Usually truss movement. Repaired so the corner can flex, often with the ceiling board floated free of the top plate near the wall.`],
        ['Water stain on firm board', `Source confirmed fixed. Stain sealed with a blocking primer, then the ceiling repainted.`],
        ['Soft or sagging section', `Cut back to joists, new board fastened, joints taped and finished.`],
        ['Screw pops in rows', `New screws beside the old ones to pull the board tight, both filled in two coats.`],
        ['Old patch that shows', `Sanded down, skimmed wide, and blended into the field of the ceiling.`],
      ],
      after: [
        `Textured ceilings add a step. After the repair is flat, the texture is rebuilt over it and feathered into the surrounding area. Popcorn is the hardest to match because old texture yellows and flattens over time. Sometimes the honest advice is to retexture or smooth the whole ceiling in that room.`,
        `Where a ceiling has cracked along the same line more than once, we look at the framing above. Joists that were notched, a wall removed below, or attic storage loaded onto ceiling framing can all keep a crack alive. Drywall repair cannot hold against a structure that is still moving.`,
        `Scheduling is usually two or three visits. Cut-out and first coats on day one. Second coat a day later. Final coat, sanding and texture after that. The room stays usable in between if you do not mind the plastic.`,
        `When we finish, the repair is sanded and ready for primer. Prime it, then paint the whole ceiling in one go, working toward the main window.`,
      ],
    },
  ],
  'drywall-taping-mudding': [
    {
      id: 'coats',
      h: 'What each coat does',
      rows: [
        ['Pre-fill', `Gaps and damaged edges packed with setting compound before any tape. It hardens chemically and does not shrink back.`],
        ['Tape coat', `Paper tape bedded in compound over every joint and inside corner. This coat is structural. It is what stops the joint cracking.`],
        ['Fill coat', `A wider pass that covers the tape and fills the tapered recess between sheets. Screw heads get their second coat here.`],
        ['Finish coat', `The widest and thinnest pass. It blends the joint into the board face. Lightweight compound, easy to sand.`],
        ['Sanding', `Fine grit, with a light held along the wall. The aim is to remove tool marks, not compound.`],
        ['Skim, if Level 5', `A thin film over the entire surface so paper and compound present one uniform face to the paint.`],
      ],
      after: [
        `Paper or mesh. We use paper tape for almost everything. It is stronger across the joint and folds cleanly into corners. Mesh has its place with setting compound on repairs. Mesh under ordinary premixed compound is the cause of many cracked joints.`,
        `Hand or machine. Large jobs are often taped with automatic tools that apply tape and compound together. Small jobs and repairs are done by hand. The result should be the same. What matters is that the tape is fully bedded and each coat is wider than the last.`,
      ],
    },
    {
      id: 'terms',
      h: 'Terms you will hear',
      rows: [
        ['Mud', `Joint compound. Comes premixed in buckets or as a setting powder mixed with water.`],
        ['Hot mud', `Setting compound. Hardens in a fixed time whatever the humidity.`],
        ['Butt joint', `Where two cut ends meet with no taper. The hardest joint to hide.`],
        ['Feathering', `Thinning the edge of a coat to nothing so it blends into the board.`],
        ['Bead', `The strip that forms an outside corner.`],
      ],
      after: [
        `Timeline for a typical room: three working visits across four or five days, with heat on throughout. Larger jobs run the same sequence room by room so that something is always drying while something else is being coated.`,
        `If the board was hung by someone else, we will list anything that needs correcting before we tape and price that separately, so you can see what the taping itself costs.`,
      ],
    },
  ],
  'drywall-finishing': [
    {
      id: 'levels',
      h: 'The levels in plain terms',
      rows: [
        ['Level 1', `Tape set in compound. Nothing more. Used above ceilings and in spaces nobody sees.`],
        ['Level 2', `Tape plus one thin coat. Common in garages and behind tile.`],
        ['Level 3', `Tape plus two coats. Meant for walls that will get a heavy texture.`],
        ['Level 4', `Tape plus three coats, sanded smooth. The standard for flat paint in normal light.`],
        ['Level 5', `Level 4 plus a skim coat over the entire surface. For gloss, dark colors and raking light.`],
      ],
      after: [
        `On existing walls the word finishing covers a different job. Old surfaces carry years of patches, roller texture and paint ridges. Bringing them back to flat means scraping, filling and skim coating the whole wall, sometimes twice. It is closer to resurfacing than to finishing new board.`,
        `Skim coating is also how a textured wall becomes a smooth one. The texture is knocked down, then filled level in two or three passes. It costs more than finishing new board because there is more to fill, and it transforms a dated room.`,
      ],
    },
    {
      id: 'inspect',
      h: 'How to inspect a finish',
      p: [
        `Use a light. Hold a bright work light close to the wall and aim it along the surface. Joints, ridges, scratches and pinholes all throw a shadow. Do it before primer and again after.`,
        `Use your hand. Run a flat palm across each joint. You should not feel where it starts or stops. Outside corners should feel straight with no edge of bead.`,
        `Look from the doorway. Stand where people will stand and look toward the windows. That is the view that matters, and it is the view we finish for.`,
        `Mark what you find with a pencil, lightly. Do not use pen or marker. Ink bleeds through paint. We go back over every mark before calling the job done.`,
      ],
    },
  ],
  'drywall-repair': [
    {
      id: 'methods',
      h: 'Repair methods by problem',
      rows: [
        ['Screw and nail pops', `A new screw set beside the old fastener to pull the board in. Loose fastener removed or reset. Two coats over both.`],
        ['Joint cracks', `Loose tape and compound cut out. Joint re-taped with paper and rebuilt in three coats.`],
        ['Corner cracks', `Inside corners re-taped. Where framing moves, a flexible corner product may be the better choice.`],
        ['Dented outside corners', `Damaged bead cut out and a new section set in, then coated to match the line of the old corner.`],
        ['Holes', `Cut square, backed, filled with board and taped. See our patching page for sizes.`],
        ['Loose or bubbled tape', `Cut out along its length, re-bedded with enough compound, and recoated.`],
        ['Torn face paper', `Sealed with a primer made for it, then skimmed. Compound straight over torn paper will blister.`],
      ],
      after: [
        `Most houses need a mix of these. A typical list has a dozen pops, two or three cracks at door corners, a dented corner in the hall, and a hole behind a door. That is one day of cut-out and first coats, then two short visits to finish.`,
        `Texture gets matched on each repair. Paint is the last variable. If the walls were painted recently and you have the same can, small repairs can sometimes be touched in. Otherwise plan to repaint each repaired wall from corner to corner.`,
      ],
    },
    {
      id: 'when',
      h: 'When it is more than drywall',
      p: [
        `Some marks on a wall are messages. A diagonal crack that keeps growing from the corner of a door. A door that has started to stick near it. A crack you can fit a coin into. A gap opening between wall and ceiling on one side of the house only.`,
        `Those point to movement in the structure or the foundation, and patching them hides the evidence without touching the cause. If we see signs like that, we tell you, and we suggest having it looked at by the right professional before spending money on the surface.`,
        `The same goes for water. A repair over a stain with an unknown source is a guess. We would sooner cut a small inspection hole and look.`,
      ],
    },
  ],
  'drywall-installation': [
    {
      id: 'board',
      h: 'Board types and where they go',
      rows: [
        ['Standard 1/2-inch', `Walls throughout the house on studs at 16 inches. Light enough to handle, stiff enough to stay flat.`],
        ['5/8-inch', `Ceilings on framing at 24 inches, and anywhere extra stiffness or sound control is wanted.`],
        ['Type X', `Fire-rated 5/8-inch board. Garages next to living space, furnace rooms, and rated commercial walls.`],
        ['Moisture-resistant', `Bathrooms, laundry rooms, and basement walls near plumbing. Not for inside a shower.`],
        ['Cement or foam backer', `Behind tile in wet areas. Not drywall, though it is installed at the same stage.`],
        ['Sound-damping board', `Laminated panels for home theaters, bedrooms next to noisy rooms, and offices.`],
      ],
      after: [
        `Thickness has to stay consistent across a surface. Mixing 1/2-inch and 5/8-inch on one wall leaves a step at every joint that no amount of compound will hide.`,
        `Sheet length is a choice too. Twelve-foot sheets cut the number of butt joints in a room by a third or more compared with eight-footers. They are heavier and harder to get into a house, and worth it wherever they fit.`,
      ],
    },
    {
      id: 'method',
      h: 'How a room is hung',
      p: [
        `Ceilings first. Sheets run across the joists, with end joints staggered so they do not line up. Wall board then goes up tight under the ceiling and supports its edge.`,
        `Walls are hung with sheets lying horizontally in most rooms. That puts the long tapered joint at a comfortable working height and reduces the total length of seams. The top sheet goes on first, pushed up to the ceiling. The bottom sheet is lifted to meet it, leaving a small gap at the floor that the baseboard covers.`,
        `Openings are cut in place where possible. Board runs over the door or window opening and is cut out afterward, so there is no joint at the corner of the opening where cracks start.`,
        `Screws go in at regular spacing, set just below the paper without breaking it. Outlets and switches are cut tight so cover plates hide the edge. At the end of the hang, we check every sheet for loose spots by pressing on it and add screws where it moves.`,
      ],
    },
  ],
};

export const homeGuideMore: { h: string; p: string[] }[] = [
  {
    h: 'Terms worth knowing',
    p: [
      `Drywall, sheetrock, gypsum board and wallboard all mean the same product. Sheetrock is a brand name. Mud is joint compound. Tape is the paper strip bedded over every joint. Bead is the strip that makes an outside corner straight.`,
      `A butt joint is where two cut ends meet. A tapered joint is where two factory edges meet and leave a shallow recess for the compound. Feathering is thinning the edge of a coat until it disappears. Skim coating is spreading a thin layer over a whole surface. Type X is fire-rated board. Level 5 is the smoothest standard finish.`,
      `You do not need to learn the trade. Knowing these few words makes it easier to read an estimate and to ask the right question when two estimates disagree.`,
    ],
  },
  {
    h: 'How we keep a house livable during the work',
    p: [
      `Dust is the main complaint about drywall work, and most of it is avoidable. The work area is closed off with plastic at the doorway. Floors on the route in and out are covered. Supply and return vents in the room are sealed so the furnace does not carry dust through the house.`,
      `Sanding is done with tools connected to a vacuum where the job allows, and by hand with a light touch where it does not. At the end of each day the area is swept and tools are stacked out of the way.`,
      `Compound has a mild smell while it dries and none once it has cured. Rooms can be slept in between coats. Pets and small children should be kept out of the work area, mainly because wet compound on a wall is very tempting to touch.`,
    ],
  },
  {
    h: 'Commercial and residential are different jobs',
    p: [
      `The materials overlap. The way the work is run does not. A house is finished around the people who live in it, one or two rooms at a time, with protection for floors and furniture. A commercial space is finished to a schedule shared with other trades, usually on steel studs, often with fire-rated walls, and often outside business hours.`,
      `We do both, and we plan them differently from the first conversation. If you are a homeowner, expect questions about paint, pets and which bathroom you need to keep. If you manage a building, expect questions about drawings, access, inspections and who signs off.`,
    ],
  },
  {
    h: 'What an estimate from us covers',
    p: [
      `A written scope in plain language. Which rooms and surfaces. Which stages: hang, tape, finish. The finish level for each area. Whether texture matching is included. What protection and cleanup are included. What is not included, such as painting or fixing the source of a leak.`,
      `It also lists what we need from you: heat, access, a place for materials, and decisions that affect the work. If something cannot be known until a wall is opened, the estimate says so and explains how that part will be priced once we can see it.`,
      `Read it against any other estimate line by line. Where two numbers differ, the difference is usually in the scope, and usually in the finish level.`,
    ],
  },
];
