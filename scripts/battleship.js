displayBoard(computerDisplayBoard, 'computer')
displayBoard(playerBoard, 'player')

function displayBoard(board, location) {
  const boardElement = document.querySelector(`.${location} .board`)
  boardElement.innerHTML = ''
  board.forEach((row, y) => {
    const rowElement = generateRow(row, y)
    rowElement.classList.add('row')
    boardElement.append(rowElement)
  })
}

function generateRow(row, y) {
  const rowElement = document.createElement('div')
  row.forEach((box, x) => {
    const boxElement = document.createElement('div')
    boxElement.classList.add('box')
    boxElement.classList.add(box)
    boxElement.id = `${x}-${y}` 
    boxElement.addEventListener('click', playerMove)
    rowElement.append(boxElement)
  })
  return rowElement
}

function playerMove(event) {
  const classList = event.target.classList
  if (!gameOver && !classList.contains(miss) && !classList.contains(hit)) {
    const parsedId = event.target.id.split('-')
    const coordinates = {
      x: parsedId[0],
      y: parsedId[1]
    }
    computerDisplayBoard = fireMissle(computerDisplayBoard, computerBoard, coordinates) 
    displayBoard(computerDisplayBoard, 'computer')
    isOver(computerDisplayBoard, 'You')
    computerMove()
  }
}

function computerMove() {
  if (!gameOver) {
    const coordinates = generateComputerMove(playerBoard)
    playerBoard = fireMissle(playerBoard, playerBoard, coordinates)
    displayBoard(playerBoard, 'player')
    isOver(playerBoard, 'The Computer')
  }
}

function isOver(board, player) {
  if (isWon(board)) {
    displayWinner(player)
    gameOver = true
  }
}

function displayWinner(player) {
  const winnerElement = document.querySelector('.winner')
  winnerElement.innerText = `${player} won! refresh to play again`
}
