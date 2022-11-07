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
        // set title colour to the featuring colour
        document.querySelector('.title').style.color = colours[colourCount][0];
        // set background to featuring colour
        document.body.style.backgroundColor = colours[colourCount][0];
        // set text to colour hex 
        colourHex.textContent = colours[colourCount][0];
        // set text to colour name 
        colourName.textContent = colours[colourCount][1];
        colourCount += 1;
    }  else {
        // set title colour to the featuring colour
        document.querySelector('.title').style.color = colours[colourCount][0];
        // set background to featuring colour
        document.body.style.backgroundColor = colours[colourCount][0];
        // set text to colour hex 
        colourHex.textContent = colours[colourCount][0];
        // set text to colour name 
        colourName.textContent = colours[colourCount][1];
        colourCount = 0;
    }
}