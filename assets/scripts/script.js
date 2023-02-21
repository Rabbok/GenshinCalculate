const calculatorNavButtons = document.querySelectorAll('.calculator-nav__button');
const calculatorBlocks = document.querySelectorAll('.changes-block');

let activeBlock = 0;

const reset = () => {
    calculatorBlocks.forEach(calculatorBlock => calculatorBlock.style.display = 'none');
    calculatorBlocks[activeBlock].style.display = 'grid';
}

calculatorNavButtons.forEach((calculatorNavButton, index) => {
    calculatorNavButton.addEventListener('click', () => {
        activeBlock = index;
        reset();
    });
});