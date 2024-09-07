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
exports.SUIT = void 0;
const CLUB_1_svg_1 = __importDefault(require("../svg/CLUB-1.svg"));
const CLUB_2_svg_1 = __importDefault(require("../svg/CLUB-2.svg"));
const CLUB_3_svg_1 = __importDefault(require("../svg/CLUB-3.svg"));
const CLUB_4_svg_1 = __importDefault(require("../svg/CLUB-4.svg"));
const CLUB_5_svg_1 = __importDefault(require("../svg/CLUB-5.svg"));
const CLUB_6_svg_1 = __importDefault(require("../svg/CLUB-6.svg"));
const CLUB_7_svg_1 = __importDefault(require("../svg/CLUB-7.svg"));
const CLUB_8_svg_1 = __importDefault(require("../svg/CLUB-8.svg"));
const CLUB_9_svg_1 = __importDefault(require("../svg/CLUB-9.svg"));
const CLUB_10_svg_1 = __importDefault(require("../svg/CLUB-10.svg"));
const CLUB_11_JACK_svg_1 = __importDefault(require("../svg/CLUB-11-JACK.svg"));
const CLUB_12_QUEEN_svg_1 = __importDefault(require("../svg/CLUB-12-QUEEN.svg"));
const CLUB_13_KING_svg_1 = __importDefault(require("../svg/CLUB-13-KING.svg"));
const DIAMOND_1_svg_1 = __importDefault(require("../svg/DIAMOND-1.svg"));
const DIAMOND_2_svg_1 = __importDefault(require("../svg/DIAMOND-2.svg"));
const DIAMOND_3_svg_1 = __importDefault(require("../svg/DIAMOND-3.svg"));
const DIAMOND_4_svg_1 = __importDefault(require("../svg/DIAMOND-4.svg"));
const DIAMOND_5_svg_1 = __importDefault(require("../svg/DIAMOND-5.svg"));
const DIAMOND_6_svg_1 = __importDefault(require("../svg/DIAMOND-6.svg"));
const DIAMOND_7_svg_1 = __importDefault(require("../svg/DIAMOND-7.svg"));
const DIAMOND_8_svg_1 = __importDefault(require("../svg/DIAMOND-8.svg"));
const DIAMOND_9_svg_1 = __importDefault(require("../svg/DIAMOND-9.svg"));
const DIAMOND_10_svg_1 = __importDefault(require("../svg/DIAMOND-10.svg"));
const DIAMOND_11_JACK_svg_1 = __importDefault(require("../svg/DIAMOND-11-JACK.svg"));
const DIAMOND_12_QUEEN_svg_1 = __importDefault(require("../svg/DIAMOND-12-QUEEN.svg"));
const DIAMOND_13_KING_svg_1 = __importDefault(require("../svg/DIAMOND-13-KING.svg"));
const HEART_1_svg_1 = __importDefault(require("../svg/HEART-1.svg"));
const HEART_2_svg_1 = __importDefault(require("../svg/HEART-2.svg"));
const HEART_3_svg_1 = __importDefault(require("../svg/HEART-3.svg"));
const HEART_4_svg_1 = __importDefault(require("../svg/HEART-4.svg"));
const HEART_5_svg_1 = __importDefault(require("../svg/HEART-5.svg"));
const HEART_6_svg_1 = __importDefault(require("../svg/HEART-6.svg"));
const HEART_7_svg_1 = __importDefault(require("../svg/HEART-7.svg"));
const HEART_8_svg_1 = __importDefault(require("../svg/HEART-8.svg"));
const HEART_9_svg_1 = __importDefault(require("../svg/HEART-9.svg"));
const HEART_10_svg_1 = __importDefault(require("../svg/HEART-10.svg"));
const HEART_11_JACK_svg_1 = __importDefault(require("../svg/HEART-11-JACK.svg"));
const HEART_12_QUEEN_svg_1 = __importDefault(require("../svg/HEART-12-QUEEN.svg"));
const HEART_13_KING_svg_1 = __importDefault(require("../svg/HEART-13-KING.svg"));
const SPADE_1_svg_1 = __importDefault(require("../svg/SPADE-1.svg"));
const SPADE_2_svg_1 = __importDefault(require("../svg/SPADE-2.svg"));
const SPADE_3_svg_1 = __importDefault(require("../svg/SPADE-3.svg"));
const SPADE_4_svg_1 = __importDefault(require("../svg/SPADE-4.svg"));
const SPADE_5_svg_1 = __importDefault(require("../svg/SPADE-5.svg"));
const SPADE_6_svg_1 = __importDefault(require("../svg/SPADE-6.svg"));
const SPADE_7_svg_1 = __importDefault(require("../svg/SPADE-7.svg"));
const SPADE_8_svg_1 = __importDefault(require("../svg/SPADE-8.svg"));
const SPADE_9_svg_1 = __importDefault(require("../svg/SPADE-9.svg"));
const SPADE_10_svg_1 = __importDefault(require("../svg/SPADE-10.svg"));
const SPADE_11_JACK_svg_1 = __importDefault(require("../svg/SPADE-11-JACK.svg"));
const SPADE_12_QUEEN_svg_1 = __importDefault(require("../svg/SPADE-12-QUEEN.svg"));
const SPADE_13_KING_svg_1 = __importDefault(require("../svg/SPADE-13-KING.svg"));
const CARD_BACK_svg_1 = __importDefault(require("../svg/CARD_BACK.svg"));
var SUIT;
(function (SUIT) {
    SUIT["HEARTS"] = "HEARTS";
    SUIT["SPADES"] = "SPADES";
    SUIT["DIAMONDS"] = "DIAMONDS";
    SUIT["CLUBS"] = "CLUBS";
})(SUIT || (exports.SUIT = SUIT = {}));
;
;
function getCardImage(suit, rank) {
    if (suit === SUIT.CLUBS) {
        switch (rank) {
            case 14:
            case 1:
                return CLUB_1_svg_1.default;
            case 2:
                return CLUB_2_svg_1.default;
            case 3:
                return CLUB_3_svg_1.default;
            case 4:
                return CLUB_4_svg_1.default;
            case 5:
                return CLUB_5_svg_1.default;
            case 6:
                return CLUB_6_svg_1.default;
            case 7:
                return CLUB_7_svg_1.default;
            case 8:
                return CLUB_8_svg_1.default;
            case 9:
                return CLUB_9_svg_1.default;
            case 10:
                return CLUB_10_svg_1.default;
            case 11:
                return CLUB_11_JACK_svg_1.default;
            case 12:
                return CLUB_12_QUEEN_svg_1.default;
            case 13:
                return CLUB_13_KING_svg_1.default;
        }
    }
    else if (suit === SUIT.DIAMONDS) {
        switch (rank) {
            case 14:
            case 1:
                return DIAMOND_1_svg_1.default;
            case 2:
                return DIAMOND_2_svg_1.default;
            case 3:
                return DIAMOND_3_svg_1.default;
            case 4:
                return DIAMOND_4_svg_1.default;
            case 5:
                return DIAMOND_5_svg_1.default;
            case 6:
                return DIAMOND_6_svg_1.default;
            case 7:
                return DIAMOND_7_svg_1.default;
            case 8:
                return DIAMOND_8_svg_1.default;
            case 9:
                return DIAMOND_9_svg_1.default;
            case 10:
                return DIAMOND_10_svg_1.default;
            case 11:
                return DIAMOND_11_JACK_svg_1.default;
            case 12:
                return DIAMOND_12_QUEEN_svg_1.default;
            case 13:
                return DIAMOND_13_KING_svg_1.default;
        }
    }
    else if (suit === SUIT.HEARTS) {
        switch (rank) {
            case 14:
            case 1:
                return HEART_1_svg_1.default;
            case 2:
                return HEART_2_svg_1.default;
            case 3:
                return HEART_3_svg_1.default;
            case 4:
                return HEART_4_svg_1.default;
            case 5:
                return HEART_5_svg_1.default;
            case 6:
                return HEART_6_svg_1.default;
            case 7:
                return HEART_7_svg_1.default;
            case 8:
                return HEART_8_svg_1.default;
            case 9:
                return HEART_9_svg_1.default;
            case 10:
                return HEART_10_svg_1.default;
            case 11:
                return HEART_11_JACK_svg_1.default;
            case 12:
                return HEART_12_QUEEN_svg_1.default;
            case 13:
                return HEART_13_KING_svg_1.default;
        }
    }
    else if (suit === SUIT.SPADES) {
        switch (rank) {
            case 14:
            case 1:
                return SPADE_1_svg_1.default;
            case 2:
                return SPADE_2_svg_1.default;
            case 3:
                return SPADE_3_svg_1.default;
            case 4:
                return SPADE_4_svg_1.default;
            case 5:
                return SPADE_5_svg_1.default;
            case 6:
                return SPADE_6_svg_1.default;
            case 7:
                return SPADE_7_svg_1.default;
            case 8:
                return SPADE_8_svg_1.default;
            case 9:
                return SPADE_9_svg_1.default;
            case 10:
                return SPADE_10_svg_1.default;
            case 11:
                return SPADE_11_JACK_svg_1.default;
            case 12:
                return SPADE_12_QUEEN_svg_1.default;
            case 13:
                return SPADE_13_KING_svg_1.default;
        }
    }
    return CARD_BACK_svg_1.default;
}
function onClickGenerator(card) {
    return (event) => {
        var _a;
        const handler = (_a = card.getContainer()) === null || _a === void 0 ? void 0 : _a._getClickHandler();
        if (handler) {
            handler(card, event);
        }
    };
}
class Card {
    constructor(suit, rank, table, options) {
        var _a, _b;
        this.container = null;
        this.animationSpeed = 250;
        this.rotation = 0;
        this.suit = suit;
        this.rank = rank;
        this.table = table;
        this.imageSource = getCardImage(this.suit, this.rank);
        this.element = document.createElement('div');
        this.image = document.createElement('img');
        this.image.src = CARD_BACK_svg_1.default;
        if ((_a = options === null || options === void 0 ? void 0 : options.cardSize) === null || _a === void 0 ? void 0 : _a.height) {
            this.image.height = options.cardSize.height;
        }
        if ((_b = options === null || options === void 0 ? void 0 : options.cardSize) === null || _b === void 0 ? void 0 : _b.width) {
            this.image.width = options.cardSize.width;
        }
        if (options === null || options === void 0 ? void 0 : options.animationSpeed) {
            this.animationSpeed = options.animationSpeed;
        }
        this.element.appendChild(this.image);
        this.element.className = 'card';
        this.table.appendChild(this.element);
        this.element.addEventListener('click', onClickGenerator(this));
    }
    toString() {
        return `${this.suit}-${this.rank}`;
    }
    show() {
        this.image.src = this.imageSource;
        this.element.classList.add('faceUp');
    }
    hide() {
        this.image.src = CARD_BACK_svg_1.default;
        this.element.classList.remove('faceUp');
    }
    getContainer() {
        return this.container;
    }
    setContainer(cardPile) {
        if (this.container) {
            throw new Error("Card cannot be in two containers!");
        }
        else {
            this.container = cardPile;
        }
    }
    removeFromContainer() {
        this.container = null;
    }
    moveToSync(x, y, rotation) {
        const targetTop = y - (this.image.offsetHeight / 2);
        const targetLeft = x - (this.image.offsetWidth / 2);
        this.element.style.top = `${targetTop}px`;
        this.element.style.left = `${targetLeft}px`;
        this.rotation = rotation;
        this.element.style.transform = 'rotate(' + rotation + 'deg)';
    }
    moveTo(x, y, rotation) {
        return __awaiter(this, void 0, void 0, function* () {
            clearInterval(this.animationId);
            return new Promise((res, rej) => {
                const targetTop = y - (this.image.offsetHeight / 2);
                const targetLeft = x - (this.image.offsetWidth / 2);
                const originX = this.element.offsetLeft;
                const originY = this.element.offsetTop;
                const originRotation = this.rotation;
                const totalFrames = this.animationSpeed / 10;
                const stepX = (targetLeft - originX) / totalFrames;
                const stepY = (targetTop - originY) / totalFrames;
                const stepRotation = (rotation - originRotation) / totalFrames;
                let frameCounter = 0;
                const frame = () => {
                    frameCounter++;
                    this.element.style.top = (originY + (stepY * frameCounter)) + 'px';
                    this.element.style.left = (originX + (stepX * frameCounter)) + 'px';
                    this.rotation = (originRotation + (stepRotation * frameCounter));
                    this.element.style.transform = 'rotate(' + this.rotation + 'deg)';
                    if (frameCounter === totalFrames) {
                        clearInterval(this.animationId);
                        res();
                    }
                    else if (frameCounter > totalFrames) {
                        clearInterval(this.animationId);
                        rej(new Error("Animation interval exceeded"));
                    }
                };
                this.animationId = setInterval(frame, 10);
            });
        });
    }
    setZIndex(zIndex) {
        this.element.style.zIndex = zIndex.toString();
    }
    getSuit() {
        return this.suit;
    }
    getRank() {
        return this.rank;
    }
}
exports.default = Card;
//# sourceMappingURL=card.js.map