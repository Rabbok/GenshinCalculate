const stats = () => {
  const statsElements = {
    statsChangeButtons: document.querySelectorAll('.stats__button'),
    artifactBlocks: document.querySelectorAll('.artifact-set'),
    characters: document.querySelectorAll(".character-change__character"),
    artifactChangeButton: document.querySelectorAll('.art-change__button'),
    lvlCharacterInput: document.getElementById('lvl-c'),
    lvlWeaponInput: document.getElementById('lvl-w'),
    artifactInputs: document.querySelectorAll('.stats-form__input'),
    refinementButtons: document.querySelectorAll('.refinement__button'),
    circletButtons: document.querySelectorAll('.circlet-button'),
    gobletButtons: document.querySelectorAll('.goblet-button'),
    sandsButtons: document.querySelectorAll('.sands-button'),
    testButton: document.getElementById('final-atk')
  };

  const statsParametrs = {
    lvlCharacter: 0,
    lvlWeapon: 0,
    refinement: 0,
    artifactStats: {
      'artifacts-atk': 0,
      'artifacts-def': 0,
      'artifacts-hp': 0,
      'artifacts-em': 0,
      'artifacts-er': 0,
      'artifacts-cr': 0,
      'artifacts-cd': 0
    },
    artifactType: {
      circlet: 'crit',
      goblet: 'ed',
      sands: 'atk'
    }
  };

  };

  const calculator = () => {
    const baseAtack = 334.85 + 542;
    const enemyLvl = 90;
    const enemyResist = 0.9;
    const scale = 391.68 / 100;
    const finallyStats = {
      tATK: baseAtack + statsParametrs.artifactStats['artifacts-atk'],
      affix: (0 + 46.6 + 35 + 20) / 100,
      crit: (88.2 + 50 + 38.4 + statsParametrs.artifactStats['artifacts-cd']) / 100,
      enemyDef: (statsParametrs.lvlCharacter + 100) / ((1 - 0) * (enemyLvl + 100) + statsParametrs.lvlCharacter + 100),
      enemyResists: enemyResist
    };
  
    console.log(finallyStats.tATK)
    const damage = Math.floor((finallyStats.tATK * scale * (1 + finallyStats.affix) * (1 + finallyStats.crit) * finallyStats.enemyDef * finallyStats.enemyResists));
    console.log(finallyStats.enemyDef)
    return {
      finallyStats,
      damage
    };
  };

  const artifactInputHandler = (event) => {
    const id = event.target.id
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      if (value >= 0 & value <= 10000) {
        statsParametrs.artifactStats[id] = value;
      } else {
        event.target.value = statsParametrs.artifactStats[id];
      }
    } else {
      event.target.value = null;
    }
  };

  const lvlCharacterHandler = (event) => {
    let previousValue = statsParametrs.lvlCharacter || 1;
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      if (value >= 1 & value <= 90) {
        statsParametrs.lvlCharacter = value;
      } else {
        event.target.value = previousValue;
      }
    } else {
      event.target.value = '';
    }
  };

  const refinementHandler = (event) => {
    statsParametrs.refinement = event.target.value;
  };

  const circletHandler = (event) => {
    statsParametrs.artifactType.circlet = event.target.value;
    console.log(statsParametrs.artifactType.circlet)
  };

  const gobletHandler = (event) => {
    statsParametrs.artifactType.goblet = event.target.value;
  };

  const sandsHandler = (event) => {
    statsParametrs.artifactType.sands = event.target.value; y
  };

  const lvlWeaponHandler = (event) => {
    let previousValue = statsParametrs.lvlWeapon || 1;
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      if (value >= 1 & value <= 90) {
        statsParametrs.lvlWeapon = value;
      } else {
        event.target.value = previousValue;
      }
    } else {
      event.target.value = '';
    }
  };

  const characterHandler = (event) => {
    statsCharacter.character = event.target.parentNode.id;
  };

  statsElements.artifactInputs.forEach((artifactInput) => {
    artifactInput.addEventListener('change', () => {
      const {finallyStats, damage} = calculator();
      statsElements.testButton.value = damage; 
    })
  })

  statsElements.artifactInputs.forEach(artifactInput => {
    artifactInput.addEventListener('input', artifactInputHandler);
  });

  statsElements.artifactInputs.forEach(artifactInput => {
    artifactInput.addEventListener('input', artifactInputHandler);
  });

  statsElements.refinementButtons.forEach((refinementButton) => {
    refinementButton.addEventListener('click', refinementHandler);
  });

  statsElements.circletButtons.forEach((refinementButton) => {
    refinementButton.addEventListener('click', circletHandler);
  });

  statsElements.gobletButtons.forEach((refinementButton) => {
    refinementButton.addEventListener('click', gobletHandler);
  });

  statsElements.sandsButtons.forEach((refinementButton) => {
    refinementButton.addEventListener('click', sandsHandler);
  });

  statsElements.lvlCharacterInput.addEventListener('input', lvlCharacterHandler);
  statsElements.lvlWeaponInput.addEventListener('input', lvlWeaponHandler);

  statsElements.characters.forEach(character => {
    character.addEventListener('click', characterHandler);
  });

  return statsParametrs;
};

const statsResults = stats();
export default statsResults;