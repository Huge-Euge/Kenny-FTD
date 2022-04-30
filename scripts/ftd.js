/**
 * the overarching js file which imports js relating to actors, items, and tokens FINISH HTML FIRST / TODO
 * the init hook loads in the new character sheet for now, and that is all
 */

// import { PCSheet } from "./pc-sheet";

Hooks.once("init", async function(){
    // Actors.unregisterSheet("core", ActorSheet);
    // Actors.registerSheet("core", PCSheet, { makeDefault: true });

    const template_file = "../templates/actor-sheet.html";
    const template_data = { header: "Handlebars header text.",
                        content: "<em>Handlebars</em> <i>content</i>.",
                        footer: "Handlebars footer text."};
    const rendered_html = await renderTemplate(template_file, template_data);
    let d = new Dialog({
        title: "MyDialogTitle",
        content: rendered_html,
        buttons: {
            toggle: {
                icon: '<i class="fas fa-check"></i>',
                label: "Okay",
                callback: () => console.log("Okay")
            },
        },
        default: "toggle",
        close: html => {
            console.log(html);
        },
    });
    d.render(true);
});