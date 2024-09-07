import CardPile from './cardPile';

import CLUB_ACE from '../svg/CLUB-1.svg';
import CLUB_2 from '../svg/CLUB-2.svg';
import CLUB_3 from '../svg/CLUB-3.svg';
import CLUB_4 from '../svg/CLUB-4.svg';
import CLUB_5 from '../svg/CLUB-5.svg';
import CLUB_6 from '../svg/CLUB-6.svg';
import CLUB_7 from '../svg/CLUB-7.svg';
import CLUB_8 from '../svg/CLUB-8.svg';
import CLUB_9 from '../svg/CLUB-9.svg';
import CLUB_10 from '../svg/CLUB-10.svg';
import CLUB_JACK from '../svg/CLUB-11-JACK.svg';
import CLUB_QUEEN from '../svg/CLUB-12-QUEEN.svg';
import CLUB_KING from '../svg/CLUB-13-KING.svg';
import DIAMOND_ACE from '../svg/DIAMOND-1.svg';
import DIAMOND_2 from '../svg/DIAMOND-2.svg';
import DIAMOND_3 from '../svg/DIAMOND-3.svg';
import DIAMOND_4 from '../svg/DIAMOND-4.svg';
import DIAMOND_5 from '../svg/DIAMOND-5.svg';
import DIAMOND_6 from '../svg/DIAMOND-6.svg';
import DIAMOND_7 from '../svg/DIAMOND-7.svg';
import DIAMOND_8 from '../svg/DIAMOND-8.svg';
import DIAMOND_9 from '../svg/DIAMOND-9.svg';
import DIAMOND_10 from '../svg/DIAMOND-10.svg';
import DIAMOND_JACK from '../svg/DIAMOND-11-JACK.svg';
import DIAMOND_QUEEN from '../svg/DIAMOND-12-QUEEN.svg';
import DIAMOND_KING from '../svg/DIAMOND-13-KING.svg';
import HEART_ACE from '../svg/HEART-1.svg';
import HEART_2 from '../svg/HEART-2.svg';
import HEART_3 from '../svg/HEART-3.svg';
import HEART_4 from '../svg/HEART-4.svg';
import HEART_5 from '../svg/HEART-5.svg';
import HEART_6 from '../svg/HEART-6.svg';
import HEART_7 from '../svg/HEART-7.svg';
import HEART_8 from '../svg/HEART-8.svg';
import HEART_9 from '../svg/HEART-9.svg';
import HEART_10 from '../svg/HEART-10.svg';
import HEART_JACK from '../svg/HEART-11-JACK.svg';
import HEART_QUEEN from '../svg/HEART-12-QUEEN.svg';
import HEART_KING from '../svg/HEART-13-KING.svg';
import SPADE_ACE from '../svg/SPADE-1.svg';
import SPADE_2 from '../svg/SPADE-2.svg';
import SPADE_3 from '../svg/SPADE-3.svg';
import SPADE_4 from '../svg/SPADE-4.svg';
import SPADE_5 from '../svg/SPADE-5.svg';
import SPADE_6 from '../svg/SPADE-6.svg';
import SPADE_7 from '../svg/SPADE-7.svg';
import SPADE_8 from '../svg/SPADE-8.svg';
import SPADE_9 from '../svg/SPADE-9.svg';
import SPADE_10 from '../svg/SPADE-10.svg';
import SPADE_JACK from '../svg/SPADE-11-JACK.svg';
import SPADE_QUEEN from '../svg/SPADE-12-QUEEN.svg';
import SPADE_KING from '../svg/SPADE-13-KING.svg';
import CARD_BACK from '../svg/CARD_BACK.svg';

export enum SUIT {
    HEARTS = 'HEARTS',
    SPADES = 'SPADES',
    DIAMONDS = 'DIAMONDS',
    CLUBS = 'CLUBS'
};

export interface CardOptionsInterface {
    animationSpeed?: number,
    cardSize: {
        height: number,
        width: number,
    },
};

function getCardImage(suit: SUIT, rank: number): string {
    if (suit === SUIT.CLUBS) {
        switch (rank) {
            case 14:
            case 1:
                return CLUB_ACE;
            case 2:
                return CLUB_2;
            case 3:
                return CLUB_3;
            case 4:
                return CLUB_4;
            case 5:
                return CLUB_5;
            case 6:
                return CLUB_6;
            case 7:
                return CLUB_7;
            case 8:
                return CLUB_8;
            case 9:
                return CLUB_9;
            case 10:
                return CLUB_10;
            case 11:
                return CLUB_JACK;
            case 12:
                return CLUB_QUEEN;
            case 13:
                return CLUB_KING;
        }
    } else if (suit === SUIT.DIAMONDS) {
        switch (rank) {
            case 14:
            case 1:
                return DIAMOND_ACE;
            case 2:
                return DIAMOND_2;
            case 3:
                return DIAMOND_3;
            case 4:
                return DIAMOND_4;
            case 5:
                return DIAMOND_5;
            case 6:
                return DIAMOND_6;
            case 7:
                return DIAMOND_7;
            case 8:
                return DIAMOND_8;
            case 9:
                return DIAMOND_9;
            case 10:
                return DIAMOND_10;
            case 11:
                return DIAMOND_JACK;
            case 12:
                return DIAMOND_QUEEN;
            case 13:
                return DIAMOND_KING;
        }
    } else if (suit === SUIT.HEARTS) {
        switch (rank) {
            case 14:
            case 1:
                return HEART_ACE;
            case 2:
                return HEART_2;
            case 3:
                return HEART_3;
            case 4:
                return HEART_4;
            case 5:
                return HEART_5;
            case 6:
                return HEART_6;
            case 7:
                return HEART_7;
            case 8:
                return HEART_8;
            case 9:
                return HEART_9;
            case 10:
                return HEART_10;
            case 11:
                return HEART_JACK;
            case 12:
                return HEART_QUEEN;
            case 13:
                return HEART_KING;
        }
    } else if (suit === SUIT.SPADES) {
        switch (rank) {
            case 14:
            case 1:
                return SPADE_ACE;
            case 2:
                return SPADE_2;
            case 3:
                return SPADE_3;
            case 4:
                return SPADE_4;
            case 5:
                return SPADE_5;
            case 6:
                return SPADE_6;
            case 7:
                return SPADE_7;
            case 8:
                return SPADE_8;
            case 9:
                return SPADE_9;
            case 10:
                return SPADE_10;
            case 11:
                return SPADE_JACK;
            case 12:
                return SPADE_QUEEN;
            case 13:
                return SPADE_KING;
        }
    }
    return CARD_BACK;
}

function onClickGenerator(card: Card) {
    return (event: MouseEvent) => {
        const handler = card.getContainer()?._getClickHandler();
        if (handler) {
            handler(card, event);
        }
    }
}

class Card {
    private suit: SUIT;
    private rank: number;
    private table: HTMLElement;
    private imageSource: string;
    private image: HTMLImageElement;
    private element: HTMLElement;
    private container: CardPile = null;
    private animationSpeed: number = 250;
    private animationId: NodeJS.Timeout;
    private rotation: number = 0;

    constructor(suit: SUIT, rank: number, table: HTMLElement, options?: CardOptionsInterface) {
        this.suit = suit;
        this.rank = rank;
        this.table = table;
        this.imageSource = getCardImage(this.suit, this.rank);
        this.element = document.createElement('div');
        this.image = document.createElement('img');
        this.image.src = CARD_BACK;
        if (options?.cardSize?.height) {
            this.image.height = options.cardSize.height;
        }
        if (options?.cardSize?.width) {
            this.image.width = options.cardSize.width;
        }
        if (options?.animationSpeed) {
            this.animationSpeed = options.animationSpeed;
        }
        this.element.appendChild(this.image);
        this.element.className = 'card';
        this.table.appendChild(this.element);
        this.element.addEventListener('click', onClickGenerator(this));
    }

    toString() : string {
        return `${this.suit}-${this.rank}`;
    }

    show() {
        this.image.src = this.imageSource;
        this.element.classList.add('faceUp');
    }

    hide() {
        this.image.src = CARD_BACK;
        this.element.classList.remove('faceUp');
    }

    getContainer() {
        return this.container;
    }

    setContainer(cardPile: CardPile) {
        if (this.container) {
            throw new Error('Card cannot be in two containers!');
        } else {
            this.container = cardPile;
        }
    }

    removeFromContainer() {
        this.container = null;
    }

    moveToSync(x: number, y: number, rotation: number) {
        const targetTop = y - (this.image.offsetHeight / 2);
        const targetLeft = x - (this.image.offsetWidth / 2);
        this.element.style.top = `${targetTop}px`;
        this.element.style.left = `${targetLeft}px`;
        this.rotation = rotation;
        this.element.style.transform = 'rotate(' + rotation + 'deg)';
    }

    async moveTo(x: number, y: number, rotation: number) {
        clearInterval(this.animationId);
        return new Promise<void>((res, rej) => {
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
                this.rotation = (originRotation + (stepRotation * frameCounter))
                this.element.style.transform = 'rotate(' + this.rotation + 'deg)';
                if (frameCounter === totalFrames) {
                    clearInterval(this.animationId);
                    res();
                } else if (frameCounter > totalFrames) {
                    clearInterval(this.animationId);
                    rej(new Error('Animation interval exceeded'));
                }
            }
            this.animationId = setInterval(frame, 10);
        })
    }

    setZIndex(zIndex: number) {
        this.element.style.zIndex = zIndex.toString();
    }

    getSuit() {
        return this.suit;
    }

    getRank() {
        return this.rank;
    }
}

export default Card;
