const container = document.querySelector('.container');
const resetButton = document.querySelector('.new-grid-button');

resetButton.addEventListener('click', () => {
    let numberOfBoxes = parseInt(prompt('How many pixels per side do you want?'));
    do {
        alert('More than 100 boxes is UNFEASIBLE');
        numberOfBoxes = parseInt(prompt('How many pixels per side do you want?'));
    } while (numberOfBoxes > 100);
    console.log();

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(i = 0; i < (numberOfBoxes * numberOfBoxes) + numberOfBoxes; i++){
        const div = document.createElement('div');
        container.appendChild(div);
        document.querySelectorAll(`.container>div:nth-child(${numberOfBoxes + 1}n + 1)`).forEach((item) => {
            item.setAttribute('id', 'sketch-item');
        })
    }
})


for(i = 0; i < 256 + 16; i++){
    const div = document.createElement('div');
    container.appendChild(div);
}

document.querySelectorAll(`.container>div:nth-child(17n + 1)`).forEach((item) => {
    item.setAttribute('id', 'sketch-item');
})
