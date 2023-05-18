const weaponsList = () => {
    class Weapon {
        constructor(baseAtack, mainStat, passive, passiveActive) {
            this._baseAtack = baseAtack;
            this._mainStat = mainStat;
            this._passive = passive;
            this._passiveActive = passiveActive;
        }
        
        get baseAtack() {
            return this._baseAtack
        }

        get mainStat() {
            return this._mainStat
        }

        get passive() {
            return this._passive
        }

        get passiveActive() {
            return this._passiveActive
        }
    }

    const aqua = new Weapon(542, 88.2, [16, 20], [false, true])
}

export default weaponsList;