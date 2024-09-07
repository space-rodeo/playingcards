import CardPile from './cardPile';
import { rotate } from './math';

export interface HandOptionsInterface {
    x: number,
    y: number,
    rotation: number,
    cardPadding?: number
}

class Hand extends CardPile {
    private cardPadding: number;

    constructor(options: HandOptionsInterface) {
        super(options);
        this.cardPadding = options.cardPadding || 20;
    }

    protected override _getCardPosition(index: number, totalCards: number): number[] {
        const leftMost = this.x - (totalCards - 1) * this.cardPadding / 2;
        const xPos = leftMost + index * this.cardPadding;
        return rotate(this.x, this.y, xPos, this.y, this.rotation);
    }
}

export default Hand;
