var lights = ['red', 'yellow', 'green'];
var currentLightIndex = 0;
var intervalId;

function changeColor(color) {
    clearInterval(intervalId); 
    selectLight(color);
}

function selectLight(color) {
    if (currentLightIndex >= 0 && currentLightIndex < lights.length) {
        var previousLight = document.getElementById(lights[currentLightIndex]);
        previousLight.style.backgroundColor = '';
    }

    var currentLight = document.getElementById(color);
    currentLight.style.backgroundColor = color;

    currentLightIndex = lights.indexOf(color);
}

function autoChangeColor() {
    intervalId = setInterval(function() {
        var nextLightIndex = (currentLightIndex + 1) % lights.length;
        var nextLight = lights[nextLightIndex];
        selectLight(nextLight);
    }, 1000);
}
autoChangeColor();