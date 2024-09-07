import CardPile from './cardPile';
export interface HandOptionsInterface {
    x: number;
    y: number;
    rotation: number;
    cardPadding?: number;
}
declare class Hand extends CardPile {
    private cardPadding;
    constructor(options: HandOptionsInterface);
    protected _getCardPosition(index: number, totalCards: number): number[];
}
export default Hand;
