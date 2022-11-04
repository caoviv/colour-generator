// Variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

// Event Listeners 
btn.addEventListener("click", generateHex);

// Functions 
function generateHex() {
    let hexColour = '#'
    for (let i=0; i<6; i++) {
        hexColour += hex[getRandomNumber()]
    }
    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}