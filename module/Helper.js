export class Helper {

    /**
     * 
     * @param {number} abilityScore - The character's Ability Score
     * @returns {number}
     */
    static GetAbilityMod(abilityScore) {
        return Math.floor((abilityScore - 10)/2);
    }

    static GetProficiency(level) {
        return (Math.ceil(level / 4) + 1)
    }

    static XP_LEVEL_THRESHOLDS = [2500, 5000, 10000, 20000, 30000, 50000, 75000, 100000, Infinity];
}