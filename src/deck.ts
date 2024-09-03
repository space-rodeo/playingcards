import Card, { SUIT } from "./card";

export enum DECK_TYPE {
    STANDARD,
    EUCHRE
}

export interface DeckOptionsInterface {
    table: HTMLElement;
    type: DECK_TYPE;
    cardSize?: {
        width: number,
        height: number
    },
    animationSpeed?: number,
}

class Deck {
    private table: HTMLElement;
    private type: DECK_TYPE;
    private all: Array<Card> = [];

    constructor(options : DeckOptionsInterface) {
        this.type = options.type;
        const start = this.type === DECK_TYPE.STANDARD ? 1 : 9;
        let end = this.type === DECK_TYPE.STANDARD ? 13 : 14;

        this.table = options.table;
        if (this.table.style.position === 'static') {
            this.table.style.position = 'relative';
        }
        const cardOptions = {
            cardSize: {
                height: options.cardSize?.height || 167,
                width: options.cardSize?.width || 119
            },
            animationSpeed: options.animationSpeed
        };
        for (let i = start; i <= end; i++) {
            this.all.push(new Card(SUIT.HEARTS, i, this.table, cardOptions));
            this.all.push(new Card(SUIT.SPADES, i, this.table, cardOptions));
            this.all.push(new Card(SUIT.DIAMONDS, i, this.table, cardOptions));
            this.all.push(new Card(SUIT.CLUBS, i, this.table, cardOptions));
        }
    }

    getAllCards() : Array<Card> {
        return this.all;
    }
}

export default Deck;
