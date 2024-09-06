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
        const cardConfigs = [];
        for (let i = start; i <= end; i++) {
            cardConfigs.push({suit: SUIT.HEARTS, rank: i, element: this.table, cardOptions});
            cardConfigs.push({suit: SUIT.SPADES, rank: i, element: this.table, cardOptions});
            cardConfigs.push({suit: SUIT.DIAMONDS, rank: i, element: this.table, cardOptions});
            cardConfigs.push({suit: SUIT.CLUBS, rank: i, element: this.table, cardOptions});
        }

        while(cardConfigs.length) {
            const i = Math.floor(Math.random() * cardConfigs.length);
            const cardConfig = cardConfigs[i];
            this.all.push(new Card(cardConfig.suit, cardConfig.rank, cardConfig.element, cardConfig.cardOptions));
            cardConfigs.splice(i, 1);
        }
    }

    getAllCards() : Array<Card> {
        return this.all;
    }
}

export default Deck;
