class Round {
  constructor(deck) {
    const turn = new Turn()
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]

  }
  takeTurn(guess) {
    this.turns += 1;
    if (guess === this.deck.cards.correctAnswer) {
      
    }

    
  }
}

module.exports = Round;