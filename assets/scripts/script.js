const calculatorNavButtons = document.querySelectorAll('.calculator-nav__button');
const calculatorBlocks = document.querySelectorAll('.changes-block');
const changeBlock = document.querySelector('.character-change');
const statsChangeButtons = document.querySelectorAll('.stats__button');
const teamButtons = document.querySelectorAll('.open-button');
const teamBlocks = document.querySelectorAll('.team-stats__block');
const artifactBlocks = document.querySelectorAll('.artifact-set');

let activeBlock = 0;
let activeTeamBlock = 0;
let activeArtBlock = 0;

//Function for changing parameters in the stats block

const statsButtonHandler = (event) => {
    const parentElement = event.target.parentNode;
    parentElement.querySelectorAll('.stats__button').forEach((item) => {
        item.style.backgroundColor = 'var(--gray)';
    })
    event.target.style.backgroundColor = 'var(--green)';
}

//Function for changing calculator blocks

const reset = () => {
    calculatorBlocks.forEach(calculatorBlock => calculatorBlock.style.display = 'none');
    calculatorBlocks[activeBlock].style.display = 'grid';
    changeBlock.style.display = 'none';
}

//Functions for changing character

const characterChange = (event) => {
    changeBlock.style.display = 'grid';
    calculatorBlocks[activeBlock].style.display = 'none';
}

const characterChangeReset = () => {
    changeBlock.style.display = 'none';
    calculatorBlocks[activeBlock].style.display = 'grid';
}

//Functions for team stats

const teamStatsHendler = () => {
    teamBlocks[activeTeamBlock].style.display === 'block' ? teamBlocks[activeTeamBlock].style.display = 'none' : teamBlocks[activeTeamBlock].style.display = 'block';
}

//Function for changing artifact blocks

const artifactHandler = (event) => {
    artifactBlocks[activeArtBlock].style.backgroundColor === 'var(--green)' ? artifactBlocks[activeArtBlock].style.backgroundColor = "var(--dark-gray)" : artifactBlocks[activeArtBlock].style.backgroundColor = 'var(--green)'
    artifactBlocks[activeArtBlock].querySelectorAll('.artifact-description').forEach((deskBlock) => {
        deskBlock.style.backgroundColor = "var(--dark-gray)";
    });
    artifactBlocks[activeArtBlock].querySelectorAll('.artifact-img').forEach((deskBlock) => {
        deskBlock.style.backgroundColor = "var(--dark-gray)";
    });
    console.log(artifactBlocks[activeArtBlock].querySelectorAll('.artifact-description__paragraph'))
}

calculatorNavButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeBlock = index;
        reset()
    })
})

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
    item.addEventListener('click', statsButtonHandler);
})

teamButtons.forEach((teamButton, index) => {
    teamButton.addEventListener('click', () => {
        activeTeamBlock = index;
        teamStatsHendler();
    })
})

artifactBlocks.forEach((artifactBlock, index) => {
    artifactBlock.addEventListener('click', () => {
        activeArtBlock = index;
        artifactHandler();
    })
})
