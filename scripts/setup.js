let gameOver = false

const c = carrier = 6
const b = battleship = 5
const s = submarine = 4
const d = destroyer = 3
const p = patrolBoat = 2
const m = miss = 1
const e = empty = 0
const h = hit = -1

let computerDisplayBoard = [
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

const computerBoard = [
  [e,e,e,d,d,d,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,s,e,e,e,e,p],
  [e,e,e,e,s,e,e,e,e,p],
  [b,e,e,e,s,e,e,e,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,c,c,c,c,c,e],
  [e,e,e,e,e,e,e,e,e,e]
]

let playerBoard = [
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,s,e,e,e,e,e,e,e,e],
  [e,s,e,e,e,e,e,e,e,e],
  [e,s,e,e,e,e,p,p,e,c],
  [e,e,e,e,e,e,e,e,e,c],
  [e,e,e,e,e,e,e,e,e,c],
  [e,d,b,b,b,b,e,e,e,c],
  [e,d,e,e,e,e,e,e,e,c],
  [e,d,e,e,e,e,e,e,e,e]
]
