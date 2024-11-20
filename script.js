// script.js
const myFacts = [
    "I am 21 years old and passionate about marine life.",
    "I spend my weekends exploring local beaches and tide pools.",
    "I'm learning to surf and hope to catch my first big wave this year.",
    "I've started a marine conservation club at my college.",
    "I can identify over 20 different species of ocean creatures."
];

const factDisplay = document.getElementById('factDisplay');
const newFactBtn = document.getElementById('newFactBtn');

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * myFacts.length);
    factDisplay.textContent = myFacts[randomIndex];
}

newFactBtn.addEventListener('click', displayRandomFact);
