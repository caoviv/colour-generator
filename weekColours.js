// Variables 
const colours = [["#6667AB", "2022 Very Peri"], ["#F5DF4D", "2021 Illuminating"], ["#939597", "2021 Ultimate Gray"], ["#0f4c81", "2020 Classic Blue"], ["#ff6f61", " 2019 Living Coral"], ["#5F4B8B", "2018: Ultra Violet"], ["#84bd00", "2017: Greenery"], ["#F7CAC9", "2016: Rose Quartz"], ["#92A8D1", "2016: Serenity"], ["#B57170", "2015: Marsala"], ["#B163A3", "2014: Radiant Orchid"], ["#50C878", "2013: Emerald"], ["#DD4124", "2012: Tangerine Tango"], ["#EAE86F", "2011: Honeysuckle"], ["#45B5AA", "2010: Turquoise"], ["#FFCA4B", "2009: Mimosa"], ["#5B5EA6", "2008: Blue Izis"], ["#9B2335", "2007: Chili Pepper"], ["#DFCFBE", "2006: Sand Dollar"], ["#55B4B0", "2005: Blue Turquoise"], ["#E15D44", "2004: Tigerlily"], ["#7FCDCD", "2003: Aqua Sky"], ["#BC243C", "2002: True Red"], ["#C3447A", "2001: Fuchsia Rose"], ["#98B4D4", "2000: Cerulean Blue"]];
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