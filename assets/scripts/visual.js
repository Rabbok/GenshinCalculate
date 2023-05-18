const visual = () => {
    const calculatorNavButtons = document.querySelectorAll('.calculator-nav__button');
    const calculatorBlocks = document.querySelectorAll('.changes-block');
    const changeBlock = document.querySelector('.character-change');
    const statsChangeButtons = document.querySelectorAll('.stats__button');
    const teamButtons = document.querySelectorAll('.open-button');
    const teamBlocks = document.querySelectorAll('.team-stats__block');
    const artifactBlocks = document.querySelectorAll('.artifact-set');
    const charcterButton = document.querySelectorAll('.character-weapon__button');
    const character = document.querySelectorAll(".character-change__character");
    const artifactChangeButton = document.querySelectorAll('.art-change__button');
    const activeCharacter = document.querySelector('.character-img');
    let activeBlock = 0;
    let activeTeamBlock = 0;
    let activeArtBlock = 0;

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
        calculatorBlocks.forEach(calculatorBlock => calculatorBlock.classList.remove('active-block'));
        calculatorBlocks[activeBlock].classList.add('active-block');
        changeBlock.classList.remove('active-block');
    }

    //Functions for changing character

    const characterChange = () => {
        changeBlock.classList.add('active-block');
        calculatorBlocks[activeBlock].classList.remove('active-block');
    }

    const characterChangeReset = () => {
        changeBlock.classList.remove('active-block');
        calculatorBlocks[activeBlock].classList.add('active-block');
    }

    //Functions for team stats

    const teamStatsHendler = () => {
        teamBlocks[activeTeamBlock].classList.toggle('active-block');
    }

    //Function for changing artifact blocks

    const artifactHandler = () => {
        artifactBlocks[activeArtBlock].classList.toggle('active-element');
        artifactBlocks[activeArtBlock].querySelectorAll('.artifact-set__description').forEach((deskBlock) => {
            deskBlock.classList.remove('active-element');
        });
    }


    calculatorNavButtons.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeBlock = index;
            reset()
        })
    })

    charcterButton.forEach((item) => {
        item.addEventListener('click', characterChange);
    });

    character.forEach((item) => {
        item.addEventListener('click', (event) => {
            activeCharacter.src = 'assets/img/character-icons/' + event.target.parentNode.id + '-icon.png';
            characterChangeReset();
        });
    });

    character.forEach((item) => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    })

    statsChangeButtons.forEach((item) => {
        item.addEventListener('click', statsButtonHandler);
    })

    artifactChangeButton.forEach((item) => {
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
}

visual();