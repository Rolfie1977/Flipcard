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
