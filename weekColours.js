// Variables 
const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');


// Event Listeners 
btn.addEventListener("click", changeColour);

// Functions
// changes the background colour 
function changeColour() {
    // randomly select colour from colours array 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // set background to the random colour
    document.body.style.backgroundColor = colours[randomNumber];
    // set text to colour name, rgb or hex 
    colour.textContent = colours[randomNumber];
}

/* randomly select colour from colours array,
get random number between 0 and the array length (i.e 3)*/ 
function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);    
}