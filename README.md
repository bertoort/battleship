# Battleship

Write the logic to make the game of battleship.

## Usage

- Clone the repo
- Run locally on your browser (I recommend running a server locally like [lite-server](https://www.npmjs.com/package/lite-server) or [http-server](https://www.npmjs.com/package/http-server))
- Navigate to `/` or `/index.html` to play the game
- Navigate to `/test` or `/test/index.html` to view tests

## Task

Pass the tests in `/test` by implementing the following functions in `/scripts/logic.js`:

- `fireMissle`: takes a display board, a board with the ship positions and the coordinates for the missle. The function should use the coordinates to determine a `hit` or a `miss` based on the ship board. It should add either `hit` or `miss` to the display board and return the display board. 

```
const c = carrier	= 5
const b = battleship = 4
const s = submarine	= 3
const d = destroyer	= 3
const p = patrolBoat	= 2
const m = miss = 1
const e = empty = 0
const h = hit = -1

const boardExample = [
  [e,e,d,d,d,e,e,m,e,e],
  [e,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,s,e,e,e,e,e],
  [e,e,e,e,s,e,e,e,e,s],
  [b,e,e,e,s,e,e,e,e,s],
  [b,e,e,e,e,p,h,e,e,s],
  [b,e,e,m,e,e,e,e,e,e],
  [b,e,e,e,e,e,e,e,e,e],
  [e,e,e,e,c,c,c,c,c,e],
  [e,e,e,e,e,e,e,e,e,e]
]
```

- `generateComputerMove`: it should take a board and return the coordinates of a new location to send a missle. The location should not be a `hit` or a `miss`.

```
const coordinates = {
  x: 1,
  y: 3
}
```

- `isWon`: it should take a board and return true if all the ships are hit, otherwise return false.

## Stretch

- Generate random boards for the player and computer
- Implement smart computer moves
  - After a hit, a computer will fire at adjacent locations
