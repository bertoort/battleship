let gameOver = false

const c = carrier	= 5
const b = battleship = 4
const s = submarine	= 3
const d = destroyer	= 3
const p = patrolBoat	= 2
const m = miss = 1
const e = empty = 0
const h = hit = -1

const testDisplayBoard = [
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e]
]

const missTestBoard = [
  [e,e,e,d,d,d,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,s],
  [e,e,e,e,s,e,e,e,e,s],
  [e,e,e,e,s,e,e,e,e,s],
  [b,e,e,e,s,e,p,p,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,c,c,c,c,c,e],
  [e,e,e,e,e,e,e,e,e,e]
]

const hitTestBoard = [
  [e,e,e,d,d,d,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,s],
  [e,e,e,e,s,e,e,e,e,s],
  [e,e,e,e,s,e,e,e,e,s],
  [b,e,e,e,s,e,p,p,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,c,c,c,c,c,e],
  [e,e,e,e,e,e,e,e,e,e]
]

const almostFullBoard = [
  [m,m,m,h,h,h,m,m,m,m],
  [m,m,m,m,m,m,m,m,m,h],
  [m,m,m,m,h,m,m,m,m,h],
  [m,m,m,m,h,m,m,m,m,h],
  [h,m,m,m,h,m,h,h,m,m],
  [h,m,m,m,m,m,m,m,m,m],
  [b,m,m,m,m,m,m,m,m,m],
  [h,m,m,m,m,m,m,m,m,m],
  [m,m,m,m,h,h,h,h,h,m],
  [m,m,m,m,m,m,m,m,m,m]
]

const wonBoard = [
  [m,m,m,h,h,h,m,m,m,m],
  [m,m,m,m,m,m,m,m,m,h],
  [m,m,m,m,h,m,m,m,m,h],
  [m,m,m,m,h,m,m,m,m,h],
  [h,m,m,m,h,m,h,h,m,m],
  [h,m,m,m,m,m,m,m,m,m],
  [h,m,m,m,m,m,m,m,m,m],
  [h,m,m,m,m,m,m,m,m,m],
  [m,m,m,m,h,h,h,h,h,m],
  [m,m,m,m,m,m,m,m,m,m]
]
