//INITIALIZING JS VARIABLES AND DEFAULT VALUES

const header = document.getElementsByClassName('header');
const main = document.getElementsByClassName('main');
const settings = document.getElementsByClassName('settings');
const colorSelector = document.getElementById('colorSelector');
const colorButton = document.getElementById('colorButton');
const randomizeButton = document.getElementById('randomizeButton');
const gridLinesButton = document.getElementById('gridLinesButton');
const eraserButton = document.getElementById('eraserButton');
const clearButton = document.getElementById('clearButton');
const sizeValue = document.getElementById("sizeValue");
const sizeBar = document.getElementById('sizeBar');
const grid = document.getElementById("grid");
let gridPiece = document.getElementsByClassName('gridPiece');
const footer = document.getElementsByClassName('footer');
const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;


let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;



// *****FUNCTIONS****** //


//the function below is used to test event listeners etc.

function testIt(e) {
    console.log("hello");
}

//the function below sets the current color

function setCurrentColor(newColor) {
    currentColor = newColor
}

//the function below sets the current mode

function setCurrentMode(newMode) {
    pushButton(newMode)
    currentMode = newMode
}

//the function below sets the current grid size

function setCurrentSize(newSize) {
    currentSize = newSize
    sizeValue.innerText = `Current Size: ${newSize} x ${newSize}`
    grid.innerHTML = "";
    makeGrid(newSize);
}

//the function below builds a grid to specifications given

function makeGrid(size) {
    size = currentSize;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (c = 0; c < (size * size); c++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', applicator)
        grid.appendChild(cell).className = "gridPiece";
    };
}

//the function below sets the mode when the corresponding button is pushed

function pushButton(newMode) {
    if (currentMode === 'random') {
        randomizeButton.classList.remove('active');
    } else if (currentMode === 'color') {
        colorButton.classList.remove('active');
    } else if (currentMode === 'eraser') {
        eraserButton.classList.remove('active');
    }

    if (newMode === 'random') {
        randomizeButton.classList.add('active');
    } else if (newMode === 'color') {
        colorButton.classList.add('active');
    } else if (newMode === 'eraser') {
        eraserButton.classList.add('active');
    }
}

//the function below bases etch color on user selection

function applicator(e) {
    if (currentMode === 'random') {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }


}

//the function below toggles grid lines

function gridLineToggle() {

    for (let i = 0; i < gridPiece.length; i++) {

        gridPiece[i].classList.toggle('gridLineToggle');

    }

}

//the function below clears the current grid and recreates a new grid

function clearGrid() {

    grid.innerHTML = ""
    makeGrid(currentSize);

}
//the function below aligns grid size with size bar input

function setGridSize() {}

// *****EVENT LISTENERS***** //

sizeBar.onchange = (e) => setCurrentSize(e.target.value);
colorSelector.onchange = (e) => setCurrentColor(e.target.value);
colorButton.addEventListener('click', () => { setCurrentMode('color') });
randomizeButton.addEventListener('click', () => { setCurrentMode('random') });
eraserButton.addEventListener('click', () => { setCurrentMode('eraser') });
clearButton.addEventListener('click', () => { clearGrid() });
gridLinesButton.addEventListener('click', () => { gridLineToggle() });


//SETS THE GAME UP WHEN THE WINDOW LOADS
window.onload = () => {
    makeGrid(DEFAULT_SIZE);
    setCurrentMode('color');
}