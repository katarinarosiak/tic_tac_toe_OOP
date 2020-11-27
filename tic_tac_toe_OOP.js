const readline = require('readline-sync');

class Player {
  constructor() {

  }
  makeMove() {

  }
}

class Human extends Player {

}

class Computer extends Player {

}

class Board {

}


class Game {
  constructor() {
    this.welcomeMessage = welcomeMessage;
    this.human = new Human();
    this.computer = new Computer();
    this.mark = {
      initialMarker: '',
      cross: 'X',
      circle: 'O'
    }
    this.board = {
      a1: SIGNS.initialMarker,
      a2: SIGNS.initialMarker,
      a3: SIGNS.initialMarker,
      b1: SIGNS.initialMarker,
      b2: SIGNS.initialMarker,
      b3: SIGNS.initialMarker,
      c1: SIGNS.initialMarker,
      c2: SIGNS.initialMarker,
      c3: SIGNS.initialMarker
    }
    this.winCombination = [
      ['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3'],
      ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'],
      ['a1', 'b2', 'c3'], ['c1', 'b2', 'a3']
    ];
  }
  displayWelcome() {
    console.log("Welcome to Tic Tac Toe Game!")
  }

  displayBoard() {

  }

  chooseSquareMessage() {

  }

  checkIfValid() {

  }

  checkIfWin() {

  }

  displayPlayAgainMessage() {

  }

  displayGoodbyeMessage() {

  }

  play() {
    displayWelcome();

    while (true) {

      while () {
        displayBoard();
        chooseSquareMessage();
        checkIfValid();
        checkIfWin();
      }

      displayPlayAgainMessage();
      displayGoodbyeMessage();
    }
  }
}

let game = new Game();

game.play();