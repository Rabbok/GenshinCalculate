const calculatorNavButtons = document.querySelectorAll('.calculator-nav__button');
const calculatorBlocks = document.querySelectorAll('.changes-block');
const changeBlock = document.querySelector('.character-change')
const statsChangeButtons = document.querySelectorAll('.stats__button')

let activeBlock = 0;
const activeButton = 0;

const statsButtonHandler = (event) => {
    const parentElement = event.target.parentNode;
    parentElement.querySelectorAll('.stats__button').forEach((item) => {
        item.style.backgroundColor = 'var(--gray)'
    })
    event.target.style.backgroundColor = 'var(--green)';
}

const reset = () => {
    calculatorBlocks.forEach(calculatorBlock => calculatorBlock.style.display = 'none');
    calculatorBlocks[activeBlock].style.display = 'grid';
    changeBlock.style.display = 'none';
}

calculatorNavButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeBlock = index;
        reset();
    });
});

const characterChange = () => {
    changeBlock.style.display = 'grid';
    calculatorBlocks[activeBlock].style.display = 'none';
}

const characterChangeReset = () => {
    changeBlock.style.display = 'none';
    calculatorBlocks[activeBlock].style.display = 'grid';
}


const charcterButton = document.querySelectorAll('.character-weapon__button');
charcterButton.forEach((item) => {
    item.addEventListener('click', characterChange);
});

const character = document.querySelectorAll(".character-change__character");
character.forEach((item) => {
    item.addEventListener('click', characterChangeReset);
});

document.querySelectorAll('.stats__form').forEach((item) => {
    item.addEventListener('submit', (event) => {
        event.preventDefault();
    });
})

statsChangeButtons.forEach((item) => {
    item.addEventListener('click', statsButtonHandler)
})