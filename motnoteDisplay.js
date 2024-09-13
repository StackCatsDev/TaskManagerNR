// this is for the motivational notes..:)

const quotes = [
    "Believe in yourself and all that you are.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You are capable of amazing things.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Your only limit is your mind.",
    "Stay positive, work hard, make it happen.",
    "Dream big and dare to fail.",
	"Success is the sum of small efforts, repeated day in and day out.",
	"Believe you can and you’re halfway there.",
 	"Set your goals high, and don’t stop till you get there.",
 	"Don’t watch the clock; do what it does. Keep going.",
 	"Start where you are. Use what you have. Do what you can.",
 	"Success is not final, failure is not fatal: It is the courage to continue that counts.",
 	"Act as if what you do makes a difference. It does.",
 	"Keep your eyes on the stars, and your feet on the ground.",
 	"The future belongs to those who believe in the beauty of their dreams.",
 	"Don’t wait. The time will never be just right.",
 	"Perseverance is not a long race; it is many short races one after the other.",
 	"Hardships often prepare ordinary people for an extraordinary destiny.",
 	"Your limitation—it’s only your imagination.",
 	"Push yourself, because no one else is going to do it for you.",
 	"Great things never come from comfort zones.",
 	"Dream it. Wish it. Do it.",
 	"Success doesn’t just find you. You have to go out and get it.",
 	"The harder you work for something, the greater you’ll feel when you achieve it.",
 	"Dream bigger. Do bigger."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const displayableQuote = getRandomQuote();
    console.log(displayableQuote);
    document.getElementById('motNotes').innerText = displayableQuote;

});