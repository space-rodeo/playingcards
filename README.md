# Overview
This project is designed to make writing card games easier. It includes assets and animations. An example game built using this library is at https://euchre.xyz/

## Example Project
```
import { DECK_TYPE, Deck, Card, Hand, GameDeck } from 'playingcards';

const element = document.getElementById('card-table');
const deck = new Deck({
  table: element,
  type: DECK_TYPE.EUCHRE,
  animationSpeed: 200,
  cardSize: {
    height: 167,
    width: 119
  }
});
const middleX = element.offsetWidth / 2;
const middleY = element.offsetHeight / 2;

const startGame = async () => {
    const gameDeck = new GameDeck({ x: middleX, y: middleY, rotation: 0 });
    gameDeck.addCardsSync(deck.getAllCards());
    await gameDeck.shuffle();

    const lowerHand = new Hand({
        x: middleX,
        y: element.offsetTop + element.offsetHeight - cardSize.height / 2 - 20,
        rotation: 0,
        cardPadding: cardSize.width / 6,
    });
    const upperHand = new Hand({
        x: middleX,
        y: element.offsetTop + cardSize.height / 2 + 20,
        rotation: 0,
        cardPadding: cardSize.width / 6,
    });
    const leftHand = new Hand({
        x: cardSize.height / 2 + 20,
        y: middleY,
        rotation: 90,
        cardPadding: cardSize.width / 6
    });
    const rightHand = new Hand({
        x: element.offsetLeft + element.offsetWidth - cardSize.height / 2 - 20,
        y: middleY,
        rotation: 90,
        cardPadding: cardSize.width / 6
    });

    window.addEventListener('resize', (event: UIEvent) => {
        const middleX = element.offsetWidth / 2;
        const middleY = element.offsetHeight / 2;
        lowerHand.moveToSync(middleX, element.offsetTop + element.offsetHeight - cardSize.height / 2 - 20);
        upperHand.moveTo(middleX, element.offsetTop + cardSize.height / 2 + 20);
        leftHand.moveTo(cardSize.height / 2 + 20, middleY);
        rightHand.moveTo(element.offsetLeft + element.offsetWidth - cardSize.height / 2 - 20, middleY);
        gameDeck.moveToSync(middleX, middleY);
    });

    gameDeck.onClick(async () => {
        await gameDeck.deal(5, [lowerHand, leftHand, upperHand, rightHand]);
        lowerHand.show();
        gameDeck.onClick(() => {
        });
        gameDeck.getTopCard().show();
    });
}
startGame();
```

## Attribution
Card Face images author Chris Aguilar

Card Back image author David Bellot
