let gridContainer = document.querySelector('.gridContainer');
let gridElement;

let gridRow;
let selectedColor = 'blue';
let gridSize = 16;

let resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', setGridSize);

let blueColor = document.querySelector('.blue');
blueColor.addEventListener('click', () => {selectedColor = 'blue'});
let redColor = document.querySelector('.red');
redColor.addEventListener('click', () => {selectedColor = 'red'});
let greenColor = document.querySelector('.green');
greenColor.addEventListener('click', () => {selectedColor = 'green'});
let rainbowColor = document.querySelector('.rainbow');
rainbowColor.addEventListener('click', () => {selectedColor = 'rainbow'});
let pencilColor = document.querySelector('.pencil');
pencilColor.addEventListener('click', () => {selectedColor = 'pencil'});
let ereaser = document.querySelector('.ereaser');
ereaser.addEventListener('click', () => {selectedColor = 'ereaser'});

let drawing = false;
window.addEventListener("pointerdown", (e) => {
    e.preventDefault();                         //prevent dragging which breaks the drawing
    drawing = true;
});
window.addEventListener("pointerup", (e) => {
    e.preventDefault();
    drawing = false;
});

create_n_GridRaw(gridSize);

function createRow (gridSize) {
    for (let x = 0; x < gridSize; x++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridRow.appendChild(gridElement);
        gridContainer.appendChild(gridRow);

    };
};

function create_n_GridRaw (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        createRow(gridSize);
        
    };
    createCellsListeners(selectedColor);
};

function createCellsListeners () {
    let cellToColor = document.querySelectorAll('.gridElement');
    cellToColor = Array.from(cellToColor);
    for (let i = 0; i < cellToColor.length; i++) {
        cellToColor[i].addEventListener('mouseover', function(e) {
            if (drawing) {
                if (selectedColor == 'blue') {
                    cellToColor[i].style.opacity = '1';
                    cellToColor[i].style.backgroundColor = 'blue';
                }
                else if (selectedColor == 'red'){
                    cellToColor[i].style.opacity = '1';
                    cellToColor[i].style.backgroundColor = 'red';
                }
                else if (selectedColor == 'green') {
                    cellToColor[i].style.opacity = '1';
                    cellToColor[i].style.backgroundColor = 'green';
                }
                else if (selectedColor == 'rainbow') {
                    cellToColor[i].style.opacity = '1';
                    let a = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    let c = Math.floor(Math.random() * 256);
                    cellToColor[i].style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
                }
                else if (selectedColor == 'ereaser') {
                    cellToColor[i].style.opacity = '1';
                    cellToColor[i].style.backgroundColor = 'white';
                }
                else if (selectedColor == 'pencil') {
                    let currentColor = cellToColor[i].style.backgroundColor;
                    let currentOpacity = Number(cellToColor[i].style.opacity);
                    if (currentColor == 'black') {
                        if (currentOpacity < 1) {
                            cellToColor[i].style.opacity = currentOpacity + 0.1;
                        }
                    }
                        else if (currentColor != 'black') {
                            cellToColor[i].style.backgroundColor = 'black';
                            cellToColor[i].style.opacity = '0.1';
                        }
                    }
                }
            }
        );
    }
};


function setGridSize(gridElementsToRemove) {
    gridSize = parseInt( prompt('Enter a number between 4 and 100', '16'));
    if (gridSize > 100 || gridSize < 4) {
        alert('Invalid entry')
    }
    else {
        gridContainer.innerHTML = '';       //non so bene sta roba//
        create_n_GridRaw(gridSize);
    }
};

