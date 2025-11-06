// let startButton = document.querySelector(".start-button");

// startButton.addEventListener("click", function () {

//   h1.style.display = none;
  
// });

let startButton = document.querySelector(".start-button");
 let explanation = document.querySelector(".explanation");
let start = document.querySelector(".start");
let expimage = document.querySelector(".expimage");
let firstContinue = document.querySelector(".firstContinue");

startButton.addEventListener("click", function() {
    explanation.style.color = "violet";
    explanation.style.fontSize = "50px";
    explanation.innerHTML = "The moon hangs like a dying ember above Blackthorn Keep, its crumbling towers stabbing at the clouds. You awaken in a damp cell, the stench of rot and iron thick in your lungs. Chains rattle at your wrists, though one cuff has already snapped — old metal, rusted by centuries of forgotten prisoners. Shadows shift beyond the bars, whispering secrets you can almost understand. Somewhere in the distance, a bell tolls midnight. The castle stirs to life — or something close to it. You know one thing: if you don’t leave by dawn, you won’t leave at all.";
   start.style.display = "none";
    startButton.style.display = "none";
    expimage.style.display;
    expimage.style.alignSelf = "center";
    firstContinue.style.display;
    firstContinue.style.alignSelf = "center";
 });
