import { Suits, Ranks, Card } from './card';
import { isEqualCards, getMaxCoupleRank } from './utils';

let DiamondsAce: Card = new Card(Suits.Diamonds, Ranks.Ace);
let DiamondsAce2: Card = new Card(Suits.Diamonds, Ranks.Ace);
let HeartsJack: Card = new Card(Suits.Hearts, Ranks.Jack);
let SpadesJack: Card = new Card(Suits.Spades, Ranks.Jack);
let ClubsQueen: Card = new Card(Suits.Clubs, Ranks.Queen);
let ClubsFive: Card = new Card(Suits.Clubs, Ranks.Five);
let cardsSet: Card[] = [
    DiamondsAce,
    HeartsJack,
    SpadesJack,
    ClubsQueen,
    ClubsFive
];

console.log('DiamondsAce == DiamondsAce2: ', isEqualCards(DiamondsAce, DiamondsAce2));
// true

console.log('DiamondsAce == HeartsJack: ', isEqualCards(DiamondsAce, HeartsJack));
// false

console.log('Max couple rank: ', getMaxCoupleRank(cardsSet));
// Max couple rank: 9