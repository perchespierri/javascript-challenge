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
	let deck = []; 
	for(let suit = 0; suit < suits.length; suit++)	{ // usar foreach aqui e no outro for embaixo
		for(let value = 0; value < values.length; value++) { // flatmap desafio final
			let card = {CardValue: values[value], CardSuit: suits[suit]}; // mudar p lower camel case
			deck.push(card);
		}
	}
	return deck;
};

function suitFilter(deck, suit) { // utilizar short circuit nesse filter
  return deck.filter(card => {
    if (card.CardSuit === suit) {
      return card
    }
  })
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
  styledCardsDiv.innerHTML = ""; // usar replaceChildren ou coisa assim

	for(let i = 0; i < deck.length; i++)	{ // usar deck.forEach
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].CardSuit; // usar interpolação de string

		value.innerHTML = deck[i].CardValue;
		card.appendChild(value);
		card.appendChild(suit);

		styledCardsDiv.appendChild(card);
	}
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
  const diamondsCards =suitFilter(currentDeck, 'diamonds')
  manipulateDom(diamondsCards)
});

clubsButton.addEventListener('click', () => {
  const clubsCards = suitFilter(currentDeck, 'clubs')
  manipulateDom(clubsCards)
});

initialStateButton.addEventListener('click', () => {
  manipulateDom(initialDeck)
});

shuffle.addEventListener('click', ()=>{
  currentDeck = shuffleFunction(currentDeck)
  manipulateDom(currentDeck)
  
})

// Depois de embaralhar, se clicar pra voltar no inicial ele deve desembaralhar 
// os naipes filtrados tbm
