import Card from "./card";
export declare enum DECK_TYPE {
    STANDARD = 0,
    EUCHRE = 1
}
export interface DeckOptionsInterface {
    table: HTMLElement;
    type: DECK_TYPE;
    cardSize?: {
        width: number;
        height: number;
    };
    animationSpeed?: number;
}
declare class Deck {
    private table;
    private type;
    private all;
    constructor(options: DeckOptionsInterface);
    getAllCards(): Array<Card>;
}
export default Deck;
