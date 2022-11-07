// Variables 
const colours = [["#6667AB", "2022 Very Peri"], ["#939597", "2021 Illuminating"], ["#0f4c81", "2020 Classic Blue"], ["#ff6f61", " 2019 Living Coral"]];
const btn = document.getElementById('btn');
const colourName = document.querySelector('.name');
const colourHex = document.querySelector('.hex');
let colourCount = 0;


// Event Listeners 
btn.addEventListener("click", cycleColour);

// Functions
// cycle throught colours array
function cycleColour() {
    if (colourCount < colours.length - 1 ) {
            // set background to the random colour
        document.body.style.backgroundColor = colours[colourCount][0];
            // set text to colour name, rgb or hex 
        colourHex.textContent = colours[colourCount][0];
        colourName.textContent = colours[colourCount][1];
        colourCount += 1;
    }  else {
            // set background to the random colour
        document.body.style.backgroundColor = colours[colourCount][0];
            // set text to colour name, rgb or hex 
        colourHex.textContent = colours[colourCount][0];
        colourName.textContent = colours[colourCount][1];
        colourCount = 0;
    }
}
