"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DECK_TYPE = void 0;
const card_1 = __importStar(require("./card"));
var DECK_TYPE;
(function (DECK_TYPE) {
    DECK_TYPE[DECK_TYPE["STANDARD"] = 0] = "STANDARD";
    DECK_TYPE[DECK_TYPE["EUCHRE"] = 1] = "EUCHRE";
})(DECK_TYPE || (exports.DECK_TYPE = DECK_TYPE = {}));
class Deck {
    constructor(options) {
        var _a, _b;
        this.all = [];
        this.type = options.type;
        const start = this.type === DECK_TYPE.STANDARD ? 1 : 9;
        let end = this.type === DECK_TYPE.STANDARD ? 13 : 14;
        this.table = options.table;
        if (this.table.style.position === 'static') {
            this.table.style.position = 'relative';
        }
        const cardOptions = {
            cardSize: {
                height: ((_a = options.cardSize) === null || _a === void 0 ? void 0 : _a.height) || 167,
                width: ((_b = options.cardSize) === null || _b === void 0 ? void 0 : _b.width) || 119
            },
            animationSpeed: options.animationSpeed
        };
        const cardConfigs = [];
        for (let i = start; i <= end; i++) {
            cardConfigs.push({ suit: card_1.SUIT.HEARTS, rank: i, element: this.table, cardOptions });
            cardConfigs.push({ suit: card_1.SUIT.SPADES, rank: i, element: this.table, cardOptions });
            cardConfigs.push({ suit: card_1.SUIT.DIAMONDS, rank: i, element: this.table, cardOptions });
            cardConfigs.push({ suit: card_1.SUIT.CLUBS, rank: i, element: this.table, cardOptions });
        }
        while (cardConfigs.length) {
            const i = Math.floor(Math.random() * cardConfigs.length);
            const cardConfig = cardConfigs[i];
            this.all.push(new card_1.default(cardConfig.suit, cardConfig.rank, cardConfig.element, cardConfig.cardOptions));
            cardConfigs.splice(i, 1);
        }
    }
    getAllCards() {
        return this.all;
    }
}
exports.default = Deck;
//# sourceMappingURL=deck.js.map