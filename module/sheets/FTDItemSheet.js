export class FTDItemSheet extends ItemSheet {
    get template() {
        return `systems/ftd/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    /**
     * This method overrides the getData() method inherited from ItemSheet to do all the same things that the inherited method does,
     * but then it adds a config property to the object returned by the method.
     * @returns 
     */
    getData() {
        const baseData = super.getData();

        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.ftd
        };
        return sheetData;

    }
}