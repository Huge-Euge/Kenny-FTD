export class FTDItemSheet extends ItemSheet {
    get template() {
        return `systems/Kenny-FTD/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}