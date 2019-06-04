// Select color input
var color = document.getElementById('colorPicker');

// Select size input
var sizePicker = document.getElementById('sizePicker');

// Create a starting grid
var canvas = document.getElementById('pixelCanvas');
var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;
makeGrid(height, width);


// Picking a color from the quick palette
var color1 = document.getElementById('swatchRed');
color1.addEventListener('click', function (event) {
    document.getElementById("colorPicker").value = "#dc3545";
});

var color2 = document.getElementById('swatchYellow');
color2.addEventListener('click', function (event) {
    document.getElementById("colorPicker").value = "#ffc107";
});

var color3 = document.getElementById('swatchBlue');
color3.addEventListener('click', function (event) {
    document.getElementById("colorPicker").value = "#007bff";
});

var color4 = document.getElementById('swatchTeal');
color4.addEventListener('click', function (event) {
    document.getElementById("colorPicker").value = "#17a2b8";
});

var color5 = document.getElementById('swatchGreen');
color5.addEventListener('click', function (event) {
    document.getElementById("colorPicker").value = "#28a745";
});

var color6 = document.getElementById('swatchGrey');
color6.addEventListener('click', function (event) {
    document.getElementById("colorPicker").value = "#6c757d";
});

var color7 = document.getElementById('swatchDark');
color7.addEventListener('click', function (event) {
    document.getElementById("colorPicker").value = "#343a40";
});

var color8 = document.getElementById('swatchWhite');
color8.addEventListener('click', function (event) {
    document.getElementById("colorPicker").value = "#ffffff";
});


// Get the canvas size once the user has clicked submit
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});


// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    for (let x = 0; x < height; x++) {
        let row = canvas.insertRow(x);
        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', function (event) {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
