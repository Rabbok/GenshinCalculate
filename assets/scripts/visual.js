const visual_calculatorNavButtons = document.querySelectorAll('.calculator-nav__button');
const visual_calculatorBlocks = document.querySelectorAll('.changes-block');
const visual_changeBlock = document.querySelector('.character-change');
const visual_statsChangeButtons = document.querySelectorAll('.stats__button');
const visual_teamButtons = document.querySelectorAll('.open-button');
const visual_teamBlocks = document.querySelectorAll('.team-stats__block');
const visual_artifactBlocks = document.querySelectorAll('.artifact-set');
const visual_charcterButton = document.querySelectorAll('.character-weapon__button');
const visual_character = document.querySelectorAll(".character-change__character");
const visual_statsFrom = document.querySelectorAll('.stats-form');

let visual_activeBlock = 0;
let visual_activeTeamBlock = 0;
let visual_activeArtBlock = 0;

//Function for changing parameters in the stats block

const visual_statsButtonHandler = (event) => {
    const parentElement = event.target.parentNode;
    parentElement.querySelectorAll('.stats__button').forEach((item) => {
        item.classList.remove('active-element');
    })
    event.target.classList.add('active-element');
}

//Function for changing calculator blocks

const visual_reset = () => {
    visual_calculatorBlocks.forEach(calculatorBlock => calculatorBlock.classList.remove('active-block'));
    visual_calculatorBlocks[visual_activeBlock].classList.add('active-block');
    visual_changeBlock.classList.remove('active-block');
}

//Functions for changing character

const visual_characterChange = () => {
    visual_changeBlock.classList.add('active-block');
    visual_calculatorBlocks[visual_activeBlock].classList.remove('active-block');
}

const visual_characterChangeReset = () => {
    visual_changeBlock.classList.remove('active-block');
    visual_calculatorBlocks[visual_activeBlock].classList.add('active-block');
}

//Functions for team stats

const visual_teamStatsHendler = () => {
    visual_teamBlocks[visual_activeTeamBlock].classList.contains('active-block') ? visual_teamBlocks[visual_activeTeamBlock].classList.remove('active-block') : visual_teamBlocks[visual_activeTeamBlock].classList.add('active-block');
}

//Function for changing artifact blocks

const visual_artifactHandler = () => {
    visual_artifactBlocks[visual_activeArtBlock].classList.contains('active-element') ? visual_artifactBlocks[visual_activeArtBlock].classList.remove('active-element') : visual_artifactBlocks[visual_activeArtBlock].classList.add('active-element');
    visual_artifactBlocks[visual_activeArtBlock].querySelectorAll('.artifact-description').forEach((deskBlock) => {
        deskBlock.classList.remove('active-element');;
    });
}

visual_calculatorNavButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        visual_activeBlock = index;
        visual_reset()
    })
})

visual_charcterButton.forEach((item) => {
    item.addEventListener('click', visual_characterChange);
});

visual_character.forEach((item) => {
    item.addEventListener('click', visual_characterChangeReset);
});

visual_statsFrom.forEach((item) => {
    item.addEventListener('submit', (event) => {
        event.preventDefault();
    });
})

visual_statsChangeButtons.forEach((item) => {
    item.addEventListener('click', visual_statsButtonHandler);
})

visual_teamButtons.forEach((teamButton, index) => {
    teamButton.addEventListener('click', () => {
        visual_activeTeamBlock = index;
        visual_teamStatsHendler();
    })
})

visual_artifactBlocks.forEach((artifactBlock, index) => {
    artifactBlock.addEventListener('click', () => {
        visual_activeArtBlock = index;
        visual_artifactHandler();
    })
})
