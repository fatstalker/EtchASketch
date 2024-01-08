let gridContainer = document.querySelector('.gridContainer');
let gridElement;
let gridRow;

create16xRow();

function createRow () {
    for (let x = 0; x < 16; x++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridElement.addEventListener('click', colorElement);
        gridRow.appendChild(gridElement);
        gridContainer.appendChild(gridRow);     //temporary. set breackpoint at line 7 to follow elements creation

    };
};

function create16xRow () {
    for (let i = 0; i < 16; i++) {
        gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        createRow();
    };
    colorElement(); 

};

function colorElement () {
    gridElement.classList.add('color');
};

