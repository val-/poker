export interface ICard {
    getSuit(): Suits;
    getRank(): Ranks;
}

export const enum Suits {
    Diamonds,
    Hearts,
    Spades,
    Clubs
};

export const enum Ranks {
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace
};

export class Card implements ICard {

    private suit: Suits;

    private rank: Ranks;

    constructor(suit: Suits, rank: Ranks) {
        this.suit = suit;
        this.rank = rank;
    }

    getSuit(): Suits {
        return this.suit;
    }

    getRank(): Ranks {
        return this.rank;
    }

}

