const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]

  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    if(turn.evaluateGuess()) {
      this.turns += 1;
      return turn.giveFeedback();
    } else {
        this.turns += 1;
        this.incorrectGuesses.push(turn.card.id)
        return turn.giveFeedback()
    }
  } 
  calculatePercentCorrect() {
    let decimal = (this.turns - this.incorrectGuesses.length) / this.turns;

    return decimal * 100;

  }
}

module.exports = Round;