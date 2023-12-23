let gridContainer = document.querySelector('.gridContainer');
let gridElement;
let gridRow;


createGridRow();
//create16GridRow();

function createGridElement() {
    gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    //test
    gridElement.textContent = 'ciao';
    gridContainer.appendChild(gridElement);
};

function createGridRow() {
    gridRow = document.createElement('div');
    gridRow.classList.add ('gridRow');
    for (let i = 0; i < 16; i++) {
        createGridElement();
        gridRow.appendChild(gridElement);
    };
};

function create16GridRow() {
    for (let i = 0; i<16; i++) {
        createGridRow();
    };
};

