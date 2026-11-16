/**
 * Long-form supporting sections for service pages (part 1 of 2).
 * General trade information only. No business facts, prices or guarantees.
 */
export interface Extra {
  id: string;
  h: string;
  p?: string[];
  rows?: [string, string][];
  after?: string[];
}

export const moreA: Record<string, Extra[]> = {
  'commercial-drywall-services': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Commercial pricing is a function of scope, height, rating and access. Drawings help. A site walk helps more.`],
      rows: [
        ['Wall height', `Partitions to the ceiling grid are quick. Walls to the deck need longer studs, more board, and a lift. Above ten feet, production slows on every step.`],
        ['Rated assemblies', `One-hour and two-hour walls mean Type X board, sometimes in two layers, with sealed penetrations. The assembly on the drawings is what gets built and inspected.`],
        ['Finish level', `Level 4 is normal for painted offices. Level 5 belongs in lobbies and corridors with long raking light. Back-of-house rooms can sit lower. Mixed levels keep the budget where people will see it.`],
        ['Building access', `Loading dock or front door. Freight elevator or stairs. Daytime or after hours. Each answer changes labor more than material.`],
        ['Schedule pressure', `A fixed opening date can be met. It takes a larger crew and tighter coordination with the other trades, and that shows up in the number.`],
      ],
    },
    {
      id: 'coordination',
      h: 'Coordination on an active site',
      p: [
        `Drywall sits in the middle of the schedule. Framing and rough-in come before it. Paint, ceilings, flooring and millwork come after. A day lost at our stage is a day lost by every trade behind us, so we confirm dates before we mobilize and say so early if something upstream is slipping.`,
        `Inspections control when walls can close. In-wall electrical, plumbing and any fire-stopping need sign-off first. We do not cover work that has not passed. Reopening a finished wall for an inspector costs far more than waiting a day.`,
        `In occupied buildings, the property manager sets the rules. Noise windows, elevator padding, dust barriers, where the dumpster goes. We ask for those rules in writing at the start and build the plan around them.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where build-outs go wrong',
      rows: [
        ['Missing blocking', `Wall-hung monitors, casework and restroom accessories need backing in the wall. It takes minutes before board and hours after.`],
        ['No heat', `Compound will not cure in a cold shell. Permanent or temporary heat needs to be running before taping starts.`],
        ['Late changes', `Moving a door after the board is up means reframing, new board and refinishing two walls. Changes are cheapest on paper.`],
        ['Unsealed penetrations', `A rated wall with open holes around pipe and conduit is not a rated wall. Penetrations get sealed as part of the work.`],
      ],
      after: [
        `Tell us who is running the job. If there is a general contractor, we take direction from them and work to their schedule. If you are managing the trades yourself, we will help you set the order. Either way, one point of contact on each side keeps decisions fast and avoids two people giving two different answers.`,
      ],
    },
  ],
  'residential-drywall-services': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Two houses with the same square footage can price very differently. These are the reasons.`],
      rows: [
        ['Ceilings', `Ceilings take longer than walls. Vaulted ceilings and stairwells take longer again because of staging.`],
        ['New board or repair', `New board is priced by area. Repairs are priced by time, and most of that time is blending the repair into the old wall.`],
        ['Finish expectation', `A smooth ceiling under strong daylight needs more coats than a closet. Tell us where it matters most.`],
        ['Texture', `Matching an existing knockdown or orange peel takes test passes. Smooth walls are simpler to blend.`],
        ['Occupied or empty', `Working around furniture, pets and a daily routine is slower than working in an empty house. Both are fine. The plan is different.`],
      ],
    },
    {
      id: 'notes',
      h: 'Notes from working in houses',
      p: [
        `Older homes in Waukesha often have more than one wall type. Plaster in the original rooms, drywall in the addition, paneling in the basement. Where two meet, the joint needs a different approach than a normal seam, or it cracks along the line within a season.`,
        `Newer homes have their own pattern. Framing lumber dries out over the first few winters and pushes screws outward. Trusses lift in cold weather and open a hairline where ceiling meets wall. This is normal movement. It is best repaired after the house has been through a full heating season or two.`,
        `Most residential work happens around a family that still lives there. We set up dust control at the door of the room, protect the floor on the path in, and clean up at the end of each day. You should be able to use the rest of the house as usual.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Problems we get called to fix',
      rows: [
        ['Humped patches', `Too much compound in too small an area. It has to be cut back and feathered wide.`],
        ['Cracks that return', `Filled without tape. Any crack that follows a joint needs tape or it comes back.`],
        ['Flashing', `A repair painted without primer. It shows as a dull patch in side light.`],
        ['Mismatched texture', `A smooth patch on a textured wall. The texture has to be rebuilt over the repair and blended outward.`],
      ],
      after: [
        `Your part is simple. Clear the area, tell us what caused the damage, and tell us what the walls will be painted with. Paint sheen changes how fine the finish must be, and it is much easier to finish for satin than to discover satin after the fact.`,
        `Plan for primer. Every repair and every new sheet should be primed before the finish coats. It is the step that makes new work and old wall take paint the same way.`,
      ],
    },
  ],
  'popcorn-ceiling-removal': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Ceiling area is the base. These five things move the number from there.`],
      rows: [
        ['Painted or not', `Raw texture soaks up water and scrapes off clean. Painted texture fights back. One coat of paint slows the job. Three coats can make scraping the wrong method.`],
        ['What is underneath', `Texture was often used to hide rough taping. Expect the joints to need rebuilding once the ceiling is bare.`],
        ['Height and shape', `Eight-foot flat ceilings are fast. Vaults, stairwells and two-story rooms need staging.`],
        ['Furnished rooms', `Empty rooms are quicker to protect. Furniture that stays must be wrapped completely.`],
        ['Finish wanted', `Smooth and paint-ready takes the most work. A light new texture hides more and costs less.`],
      ],
    },
    {
      id: 'testing',
      h: 'Testing comes first',
      p: [
        `Sprayed ceiling texture from before the mid-1980s may contain asbestos. You cannot tell by looking. A lab test on a small sample settles it, and results usually come back in days. If your house is from that era and the ceiling has never been tested, do that before anyone scrapes anything.`,
        `A positive result changes the job. Removal then belongs to a licensed abatement contractor. The other route is to leave the texture undisturbed and cover it with new thin board. That gives the same flat ceiling without scraping.`,
        `Lead paint is a separate question in homes built before 1978. If the ceiling has old paint layers, tell us. It affects how the work is contained and cleaned up.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where removals go wrong',
      rows: [
        ['Gouged board', `Scraping too hard or too dry tears the paper face. Torn paper must be sealed before any compound goes on, or it blisters.`],
        ['Too much water', `Soaking the ceiling loosens the joint tape and softens the board. The texture should be damp, not drenched.`],
        ['Stopping at the scrape', `A scraped ceiling is not a finished ceiling. It needs skim coats and sanding before paint.`],
        ['Skipping primer', `Bare compound and old paper take paint unevenly. Prime the whole ceiling first.`],
      ],
      after: [
        `Before we arrive, empty the room as far as you can and take down anything on the walls. We handle floor and wall protection, mask the fixtures and vents, and shut off the air handler for the room so dust does not travel through the ducts.`,
        `Plan to be out of the room for several days. Scraping is quick. Drying between skim coats is what takes the time, and it cannot be rushed without cracking.`,
      ],
    },
  ],
  'drywall-patching': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Size matters less than people think. These matter more.`],
      rows: [
        ['Number of patches', `Every patch needs the same coats and the same drying time. Ten patches in one trip cost far less per patch than one.`],
        ['Texture', `A smooth wall is the simple case. Orange peel, knockdown and skip trowel all need matching, and matching takes test passes.`],
        ['Location', `Mid-wall in a hallway is easy. Ceilings, stairwells, and spots beside tile or cabinets are slower.`],
        ['Torn paper', `Pulled anchors and removed mirrors often tear the face paper over a wide area. The whole torn area has to be sealed and skimmed.`],
        ['What caused it', `Impact damage is done once patched. A hole from a leak needs the leak fixed and the cavity dry first.`],
      ],
    },
    {
      id: 'notes',
      h: 'Why a patch takes more than one visit',
      p: [
        `The board goes in fast. The compound is what takes time. Each coat has to harden before the next, and each one is spread wider than the last. Setting compound lets us put on two coats in one visit for small work. The final coat and sanding usually wait for a second trip.`,
        `Width is what hides a patch. A six-inch hole ends up with compound feathered eighteen inches or more across. That looks excessive while it is wet. It is the reason there is no hump when it is painted.`,
        `Then comes texture, if the wall has one. Spray textures are matched by adjusting the mix and the distance until a test board looks like the wall. Hand textures are matched by eye and by wrist. Neither is exact science. A good match disappears at arm's length under paint.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Why patches show',
      rows: [
        ['No backing', `A patch with nothing behind it moves when pushed. The edges crack.`],
        ['No tape', `Compound alone does not bridge a joint. It cracks along the cut line.`],
        ['One thick coat', `Heavy fills shrink and leave a dish in the wall.`],
        ['No primer', `Unprimed compound drinks paint and leaves a flat rectangle.`],
      ],
      after: [
        `Send a photo before the visit. Put a hand or a coin in the frame for scale, and take a second shot from across the room so we can see the wall and the texture. Most patch jobs can be priced from pictures.`,
        `Afterward, prime the repair, then repaint the wall corner to corner. Spot painting over a patch works on fresh paint in the same batch. On paint more than a year or two old it almost never blends.`,
      ],
    },
  ],
  'water-damaged-drywall-repair': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`The stain is a clue. The price depends on what is behind it.`],
      rows: [
        ['How far it spread', `Water runs along framing and wicks through gypsum. The wet area is usually larger than the mark. We meter it and cut back to dry board.`],
        ['How long it sat', `A day of clean water is a small repair. A week means soft board, wet insulation and possibly mold on the back of the paper.`],
        ['Wall or ceiling', `Ceilings cost more. Wet ceiling board also sags and can come down in sections.`],
        ['Insulation', `Wet batts lose their value and hold moisture against the framing. They come out and get replaced.`],
        ['Finish match', `New board has to be blended into the old surface, texture included.`],
      ],
    },
    {
      id: 'sequence',
      h: 'The order of work',
      p: [
        `First, the source. A supply line, a drain, a roof, an ice dam, a failed shower pan. Until that is found and fixed, any repair is temporary. If you are not certain the leak is solved, we leave the cavity open so it can be watched.`,
        `Second, drying. Framing and the cavity need to come down to a normal moisture reading. Fans and a dehumidifier do most of the work. In a Waukesha basement in August, that can take several days. Closing a wall over damp studs traps the problem inside.`,
        `Third, rebuild. New insulation where needed, new board, tape, three coats, sanding, texture. Then a stain-blocking primer over any remaining marks on adjacent surfaces before paint.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Mistakes to avoid',
      rows: [
        ['Painting over it', `Stain blocker hides the mark. It does nothing for soft board or a wet cavity.`],
        ['Waiting', `Board that stays wet for days weakens and can grow mold where you cannot see it.`],
        ['Patching too small', `Cutting only the stained spot leaves damp board at the edges. Cut to dry material.`],
        ['Ignoring the cause', `The same leak will stain the new board in weeks.`],
      ],
      after: [
        `If you plan an insurance claim, photograph everything before demolition and note the dates. Your insurer decides coverage. We can give you a written scope listing what was removed and replaced, which is what an adjuster needs to see.`,
        `Right now: stop the water, move belongings, run a fan. If a ceiling is bulging with trapped water, keep people out from under it and call.`,
      ],
    },
  ],
  'garage-drywall-installation': [
    {
      id: 'cost',
      h: 'What sets the price',
      p: [`Garages look simple. The details are where the cost is.`],
      rows: [
        ['Ceiling type', `Flat ceilings under trusses are routine. High or sloped ceilings need staging and longer board.`],
        ['Framing spacing', `Trusses at 24 inches want 5/8-inch board overhead. Thinner board sags between them.`],
        ['Fire separation', `Walls and ceilings shared with the house commonly need fire-rated board. The local building department sets the requirement for your garage.`],
        ['Finish level', `Fire-taped only, or finished smooth for paint. The gap between the two is real.`],
        ['What is in the way', `Shelving, openers, door tracks and stored items all slow the hang. An empty garage is a faster garage.`],
      ],
    },
    {
      id: 'before',
      h: 'Do these before board',
      p: [
        `Wiring. Add the outlets you will want in five years, not only the ones you need now. A dedicated circuit for a freezer, compressor or vehicle charger is easy with open studs.`,
        `Insulation. Walls and ceiling, if the garage will ever be heated or if there is a room above it. Batts need to be in before we hang, and inspected where your permit calls for it.`,
        `Blocking. Anywhere heavy shelving, cabinets, a hose reel or a bike hoist will mount. Screws into drywall alone will not hold a loaded shelf. Mark the locations and we will note them on the finished wall.`,
      ],
    },
    {
      id: 'pitfalls',
      h: 'Where garage jobs go wrong',
      rows: [
        ['Board on the slab', `Garage floors get wet. Board touching concrete wicks water. We hold it up off the floor.`],
        ['Cold cure', `Compound must not freeze. Winter jobs in unheated garages need temporary heat for the whole finishing stage.`],
        ['Unpainted board', `Bare paper breaks down in damp air. Prime and paint it, even in a plain garage.`],
        ['Gaps at the top', `Open joints at the ceiling line defeat the separation between garage and house. Every joint is taped.`],
      ],
      after: [
        `Move the vehicles out and clear the walls before we start. If things have to stay, group them in the middle of the floor and we will cover them.`,
        `When we are done, give the compound a few days before you prime. Garage air is slower to dry than house air, and paint over damp compound peels.`,
      ],
    },
  ],
};
