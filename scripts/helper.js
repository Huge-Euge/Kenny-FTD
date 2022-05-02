export const XP_LEVEL_THRESHOLDS = [0, 2500, 5000, 10000, 20000, 30000, 50000, 75000, 100000];

export class helper {
    /**
     * 
     * @param {number} abilityScore - The character's Ability Score
     * @returns {number}
     */
    static GetAbilityMod(abilityScore) {
        return Math.floor(abilityScore - 10);
    }

    static GetProficiency(level) {
        return (Math.ceil(level / 4) + 1)
    }
}