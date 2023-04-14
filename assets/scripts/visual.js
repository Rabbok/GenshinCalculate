const visual = {
    calculatorNavButtons: document.querySelectorAll('.calculator-nav__button'),
    calculatorBlocks: document.querySelectorAll('.changes-block'),
    changeBlock: document.querySelector('.character-change'),
    statsChangeButtons: document.querySelectorAll('.stats__button'),
    teamButtons: document.querySelectorAll('.open-button'),
    teamBlocks: document.querySelectorAll('.team-stats__block'),
    artifactBlocks: document.querySelectorAll('.artifact-set'),
    charcterButton: document.querySelectorAll('.character-weapon__button'),
    character: document.querySelectorAll(".character-change__character"),
    statsFrom: document.querySelectorAll('.stats-form'),
    artifactChangeButton: document.querySelectorAll('.art-change__button'),
    activeBlock: 0,
    activeTeamBlock: 0,
    activeArtBlock: 0
}

//Function for changing parameters in the stats block

const statsButtonHandler = (event) => {
    const parentElement = event.target.parentNode;
    parentElement.querySelectorAll('.stats__button').forEach((item) => {
        item.classList.remove('active-element');
    })
    parentElement.querySelectorAll('.art-change__button').forEach((item) => {
        item.classList.remove('active-element');
    })
    event.target.classList.add('active-element');
}

//Function for changing calculator blocks

const reset = () => {
    visual.calculatorBlocks.forEach(calculatorBlock => calculatorBlock.classList.remove('active-block'));
    visual.calculatorBlocks[visual.activeBlock].classList.add('active-block');
    visual.changeBlock.classList.remove('active-block');
}

//Functions for changing character

const characterChange = () => {
    visual.changeBlock.classList.add('active-block');
    visual.calculatorBlocks[visual.activeBlock].classList.remove('active-block');
}

const characterChangeReset = () => {
    visual.changeBlock.classList.remove('active-block');
    visual.calculatorBlocks[visual.activeBlock].classList.add('active-block');
}

//Functions for team stats

const teamStatsHendler = () => {
    visual.teamBlocks[visual.activeTeamBlock].classList.toggle('active-block');
}

//Function for changing artifact blocks

const artifactHandler = () => {
    visual.artifactBlocks[visual.activeArtBlock].classList.toggle('active-element');
    visual.artifactBlocks[visual.activeArtBlock].querySelectorAll('.artifact-set__description').forEach((deskBlock) => {
        deskBlock.classList.remove('active-element');
    });
}

visual.calculatorNavButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        visual.activeBlock = index;
        reset()
    })
})

visual.charcterButton.forEach((item) => {
    item.addEventListener('click', characterChange);
});

visual.character.forEach((item) => {
    item.addEventListener('click', characterChangeReset);
});

visual.character.forEach((item) => {
    item.addEventListener('submit', (event) => {
        event.preventDefault();
    });
})

visual.statsChangeButtons.forEach((item) => {
    item.addEventListener('click', statsButtonHandler);
})

visual.artifactChangeButton.forEach((item) => {
    item.addEventListener('click', statsButtonHandler);
})

visual.teamButtons.forEach((teamButton, index) => {
    teamButton.addEventListener('click', () => {
        visual.activeTeamBlock = index;
        teamStatsHendler();
    })
})

visual.artifactBlocks.forEach((artifactBlock, index) => {
    artifactBlock.addEventListener('click', () => {
        visual.activeArtBlock = index;
        artifactHandler();
    })
})