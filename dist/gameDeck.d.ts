import CardPile from './cardPile';
import Hand from './hand';
export interface GameDeckOptionsInterface {
    x: number;
    y: number;
    rotation: number;
}
declare class GameDeck extends CardPile {
    private animationId;
    private cardPadding;
    constructor(options: GameDeckOptionsInterface);
    protected _getCardPosition(index: number, totalCards: number): number[];
    dealSync(count: number, hands: Array<Hand>): void;
    deal(count: number, hands: Array<Hand>, speed?: number): Promise<void>;
    dealByCardNamesSync(hands: Array<Hand>, cardsByHand: Array<Array<string>>): void;
    dealByCardNames(hands: Array<Hand>, cardsByHand: Array<Array<string>>, speed?: number): Promise<void>;
}
export default GameDeck;
