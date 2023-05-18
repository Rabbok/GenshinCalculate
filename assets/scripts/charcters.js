const charactersList = () => {
    class Character {
        constructor(element, baseAtack, baseHP, baseDef, atackScale, elementalSkillScale, ultimateScale, firstPassive, secondPassive) {
            this._element = element;
            this._baseAtack = baseAtack;
            this._baseHP = baseHP;
            this._baseDef = baseDef;
            this._atackScale = atackScale;
            this._elementalSkillScale = elementalSkillScale;
            this._ultimateScale = ultimateScale;
            this._firstPassive = firstPassive;
            this._secondPassive = secondPassive;
        }

        get element() {
            return this._element
        }

        get baseAtack() {
            return this._baseAtack
        }

        get baseHP() {
            return this._baseHP
        }

        get baseDef() {
            return this._baseDef
        }

        get atackScale() {
            return this._atackScale
        }

        get elementalSkillScale() {
            return this._elementalSkillScale
        }

        get ultimateScale() {
            return this._ultimateScale
        }

        get firstPassive() {
            return this._firstPassive
        }

        get secondPassive() {
            return this._secondPassive
        }
    }

    class Passive {
        constructor(bonus, bonusType, condition) {
            this._bonus = bonus;
            this._bonusType = bonusType;
            this._condition = condition;
        }
    }
}