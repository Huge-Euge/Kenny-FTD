/**
 * This defines the logic for handling a pc-sheet.html from the templates folder
 */

import { Helper } from "../Helper.js";

export class PCSheet extends ActorSheet {

    get template() {
        return `systems/ftd/templates/sheets/pc-sheet.hbs`;
    }

    /**
     * This method overrides the getData() method inherited from ItemSheet to do all the same things that the inherited method does,
     * but then it adds a config property to the object returned by the method.
     * @returns object 
     * @override
     */

    getData() {
        const baseData = super.getData();

        let sheetData = {
            owner: this.actor.isOwner,
            editable: this.isEditable,
            actor: baseData.actor,
            data: baseData.actor.data.data,
            config: CONFIG.ftd,
        };

        for (let i = 0; i < Helper.XP_LEVEL_THRESHOLDS.length; i++) {
            if (sheetData.data.XP < Helper.XP_LEVEL_THRESHOLDS[i]) {
                sheetData.data.level = i + 1;
                break;
            }
        }

        //Generate Proficiency Bonus based on level
        sheetData.data.proficiency = Helper.GetProficiency(sheetData.data.level);


        //Generate ability modifiers based on the ability score
        sheetData.data.strMod = Helper.GetAbilityMod(sheetData.data.abilities.str.value);
        sheetData.data.dexMod = Helper.GetAbilityMod(sheetData.data.abilities.dex.value);
        sheetData.data.conMod = Helper.GetAbilityMod(sheetData.data.abilities.con.value);
        sheetData.data.intMod = Helper.GetAbilityMod(sheetData.data.abilities.int.value);
        sheetData.data.wisMod = Helper.GetAbilityMod(sheetData.data.abilities.wis.value);
        sheetData.data.chaMod = Helper.GetAbilityMod(sheetData.data.abilities.cha.value);

        return sheetData;
    }

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["ftd", "sheet", "actor"],
            template: "systems/ftd/templates/sheets/pc-sheet.html",
            width: 600,
            height: 600,
            tabs: [{}]
        });
    }
}