import Card from './card';
export interface CardPileOptionsInterface {
    x: number;
    y: number;
    rotation: number;
}
declare class CardPile {
    protected cards: Array<Card>;
    protected x: number;
    protected y: number;
    protected rotation: number;
    private clickHandler;
    constructor(options: CardPileOptionsInterface);
    protected _getCardPosition(index: number, totalCards: number): number[];
    private _moveCardsSync;
    private _moveCards;
    moveToSync(x: number, y: number, rotation?: number): void;
    moveTo(x: number, y: number, rotation?: number): Promise<void>;
    addCardsSync(cardArray: Array<Card>): void;
    addCards(cardArray: Array<Card>): Promise<void>;
    private _removeCard;
    removeCardSync(card: Card): void;
    removeCard(card: Card): Promise<void>;
    getAllCards(): Card[];
    private _shuffle;
    shuffleSync(): void;
    shuffle(): Promise<void>;
    getTopCard(): Card;
    onClick(handler: Function): void;
    _getClickHandler(): Function;
    show(): void;
    hide(): void;
    sortSync(sortingFunction: (a: Card, b: Card) => number): void;
    sort(sortingFunction: (a: Card, b: Card) => number): Promise<void>;
    orderSync(order: Array<string>): void;
    getCardByName(name: string): Card;
}
export default CardPile;
