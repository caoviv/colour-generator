// Variables 
const colours = ["#6667AB", "#939597", "#0f4c81", "#ff6f61"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');
let colourCount = 0;


// Event Listeners 
btn.addEventListener("click", cycleColour);

// Functions
// cycle throught colours array
function cycleColour() {
    if (colourCount < colours.length - 1 ) {
            // set background to the random colour
        document.body.style.backgroundColor = colours[colourCount];
            // set text to colour name, rgb or hex 
        colour.textContent = colours[colourCount];
        colourCount += 1;
    }  else {
            // set background to the random colour
        document.body.style.backgroundColor = colours[colourCount];
            // set text to colour name, rgb or hex 
        colour.textContent = colours[colourCount];
        colourCount = 0;
    }
}
