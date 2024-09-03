"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CardPile {
    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.rotation = options.rotation;
        this.cards = [];
    }
    _getCardPosition(index, totalCards) {
        return [this.x, this.y];
    }
    _moveCardsSync() {
        this.cards.forEach((card, index) => {
            const [x, y] = this._getCardPosition(index, this.cards.length);
            card.moveToSync(x, y, this.rotation);
            card.setZIndex(index);
        });
    }
    _moveCards() {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [];
            this.cards.forEach((card, index) => {
                const [x, y] = this._getCardPosition(index, this.cards.length);
                promises.push(card.moveTo(x, y, this.rotation));
            });
            yield Promise.all(promises);
            this.cards.forEach((card, index) => {
                card.setZIndex(index);
            });
        });
    }
    moveToSync(x, y) {
        this.x = x;
        this.y = y;
        this._moveCardsSync();
    }
    moveTo(x, y) {
        this.x = x;
        this.y = y;
        this._moveCards();
    }
    addCardsSync(cardArray) {
        cardArray.forEach((card) => {
            if (card.getContainer()) {
                card.getContainer().removeCardSync(card);
            }
            this.cards.push(card);
            card.setContainer(this);
        });
        this._moveCardsSync();
    }
    addCards(cardArray) {
        return __awaiter(this, void 0, void 0, function* () {
            cardArray.forEach((card) => {
                if (card.getContainer()) {
                    card.getContainer().removeCard(card);
                }
                this.cards.push(card);
                card.setContainer(this);
            });
            yield this._moveCards();
        });
    }
    _removeCard(card, moveFunction) {
        const index = this.cards.indexOf(card);
        if (index >= 0) {
            this.cards.splice(index, 1);
            card.removeFromContainer();
            moveFunction();
        }
        else {
            throw new Error("Card not in pile");
        }
    }
    removeCardSync(card) {
        this._removeCard(card, () => this._moveCardsSync());
    }
    removeCard(card) {
        this._removeCard(card, () => this._moveCards());
    }
    _shuffle() {
        let i = this.cards.length;
        if (!i)
            return;
        while (--i) {
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
    shuffle() {
        return __awaiter(this, void 0, void 0, function* () {
            this._shuffle();
            yield this._moveCards();
        });
    }
    getTopCard() {
        return this.cards[this.cards.length - 1];
    }
    onClick(handler) {
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
}
exports.default = CardPile;
//# sourceMappingURL=cardPile.js.map