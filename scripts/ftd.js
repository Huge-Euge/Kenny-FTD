/**
 * the overarching js file which imports js relating to actors, items, and tokens FINISH HTML FIRST / TODO
 * the init hook loads in the new character sheet for now, and that is all
 */

console.log("ftd | Initialising the ftd system implemented by Kenny Jensen");

import { FTDItemSheet } from "../module/sheets/FTDItemSheet";

Hooks.once("init", async function () {
    console.log("ftd | Initialising the ftd system implemented by Kenny Jensen");

    Items.unregisterSheet("core", ItemSheet)
    Items.registerSheet("Kenny-FTD", FTDItemSheet, { makeDefault: true })
});