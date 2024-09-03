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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cardPile_1 = __importDefault(require("./cardPile"));
const math_1 = require("./math");
class GameDeck extends cardPile_1.default {
    constructor(options) {
        super(options);
        this.cardPadding = 10;
    }
    _getCardPosition(index, totalCards) {
        let xPos = this.x;
        if (totalCards === 1) {
            xPos = this.x;
        }
        else if (totalCards === 2) {
            const leftMost = this.x - this.cardPadding / 2;
            xPos = leftMost + (1 - index) * this.cardPadding;
        }
        else if (index >= totalCards - 3) {
            const leftMost = this.x - this.cardPadding;
            xPos = leftMost + (totalCards - index - 1) * this.cardPadding;
        }
        else {
            xPos = this.x + this.cardPadding;
        }
        return (0, math_1.rotate)(this.x, this.y, xPos, this.y, this.rotation);
    }
    dealSync(count, hands) {
        const totalCount = count * hands.length;
        for (let i = 0; i < totalCount; i++) {
            if (this.cards.length === 0)
                return;
            hands[i % hands.length].addCardsSync([this.getTopCard()]);
        }
    }
    deal(count, hands, speed) {
        return __awaiter(this, void 0, void 0, function* () {
            clearInterval(this.animationId);
            return new Promise((res, rej) => {
                const totalCount = count * hands.length;
                let dealCounter = 0;
                const dealOne = () => {
                    if (this.cards.length === 0 || dealCounter === totalCount) {
                        clearInterval(this.animationId);
                        res();
                        return;
                    }
                    else if (dealCounter > totalCount) {
                        clearInterval(this.animationId);
                        rej(new Error("Dealt too many cards!"));
                        return;
                    }
                    hands[dealCounter % hands.length].addCards([this.getTopCard()]);
                    dealCounter++;
                };
                this.animationId = setInterval(dealOne, speed || 50);
            });
        });
    }
}
exports.default = GameDeck;
//# sourceMappingURL=gameDeck.js.map