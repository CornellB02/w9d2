class View {
  constructor(game, el) {
    this.game = game 
    this.el = el
    this.setupBoard();
  }

  setupBoard() {
    const ul = document.createElement('ul')
    ul.innerText = Board.makeGird()
      
    });
    this.el.append(ul)
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
