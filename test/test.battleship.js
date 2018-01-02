describe('Battleship', function() {
  it('should fire missles', function() {
    const missCoordinates = {
      x: 0,
      y: 0
    }
    const hitCoordinates = {
      x: 2,
      y: 0
    }
    const missBoard = fireMissle(testDisplayBoard, missTestBoard, missCoordinates)
    const hitBoard = fireMissle(testDisplayBoard, hitTestBoard, hitCoordinates)
    expect(missBoard[missCoordinates.y][missCoordinates.x]).to.equal(miss)
    expect(hitBoard[hitCoordinates.y][hitCoordinates.x]).to.equal(hit)
  }) 
  it('should fire generate a computer move', function() {
    const coordinates = generateComputerMove(almostFullBoard)
    expect(coordinates).to.eql({x: 0, y: 7})
  }) 
  it('should identify when a game is over', function() {
    expect(isWon(wonBoard)).to.equal(true)
    expect(isWon(almostFullBoard)).to.equal(false)
  }) 
})
