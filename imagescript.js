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

});

