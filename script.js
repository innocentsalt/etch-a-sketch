function drawGrid(size) {
    const grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const box = document.createElement('div');
            grid.appendChild(box);
        }
    }
}

function addMouseoverListeners() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((box) => {
        box.addEventListener('mouseover', (e) => {
            if (randomColor) {
                e.target.style.backgroundColor = generateRandomColor();
            } else {
                e.target.style.backgroundColor = 'black';
            }
        });
    });
}

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function changeSize() {
    const grid = document.querySelector('.grid');
    let size = window.prompt('grid size please\n("sky is the limit", if you wanna crash)', 16);
    if (size < 0 || isNaN(parseInt(size))) return;
    grid.innerHTML = '';
    drawGrid(size);
}

function changeColor() {
    const colorStyle = document.querySelector('.color-style');
    if (colorStyle.innerText === 'Black') {
        colorStyle.innerText = 'Random Color';
        randomColor = false;
    } else {
        colorStyle.innerText = 'Black';
        randomColor = true;
    }
}

let randomColor = true;

drawGrid(16);
addMouseoverListeners();

const resizer = document.querySelector('.change-size');
resizer.addEventListener('click', changeSize);

const colorStyle = document.querySelector('.color-style');
colorStyle.addEventListener('click', changeColor);
