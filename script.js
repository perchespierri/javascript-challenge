const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const initialDeck = createDeck();
let currentDeck = createDeck();

const heartsButton = document.querySelector('#hearts-button');
const spadesButton = document.querySelector('#spades-button');
const diamondsButton = document.querySelector('#diamonds-button');
const clubsButton = document.querySelector('#clubs-button');
const styledCardsDiv = document.querySelector('#deck');
const shuffle = document.querySelector('#shuffle');
const initialStateButton = document.querySelector('#initial-state-button');

function createDeck() {
  const deck = [];
  suits.flatMap(suit => {
    values.map(value => {
      deck.push({cardValue: `${value}`, cardSuit: `${suit}`});
    })    
  })
  return deck
} 

function suitFilter(deck, suit) {
  return deck.filter(card => card.cardSuit === suit)
}

function shuffleFunction(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function manipulateDom(deck){
  styledCardsDiv.replaceChildren("");

  deck.forEach(function(currentValue) {
    let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = `suit ${currentValue.cardSuit}`;

		value.innerHTML = currentValue.cardValue;
		card.appendChild(value);
		card.appendChild(suit);
		styledCardsDiv.appendChild(card);
	})
}

function updateCurrentDeck(deckCurrent, deckInitial) {
  if(deckInitial !== deckCurrent) {
    return deckCurrent = deckInitial;
  }
  return deckCurrent;
}

heartsButton.addEventListener('click', () => {
  const heartsCards = suitFilter(currentDeck, 'hearts') 
  manipulateDom(heartsCards)
});

spadesButton.addEventListener('click', () => {
  const spadesCards = suitFilter(currentDeck, 'spades')
  manipulateDom(spadesCards)
});

diamondsButton.addEventListener('click', () => {
  const diamondsCards = suitFilter(currentDeck, 'diamonds')
  manipulateDom(diamondsCards)
});

clubsButton.addEventListener('click', () => {
  const clubsCards = suitFilter(currentDeck, 'clubs')
  manipulateDom(clubsCards)
});

initialStateButton.addEventListener('click', () => {
  currentDeck = createDeck()
  manipulateDom(initialDeck)
});

shuffle.addEventListener('click', ()=>{
  currentDeck = shuffleFunction(currentDeck)
  manipulateDom(currentDeck)
  
})

