Kortspil med 8 billeder i en 4 x 4 grid.
Spillet skal vendes - 2 ens er et par.
Der skal en timer på.
Der skal en score på.
Når man rammer 8 point har man vundet.


// (fra Heinz)
// import { GoalModel } from "./model.js";

// const gameboard = document.getElementById("gameboard");
// const numCards = 5;
// let cardList = GoalModel();
// cardList.sort(() => Math.random() - 0.5);
// cardList = cardList.slice(0, numCards);
// cardList = cardList.concat(cardList);
// cardList.sort(() => Math.random() - 0.5);

// for (let card of cardList) {
// 	let div = document.createElement("div");
// 	div.innerText = card.goal;
// 	gameboard.append(div);
// }

// Det øverste var det Heinz lavede

//Nu kommer mig eget:

// Grab a couple of things

import cards from "../images/imageArray.js";

const container = document.getElementById("gameContainer");

const double = cards.concat(cards);

const cardsShuffled = double
	.map((card) => ({ card, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ card }) => card);

cardsShuffled.forEach((card) => {
	container.innerHTML += `
	
	<div class="billeder">

	<div class="back">
	
	</div>
	<img src="${card.picture}"\>
	
	</div>
	`;
});

const flip = () => {
	const buttons = document.querySelectorAll(".billeder");
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			event.target.classList.add("flip");
		});
	});
};

flip();

