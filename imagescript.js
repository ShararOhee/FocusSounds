let switcher = document.getElementById("switcher");

switcher.addEventListener('click', () =>{
        const images = [
        "url(/images/CityRain.gif)",
        "url(/images/sceneryrain.gif)",
        "url(/images/rain-anime-rain.gif)",
        "url(/images/drops.gif)",
        "url(/images/rainy.gif)",
        "url(/images/garden.gif)",
        ]

        const bg = images[Math.floor(Math.random()*images.length)];
        document.getElementById("main").style.backgroundImage = bg;
        document.getElementById("nav").style.backgroundImage = bg;
        console.log('Background Changed');

});


////////////////////////////

var slider1 = document.getElementById("sound-range1");
var output1 = document.getElementById("value1");
output1.innerHTML = slider1.value;
let audio1 = new Audio('/audios/Rain(30).mp3');

var check1 = document.getElementById("soundon1");

check1.addEventListener('change', e => {
  if(e.target.checked === true) {
    console.log("Checkbox is checked - boolean value: ", e.target.checked)
    audio1.play();
    audio1.volume = slider1.value;
  }
if(e.target.checked === false) {
    console.log("Checkbox is not checked - boolean value: ", e.target.checked)
    audio1.pause();
    audio1.currentTime = 0;
  }
});



audio1.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);




slider1.oninput = function() {
  if(check1.checked===true){
  output1.innerHTML = this.value;
  audio1.volume = (this.value/100);
  } else{
    output1.innerHTML = 0;
    audio1.volume = 0;
  }
}



//////////////////////////////////////

var slider2 = document.getElementById("sound-range2");
var output2 = document.getElementById("value2");
output2.innerHTML = slider2.value;
let audio2 = new Audio('/audios/Thunder(18s).mp3');

var check2 = document.getElementById("soundon2");

check2.addEventListener('change', e => {
  if(e.target.checked === true) {
    console.log("Checkbox is checked - boolean value: ", e.target.checked)
    audio2.play();
    audio2.volume = slider2.value;
  }
if(e.target.checked === false) {
    console.log("Checkbox is not checked - boolean value: ", e.target.checked)
    audio2.pause();
    audio2.currentTime = 0;
  }
});



audio2.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);




slider2.oninput = function() {
  if(check2.checked===true){
  output2.innerHTML = this.value;
  audio2.volume = (this.value/100);
  } else{
    output2.innerHTML = 0;
    audio2.volume = 0;
  }
}

///////////////////////////////

var slider3 = document.getElementById("sound-range3");
var output3 = document.getElementById("value3");
output3.innerHTML = slider3.value;
let audio3 = new Audio('/audios/Wind.mp3');


var check3 = document.getElementById("soundon3");

check3.addEventListener('change', e => {
  if(e.target.checked === true) {
    console.log("Checkbox is checked - boolean value: ", e.target.checked)
    audio3.play();
    audio3.volume = slider3.value;
  }
if(e.target.checked === false) {
    console.log("Checkbox is not checked - boolean value: ", e.target.checked)
    audio3.pause();
    audio3.currentTime = 0;
  }
});



audio3.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);




slider3.oninput = function() {
  if(check3.checked===true){
  output3.innerHTML = this.value;
  audio3.volume = (this.value/100);
  } else{
    output3.innerHTML = 0;
    audio3.volume = 0;
  }
}

/////////////////////////////////////////////////

var slider4 = document.getElementById("sound-range4");
var output4 = document.getElementById("value4");
output4.innerHTML = slider4.value;
let audio4 = new Audio('/audios/Wind.mp3');


var check4 = document.getElementById("soundon4");

check4.addEventListener('change', e => {
  if(e.target.checked === true) {
    console.log("Checkbox is checked - boolean value: ", e.target.checked)
    audio4.play();
    audio4.volume = slider4.value;
  }
if(e.target.checked === false) {
    console.log("Checkbox is not checked - boolean value: ", e.target.checked)
    audio4.pause();
    audio4.currentTime = 0;
  }
});



audio4.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);




slider4.oninput = function() {
  if(check4.checked===true){
  output4.innerHTML = this.value;
  audio4.volume = (this.value/100);
  } else{
    output4.innerHTML = 0;
    audio4.volume = 0;
  }
}

////////////////////////////////////////

var slider5 = document.getElementById("sound-range5");
var output5 = document.getElementById("value5");
output5.innerHTML = slider5.value;
let audio5 = new Audio('/audios/Wind.mp3');

var check5 = document.getElementById("soundon5");

check5.addEventListener('change', e => {
  if(e.target.checked === true) {
    console.log("Checkbox is checked - boolean value: ", e.target.checked)
    audio5.play();
    audio5.volume = slider5.value;
  }
if(e.target.checked === false) {
    console.log("Checkbox is not checked - boolean value: ", e.target.checked)
    audio5.pause();
    audio5.currentTime = 0;
  }
});



audio5.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);




slider5.oninput = function() {
  if(check5.checked===true){
  output5.innerHTML = this.value;
  audio5.volume = (this.value/100);
  } else{
    output5.innerHTML = 0;
    audio5.volume = 0;
  }
}


///////////////////////////////////////

var slider6 = document.getElementById("sound-range6");
var output6 = document.getElementById("value6");
output6.innerHTML = slider6.value;
let audio6 = new Audio('/audios/Wind.mp3');

var check6 = document.getElementById("soundon6");

check6.addEventListener('change', e => {
  if(e.target.checked === true) {
    console.log("Checkbox is checked - boolean value: ", e.target.checked)
    audio6.play();
    audio6.volume = slider6.value;
  }
if(e.target.checked === false) {
    console.log("Checkbox is not checked - boolean value: ", e.target.checked)
    audio6.pause();
    audio6.currentTime = 0;
  }
});



audio6.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);




slider6.oninput = function() {
  if(check6.checked===true){
  output6.innerHTML = this.value;
  audio6.volume = (this.value/100);
  } else{
    output6.innerHTML = 0;
    audio6.volume = 0;
  }
}

//////////////////////////////////////////
