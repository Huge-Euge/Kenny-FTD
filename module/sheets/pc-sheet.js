/**
 * This defines the logic for handling a pc-sheet.html from the templates folder
 */

export class PCSheet extends ActorSheet {

    get template() {
        return `systems/ftd/templates/sheets/${this.actor.data.type}-sheet.html`;
    }

    /**
     * This method overrides the getData() method inherited from ItemSheet to do all the same things that the inherited method does,
     * but then it adds a config property to the object returned by the method.
     * @returns 
     */
    getData() {
        const data = super.getData();

        data.config = CONFIG.ftd;

        return data;
    }
}