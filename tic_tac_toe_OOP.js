const readline = require('readline-sync');
const { resetGameStatus } = require('../tic_tac_toe_console/helpers');

class Player {
  constructor(mark) {
    this.mark = mark;
    this.chosenSquare = null;
  }
  makeMove() {
  }
}

class Human extends Player {
  constructor() {
    super();
    this.mark = 'O';
  }
  makeMove() {
    this.chooseSquareMessage();
    while (true) {
      this.human.chosenSquare = readline.question('');
      if (this.board.boardState[this.human.chosenSquare] !== " ") break;
      console.log('This square is taken. Please choose again.');

      this.board.boardState[this.human.chosenSquare] = this.human.mark;
      this.board.takenSquares++;
      break;
    }
  }

class Computer extends Player {
  constructor() {
    super();
    this.mark = 'X';
  }

  makeMove() {
    let squares = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

    while (true) {
      let choice = Math.floor(Math.random() * squares.length);
      this.computer.chosenSquare = squares[choice];
      if (this.board.boardState[this.computer.chosenSquare] === " ") {
        this.board.boardState[this.computer.chosenSquare] = this.computer.mark;
        this.board.takenSquares++;
        break;
      }
    }
  }
}

class Board {
  constructor() {
    this.boardState = {
      a1: ' ',
      a2: ' ',
      a3: ' ',
      b1: ' ',
      b2: ' ',
      b3: ' ',
      c1: ' ',
      c2: ' ',
      c3: ' ',
    };
    this.winCombination = [
      ['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3'],
      ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'],
      ['a1', 'b2', 'c3'], ['c1', 'b2', 'a3']
    ];
    this.takenSquares = 0;
  }

  clearScreen() {
    for (let index = 0; index < 22; index++) {
      console.log(" ");
    }
  }

  displayBoard() {
    let line = '      ---+---+---';
    let numRow = `       1   2   3   `;
    let firstRow = `     a ${this.board.boardState.a1} | ${this.board.boardState.a2} | ${this.board.boardState.a3} `;
    let secondRow = `     b ${this.board.boardState.b1} | ${this.board.boardState.b2} | ${this.board.boardState.b3} `;
    let thirdRow = `     c ${this.board.boardState.c1} | ${this.board.boardState.c2} | ${this.board.boardState.c3} `;

    this.board.clearScreen();
    console.log(' ');
    console.log(numRow);
    console.log(firstRow);
    console.log(line);
    console.log(secondRow);
    console.log(line);
    console.log(thirdRow);
    console.log(' ');
  }

  clearBoard() {
    this.boardState = {
      a1: ' ',
      a2: ' ',
      a3: ' ',
      b1: ' ',
      b2: ' ',
      b3: ' ',
      c1: ' ',
      c2: ' ',
      c3: ' ',
    };
  }
}


class Game {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
    this.currentPlayer = this.human;
    this.board = new Board();
  }

  displayWelcome() {
    console.log("Welcome to Tic Tac Toe Game!");
  }


  chooseSquareMessage() {
    console.log("Choose where to put your sign: i.e. a1")
  }

  checkIfValid() {
    console.log('check if valid')
  }

  checkIfWin() {
    for (let line = 0; line < this.board.winCombination.length; line++) {
      let [sq1, sq2, sq3] = this.board.winCombination[line];

      if (
        this.board.boardState[sq1] === this.currentPlayer.mark &&
        this.board.boardState[sq2] === this.currentPlayer.mark &&
        this.board.boardState[sq3] === this.currentPlayer.mark
      ) {
        return true;
      }
    }
    return false;
  }

  checkIfTie() {
    if (this.board.takenSquares === 9) {
      return true;
    } else {
      return false;
    }
  }

  changeTurn() {
    if (this.currentPlayer === this.human) {
      this.currentPlayer = this.computer;
    } else {
      this.currentPlayer = this.human;
    }
  }

  printCongratulation() {
    console.log('')
    console.log("||    ||    ||   ||     ||  || || ||");
    console.log("||    ||    ||   ||||   ||  || || ||");
    console.log("||    ||    ||   || ||  ||  || || ||");
    console.log("|| || ||    ||   ||  || ||          ");
    console.log(" ||||||     ||   ||   ||||  || || ||");
    console.log("");
    console.log(`${this.currentPlayer} wins`);
  }

  printTieprintTie() {
    console.log("");
    console.log("      |||      ||||||||  ||  ||||||   || || ||");
    console.log("     || ||        ||     ||  ||       || || ||");
    console.log("    ||   ||       ||     ||  |||      || || ||");
    console.log("    |||||||       ||     ||  ||               ");
    console.log("   ||     ||      ||     ||  ||||||   || || ||");
    console.log("");
  }

  displayPlayAgainMessage() {
    console.log('Do you want to play again?')
  }

  resetGame() {
    this.board.clearBoard();
    this.takenSquares = 0;
    this.currentPlayer = this.human;
  }

  displayGoodbyeMessage() {
    console.log("Thank you for playing Tic Tac Toe. See you next time!");
  }

  play() {
    this.displayWelcome();
    this.board.displayBoard.call(this);

    while (true) {

      while (true) {

        this.currentPlayer.makeMove.call(this);
        this.board.displayBoard.call(this);

        if (this.checkIfWin()) {
          this.printCongratulation();
          break;
        }
        if (this.checkIfTie()) {
          this.printTie();
        }
        this.changeTurn();
      }

      this.displayPlayAgainMessage();
      let playAgian = readline.question('');
      if (playAgian[0].toLowerCase() === 'n') {
        this.displayGoodbyeMessage();
        break;
      }
      this.resetGame();
      this.board.displayBoard.call(this);
    }
  }
}

let game = new Game();

game.play();