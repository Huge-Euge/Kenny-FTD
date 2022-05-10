/**
 * This defines the logic for handling a pc-sheet.html from the templates folder
 */

export class PCSheet extends ActorSheet {

    get template() {
        return `systems/ftd/templates/sheets/pc-sheet.html`;
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
            config: CONFIG.ftd
        };
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