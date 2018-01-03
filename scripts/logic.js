function fireMissle(displayBoard, board, coordinates) {
  const misslePosition = board[coordinates.y][coordinates.x]
  displayBoard[coordinates.y][coordinates.x] = misslePosition > 1 ? hit : miss
  return displayBoard
}

function generateComputerMove(board) {
  for(let y = 0; y < board.length; y++) {
    for(let x = 0; x < board[y].length; x++) {
      if (board[y][x] !== 1 && board[y][x] !== -1) {
        return {x, y}
      }
    }
  }
}

function isWon(board) {
  const winTotal = 17
  const sum = board.reduce((sum, row) => {
    row.forEach(box => {
      if (box === -1) sum++
    })
    return sum
  }, 0)
  return sum === winTotal
}
