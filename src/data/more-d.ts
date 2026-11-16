/** Long-form supporting sections (part 4): short closing notes per service. */
import type { Extra } from './more';

const note = (p: string[]): Extra[] => [{ id: 'good-to-know', h: 'Good to know', p }];

export const moreD: Record<string, Extra[]> = {
  'popcorn-ceiling-removal': note([
    `One room or the whole floor? Doing every ceiling on a level in one job costs less per room than doing them one at a time, because the protection, setup and cleanup happen once. If budget forces a choice, start with the rooms where you spend your evenings and the hallway that connects them.`,
  ]),
  'drywall-patching': note([
    `Landlords and sellers: a pre-listing or turnover patch run is one of the cheapest ways to make a property show better. We go room to room, fix everything marked, and leave it ready for the painter the same week.`,
    `Keep a note of the wall color and sheen somewhere you will find it. The next time a wall needs a patch, having the exact paint makes the repair far easier to hide.`,
  ]),
  'water-damaged-drywall-repair': note([
    `After a leak is repaired, ask the plumber or roofer exactly what failed and where. Write it down with the date. If a stain shows up in the same room again, that note tells you at once whether it is the old problem or a new one.`,
    `Consider small upgrades while the wall is open. An access panel behind a tub or shower valve costs very little now and saves cutting the wall next time. Moisture-resistant board is a sensible swap on a wall that has already been wet once.`,
  ]),
  'garage-drywall-installation': note([
    `Detached garages follow different rules from attached ones. With no living space on the other side of the wall, the fire-separation requirement usually does not apply in the same way, and standard board may be acceptable. Check with your building department before ordering material.`,
    `Think about lighting before the ceiling goes up. Garages are almost always under-lit. Adding boxes for a few more fixtures is quick with the framing open, and bright, even light makes a white painted garage feel twice the size.`,
    `If the garage floor is going to be coated or sealed, do the drywall first. Sanding dust and dropped compound are easy to sweep off bare concrete and hard to get off a new floor finish. Paint the walls before the floor as well.`,
  ]),
  'basement-drywall-installation': note([
    `Sound is worth a thought before the ceiling closes. Footsteps and voices from the main floor carry into a finished basement. Insulation between the joists is inexpensive and helps. Thicker ceiling board helps more. Decide before we hang, since it cannot be added later without taking the ceiling down.`,
    `Photograph every wall and the whole ceiling once the rough-in is complete and before board goes on. Label the photos by room. Years from now, when you need to find a pipe, a wire or a duct, those pictures will save you from cutting exploratory holes.`,
    `Finally, keep a few feet clear around the furnace, water heater and electrical panel. Those need working room and, in some cases, specific clearances. Your HVAC contractor and electrician can confirm the distances before the framing is final.`,
  ]),
  'ceiling-drywall-repair': note([
    `A repaired ceiling is a good time to check what is above it. If the attic is accessible, look at the insulation over the repair area. Batts that got wet should be replaced. Thin spots should be topped up. Uneven insulation is a common reason for the cold patches where condensation forms.`,
    `Bathroom ceilings fail from the room side too. A fan that is too small, or one that vents into the attic and not outdoors, leaves moisture on the ceiling after every shower. Paint peels, then the tape lifts. If that is the pattern, fix the ventilation along with the ceiling.`,
    `Keep some of the ceiling paint. Even with a full repaint now, a labeled can makes the next touch-up possible.`,
    `If the room has a ceiling fan or a heavy light, check its box while the ceiling is open. A fixture hung from drywall alone, or from a box not rated for the weight, should be corrected before the new board closes it in.`,
  ]),
  'drywall-taping-mudding': note([
    `Thinking of taping it yourself? It is possible, and many people do the first two coats well enough. The final coat and the butt joints are where most self-taught work shows. One option is to tape and fill yourself and have us do the finish coat and sanding. Ask before you start so the first coats are left the way a finisher needs them.`,
    `Whoever does it, do not skip the primer. Even a well-taped wall looks striped under paint alone, because paper and compound absorb differently. A drywall primer over the whole surface is what makes the finish coat look even.`,
    `Dust is manageable. We seal the room, cover returns, and sand with vacuum tools where the surface allows. Expect a fine film in the work area afterward and very little beyond it.`,
  ]),
  'drywall-finishing': note([
    `Finishing is also the cheapest stage at which to change your mind. If you see the primed walls and decide a ceiling needs the higher level after all, a skim coat can still be added. Once the color is on, the same change means sanding back paint first.`,
    `Lighting upgrades after the fact are the usual surprise. A wall that looked perfect under one ceiling fixture shows its joints the week someone installs a row of recessed lights eighteen inches from it. If new lighting is planned, tell us where it is going.`,
    `New finishes cure for a while after they feel dry. Hold off on hanging heavy pictures or pressing furniture against fresh walls until the paint has had a few weeks.`,
  ]),
  'drywall-repair': note([
    `Timing repairs with painting saves money. The repair and the paint job share the same protection, the same disruption and the same room being out of use. If you plan to repaint within the year, do the drywall list the week before the painter comes.`,
    `A humidifier on the furnace, set sensibly, reduces winter cracking. Wood shrinks as indoor air dries out, and the drier it gets, the more the framing moves. Very high settings cause their own problems on windows and in the attic, so follow the guidance for outdoor temperature.`,
    `Keep the list going. A strip of painter's tape on each new pop or crack through the year means the next repair visit takes one walk-through to scope.`,
    `One more habit helps. Fit door stops wherever a handle can reach a wall. It is the cheapest drywall repair there is, because it prevents the hole.`,
  ]),
  'drywall-installation': note([
    `Sound control is decided at this stage. Insulation in interior walls around bedrooms, bathrooms and offices cuts noise noticeably. So does thicker board. Neither can be added once the walls are closed without redoing the room.`,
    `So is wall flatness. If cabinets, a long vanity mirror or large tile are going on a wall, tell us. Those surfaces need to be flatter than a painted bedroom wall, and we will take extra care with framing checks and sheet layout there.`,
    `Stock is delivered a day or two ahead so the board can adjust to the temperature and humidity of the house. Sheets hung cold in a warm room can move slightly as they settle, and that shows at the joints.`,
    `Scrap is hauled out as we go. A typical house produces a surprising amount of offcut board, and it should not be left in wall cavities or under the stairs. Tell us if you want a few clean pieces kept for future patches.`,
  ]),
};

export const homeGuideLast: { h: string; p: string[] }[] = [
  {
    h: 'Common reasons people call us',
    p: [
      `A basement is framed and ready for board. A plumber has left six holes after a repipe. A ceiling stained after the bathroom above overflowed. A house is going on the market and the walls need to look right. A new tenant needs three offices and a conference room by the first of the month.`,
      `The jobs are different sizes. The questions at the start are the same. What is there now, what should it look like when we leave, and what has to happen in between. If you can answer the first two, we can work out the third.`,
    ],
  },
  {
    h: 'What we ask of you',
    p: [
      `Heat on. A clear path in. A place to stack board and set up. Decisions made on finish and texture before we start. Someone we can reach by phone during the job if a question comes up behind a wall.`,
      `In return you get a crew that shows up when it said it would, tells you what it found, and leaves the place clean. That is the whole arrangement.`,
    ],
  },
];
