const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  const card1 = new Card(2, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'], 'accessor method');

  const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'],  'mutator method');


  const card3 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
  
  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should have an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck', function() {
    expect(round.deck).to.equal(deck)
  })

  it('should return the current card', function() {
    const currentCard = round.returnCurrentCard()
    expect(currentCard).to.equal(card1)
  });

  it('turn count should start with 0', function() {
    expect(round.turns).to.equal(0)
  });
  
  it('should update turn count and give feedback', function() {
    const takeTurn = round.takeTurn('accessor method')

    expect(round.turns).to.equal(1)
    expect(takeTurn).to.equal('correct!')
  });

  it('should give feedback when incorrect', function(){
    const takeTurn = round.takeTurn('iterator method');

    expect(takeTurn).to.equal('incorrect!')
  });

  it('should add incorrect guesses to array', function() {
    round.takeTurn('iteration method');

    expect(round.incorrectGuesses).to.equal(2)
  });
  
  it('should calculate correct answers', function(){
    const takeTurn = round.takeTurn('iterator method');

    expect(takeTurn).to.equal('incorrect!')
  });


});