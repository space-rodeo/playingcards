import Card from './card';

export interface CardPileOptionsInterface {
    x: number,
    y: number,
    rotation: number
}

class CardPile {
    protected cards: Array<Card>;
    protected x: number;
    protected y: number;
    protected rotation: number;
    private clickHandler: Function;

    constructor(options: CardPileOptionsInterface) {
        this.x = options.x;
        this.y = options.y;
        this.rotation = options.rotation;
        this.cards = [];
    }

    protected _getCardPosition(index: number, totalCards: number): number[] {
        return [this.x, this.y];
    }

    private _moveCardsSync() {
        this.cards.forEach((card, index) => {
            const [x, y] = this._getCardPosition(index, this.cards.length);
            card.moveToSync(x, y, this.rotation);
            card.setZIndex(index);
        });
    }

    private async _moveCards() {
        const promises: Array<Promise<void>> = [];
        this.cards.forEach((card, index) => {
            const [x, y] = this._getCardPosition(index, this.cards.length);
            promises.push(card.moveTo(x, y, this.rotation));
        });
        await Promise.all(promises);
        this.cards.forEach((card, index) => {
            card.setZIndex(index);
        });
    }

    moveToSync(x: number, y: number) {
        this.x = x;
        this.y = y;
        this._moveCardsSync();
    }

    moveTo(x: number, y: number) {
        this.x = x;
        this.y = y;
        this._moveCards();
    }

    addCardsSync(cardArray: Array<Card>) {
        cardArray.forEach((card) => {
            if (card.getContainer()) {
                card.getContainer().removeCardSync(card);
            }
            this.cards.push(card);
            card.setContainer(this);
        });
        this._moveCardsSync();
    }

    async addCards(cardArray: Array<Card>) {
        const containers: Array<CardPile> = [];
        cardArray.forEach((card) => {
            if (card.getContainer()) {
                if (!containers.includes(card.getContainer())) {
                    containers.push(card.getContainer());
                }
                card.getContainer()._removeCard(card);
            }
            this.cards.push(card);
            card.setContainer(this);
        });
        const promises: Array<Promise<void>> = [];
        containers.forEach((container) => {
            promises.push(container._moveCards());
        });
        promises.push(this._moveCards());
        await Promise.all(promises);
    }

    private _removeCard(card: Card) {
        const index = this.cards.indexOf(card);
        if (index >= 0) {
            this.cards.splice(index, 1);
            card.removeFromContainer();
        } else {
            throw new Error("Card not in pile");
        }
    }

    removeCardSync(card: Card) {
        this._removeCard(card);
        this._moveCardsSync();
    }

    async removeCard(card: Card) {
        this._removeCard(card);
        await this._moveCards();
    }

    private _shuffle() {
        let i = this.cards.length;
        if (!i) return;
        while(--i) {
            const j = Math.floor(Math.random() * (i + 1));
            const tempi = this.cards[i];
            const tempj = this.cards[j];
            this.cards[i] = tempj;
            this.cards[j] = tempi;
            this.cards[i].setZIndex(i);
            this.cards[j].setZIndex(j);
        }
    }

    shuffleSync() {
        this._shuffle();
        this._moveCardsSync();
    }

    async shuffle() {
        this._shuffle();
        await this._moveCards();
    }

    getTopCard() : Card {
        return this.cards[this.cards.length - 1];
    }

    onClick(handler: Function) {
        this.clickHandler = handler;
    }

    _getClickHandler() {
        return this.clickHandler;
    }

    show() {
        this.cards.forEach((card) => {
            card.show();
        });
    }

    hide() {
        this.cards.forEach((card) => {
            card.hide();
        });
    }

    sortSync(sortingFunction: (a: Card, b: Card) => number) {
        this.cards.sort(sortingFunction);
        this._moveCardsSync();
    }

    async sort(sortingFunction: (a: Card, b: Card) => number) {
        this.cards.sort(sortingFunction);
        await this._moveCards();
    }

    orderSync(order: Array<string>) {
        const newOrder: Array<Card> = [];
        order.forEach((cardName) => {
            const newCard = this.cards.find((card) => { card.toString() === cardName });
            if (newCard) {
                newOrder.push(newCard);
            }
        });
        this.cards = newOrder;
        this._moveCardsSync();
    }
}

export default CardPile;
