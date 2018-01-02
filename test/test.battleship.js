describe('Battleship', function() {
  it('should fire missles', function() {
    const coordinates = {
      x: 0,
      y: 0
    }
    const missBoard = fireMissle(testDisplayBoard, missTestBoard, coordinates)
    const hitBoard = fireMissle(testDisplayBoard, hitTestBoard, coordinates)
    expect(missBoard[coordinates.x][coordinates.y]).to.equal(miss)
    expect(hitBoard[coordinates.x][coordinates.y]).to.equal(hit)
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
