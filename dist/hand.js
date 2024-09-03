"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cardPile_1 = __importDefault(require("./cardPile"));
const math_1 = require("./math");
class Hand extends cardPile_1.default {
    constructor(options) {
        super(options);
        this.cardPadding = options.cardPadding || 20;
    }
    _getCardPosition(index, totalCards) {
        const leftMost = this.x - (totalCards - 1) * this.cardPadding / 2;
        const xPos = leftMost + index * this.cardPadding;
        return (0, math_1.rotate)(this.x, this.y, xPos, this.y, this.rotation);
    }
}
exports.default = Hand;
//# sourceMappingURL=hand.js.map