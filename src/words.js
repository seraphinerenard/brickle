// @ts-check

/** Shown under the masthead, so a player knows what the answers are drawn from. */
export const GAME_NAME = 'BRICKLE'

/** The one line of guidance the game gives. */
export const HINT = 'Every answer comes from IndyCar.'

/** Puzzle zero. Every later puzzle number counts local midnights from here. */
export const LAUNCH_DATE = new Date(2022, 2, 2)

/**
 * Step between consecutive puzzles' entries in ANSWERS. Coprime to the list
 * length, so the sequence visits every word once before repeating and the
 * order on screen does not match the order in this file. The test suite
 * enforces the coprimality.
 */
export const STRIDE = 23

/** Every possible answer. 88 entries, all five letters. */
export const ANSWERS = Object.freeze([
  'OVALS', 'BANKS', 'APRON', 'TURNS', 'SHORT', 'CHUTE', 'CURVE', 'BENDS',
  'SWEEP', 'CREST', 'BUMPS', 'BRICK', 'YARDS', 'TRACK', 'LINES', 'ENTRY',
  'EXITS', 'DIRTY', 'CLEAN', 'PYLON', 'DRAFT', 'PACKS', 'TRAIN', 'FIELD',
  'LEADS', 'ROLLS', 'WAVES', 'MILES', 'TIRES', 'SLICK', 'SCUFF', 'STICK',
  'GRAIN', 'GRIPS', 'TREAD', 'WHEEL', 'ALLOY', 'SKIDS', 'SETUP', 'WEDGE',
  'WINGS', 'AEROS', 'SPLIT', 'BOOST', 'TURBO', 'POWER', 'MOTOR', 'GEARS',
  'SHIFT', 'CRANK', 'PLUGS', 'INLET', 'FUELS', 'BRAKE', 'BLEED', 'DISCS',
  'PEDAL', 'LOCKS', 'SLIDE', 'DIVES', 'STALL', 'STOPS', 'CREWS', 'JACKS',
  'BOARD', 'RADIO', 'LIFTS', 'COAST', 'VISOR', 'GLOVE', 'BOOTS', 'SUITS',
  'BELTS', 'SEATS', 'CRASH', 'SHUNT', 'QUALI', 'STINT', 'SPEED', 'TIMES',
  'POLES', 'LIMIT', 'GRIDS', 'MILKS', 'GREEN', 'WHITE', 'BLACK', 'FLAGS',
])
