import CardPile from './cardPile';
import Hand from './hand';
import { rotate } from './math';

export interface GameDeckOptionsInterface {
    x: number,
    y: number,
    rotation: number,
}

class GameDeck extends CardPile {
    private animationId: NodeJS.Timeout;
    private cardPadding: number = 10;

    constructor(options: GameDeckOptionsInterface) {
        super(options);
    }

    protected override _getCardPosition(index: number, totalCards: number): number[] {
        let xPos = this.x;
        if (totalCards === 1) {
            xPos = this.x;
        } else if (totalCards === 2) {
            const leftMost = this.x - this.cardPadding / 2;
            xPos = leftMost + (1 - index) * this.cardPadding;
        } else if (index >= totalCards - 3) {
            const leftMost = this.x - this.cardPadding;
            xPos = leftMost + (totalCards - index - 1) * this.cardPadding;
        } else {
            xPos = this.x + this.cardPadding;
        }
        return rotate(this.x, this.y, xPos, this.y, this.rotation);
    }

    dealSync(count: number, hands: Array<Hand>) {
        const totalCount = count * hands.length;
        for (let i = 0; i < totalCount; i++) {
            if (this.cards.length === 0) return;
            hands[i % hands.length].addCardsSync([this.getTopCard()]);
        }
    }

    async deal(count: number, hands: Array<Hand>, speed?: number) {
        clearInterval(this.animationId);
        return new Promise<void>((res, rej) => {
            const totalCount = count * hands.length;
            let dealCounter = 0;
            const dealOne = () => {
                if (this.cards.length === 0 || dealCounter === totalCount) {
                    clearInterval(this.animationId);
                    res();
                    return;
                } else if (dealCounter > totalCount) {
                    clearInterval(this.animationId);
                    rej(new Error('Dealt too many cards!'));
                    return;
                }
                hands[dealCounter % hands.length].addCards([this.getTopCard()]);
                dealCounter++;
            };
            this.animationId = setInterval(dealOne, speed || 50);
        });
    }

    dealByCardNamesSync(hands: Array<Hand>, cardsByHand: Array<Array<string>>) {
        if (cardsByHand.length !== hands.length) {
            throw new Error('Hand length is not equal to cardsByHand length');
        }
        let totalCount = cardsByHand.reduce((sum, currentHand) => {
            return sum += currentHand.length;
        }, 0);
        for (let i = 0; i < totalCount; i++) {
            if (this.cards.length === 0) throw new Error('Deck is empty! Cannot deal more cards');
            const handIndex = i % hands.length;
            const cardIndex = Math.floor(i / hands.length);
            const cardToAdd = this.getCardByName(cardsByHand[handIndex][cardIndex]);
            if (!cardToAdd) {
                throw new Error('Card does not exist in deck');
            }
            hands[handIndex].addCardsSync([cardToAdd]);
        }
    }

    async dealByCardNames(hands: Array<Hand>, cardsByHand: Array<Array<string>>, speed?: number) {
        clearInterval(this.animationId);
        return new Promise<void>((res, rej) => {
            if (cardsByHand.length !== hands.length) {
                rej(new Error('Hand length is not equal to cardsByHand length'));
                return;
            }
            let totalCount = cardsByHand.reduce((sum, currentHand) => {
                return sum += currentHand.length;
            }, 0);
            let dealCounter = 0;
            const dealOne = () => {
                if (this.cards.length === 0 || dealCounter === totalCount) {
                    clearInterval(this.animationId);
                    res();
                    return;
                } else if (dealCounter > totalCount) {
                    clearInterval(this.animationId);
                    rej(new Error('Dealt too many cards'));
                    return;
                }
                const handIndex = dealCounter % hands.length;
                const cardIndex = Math.floor(dealCounter / hands.length);
                const cardToAdd = this.getCardByName(cardsByHand[handIndex][cardIndex]);
                if (!cardToAdd) {
                    clearInterval(this.animationId);
                    rej(new Error('Card does not exist in deck'));
                    return;
                }
                hands[dealCounter % hands.length].addCards([cardToAdd]);
                dealCounter++;
            }
            this.animationId = setInterval(dealOne, speed || 50);
        });
    }
}

export default GameDeck;
