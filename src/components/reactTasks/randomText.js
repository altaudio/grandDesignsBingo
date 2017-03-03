import _ from 'lodash'

const houseCells = [
  'Wife gets pregnant.',
  'An unusual building material is used',
  'Kevin is a smug git and you wonder why you still like him',
  'Kevin demonstrates the build on a miniture scale with some kind of food',
  'The owner wont tell Kevin how much they spent',
  "The windows don't fit",
  'The project goes over budget',
  'The project goes over time',
  'The poor upper middle class family have to move into a relatively nice semi-detached and its portrayed as being miserable',
  'Kevin makes a snarky comment',
  'Kevin wears a silly hat',
  'The build is described as a breakthrough in eco housing',
  "The house doesn't get waterproofed in time",
  "Kevin doesn't like the rendering",
  'A cutting edge material is used']

const userSeed = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])


export const randText = [
  houseCells[userSeed[0]],
  houseCells[userSeed[1]],
  houseCells[userSeed[2]],
  houseCells[userSeed[3]],
  houseCells[userSeed[4]],
  houseCells[userSeed[5]],
  houseCells[userSeed[6]],
  houseCells[userSeed[7]],
  houseCells[userSeed[8]],
  houseCells[userSeed[9]],
]

