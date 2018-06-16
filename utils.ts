import { Card } from './card';

export function isEqualCards(a: Card, b: Card): boolean {
    return (
        a.getRank() === b.getRank() &&
        a.getSuit() === b.getSuit()
    );
}

export function getMaxCoupleRank(items: Card[]): number {
    let maxRank = 0;
    items.forEach(function (card, cardNum) {
        items.forEach(function (otherCard, otherCardNum) {
            if (cardNum !== otherCardNum) {
                if (card.getRank() === otherCard.getRank()) {
                    if (card.getRank() > maxRank) {
                        maxRank = card.getRank();
                    }
                }
            }
        });
    });
    return maxRank;
}
