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

var slider1 = document.getElementById("sound-range1");
var output1 = document.getElementById("value1");
output1.innerHTML = slider1.value;
let audio1 = new Audio('/audios/Rain(30).mp3');
audio1.play();
audio1.volume = 0;

audio1.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);




slider1.oninput = function() {
  output1.innerHTML = this.value;
  audio1.volume = (this.value/100);
}



var slider2 = document.getElementById("sound-range2");
var output2 = document.getElementById("value2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
  //audio1.volume = (this.value/100);
}