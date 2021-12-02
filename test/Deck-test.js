const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  const card1 = new Card(2, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'], 'accessor method');

  const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?',["mutator method", "accessor method", "iteration method"],  'mutator method');


  const card3 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ["mutator method", "accessor method", "iteration method"], 'iteration method');
  
  const deck = new Deck([card1, card2, card3]);

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should habve an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck)
  });

  it('should hold cards in the deck', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  });

  it('should b able to count the cards', function() {
    expect(deck.countCards()).to.equal(3)
  });
})