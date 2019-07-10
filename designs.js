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
var colors = ['#dc3545', '#ffc107', '#007bff', '#17a2b8', '#28a745', '#6c757d', '#343a40', '#ffffff']

var palette = document.getElementById('palette');
var colorItem = palette.getElementsByTagName('div');

for (let i = 0; i < colorItem.length; i++) {
    colorItem[i].addEventListener('click', function () {
        document.getElementById('colorPicker').value = colors[i];
    });
};


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
