import CardPile from './cardPile';
export declare enum SUIT {
    HEARTS = "HEART",
    SPADES = "SPADE",
    DIAMONDS = "DIAMOND",
    CLUBS = "CLUB"
}
export interface CardOptionsInterface {
    animationSpeed?: number;
    cardSize: {
        height: number;
        width: number;
    };
}
declare class Card {
    private suit;
    private rank;
    private table;
    private imageSource;
    private image;
    private element;
    private container;
    private animationSpeed;
    private animationId;
    private rotation;
    constructor(suit: SUIT, rank: Number, table: HTMLElement, options?: CardOptionsInterface);
    toString(): string;
    show(): void;
    hide(): void;
    getContainer(): CardPile;
    setContainer(cardPile: CardPile): void;
    removeFromContainer(): void;
    moveToSync(x: number, y: number, rotation: number): void;
    moveTo(x: number, y: number, rotation: number): Promise<void>;
    setZIndex(zIndex: number): void;
}
export default Card;
