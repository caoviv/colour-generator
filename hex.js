// Variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colourHex = document.querySelector('.hex');

// Event Listeners 
btn.addEventListener("click", generateHex);

// Functions 
function generateHex() {
    let hexColour = '#'
    for (let i=0; i<6; i++) {
        hexColour += hex[getRandomNumber()]
    }
    // set text to colour hex 
    colourHex.textContent = hexColour;
    // set background to featuring colour
    document.body.style.backgroundColor = hexColour;
    // set title colour to the featuring colour
    document.querySelector('.title').style.color = hexColour;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}