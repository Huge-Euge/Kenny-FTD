/**
 * the overarching js file which imports js relating to actors, items, and tokens FINISH HTML FIRST / TODO
 * the init hook loads in the new character sheet for now, and that is all
 */

//this import { ftd } statement refers to the object containing all of the localised strings
import { ftd } from "./module/config.js";
import { FTDItemSheet } from "./module/sheets/FTDItemSheet.js";

Hooks.once("init", async function () {
    console.log("ftd | Initialising the ftd system implemented by Kenny J");

    /**
     * This creates a property of the global CONFIG object named ftd which refers to ftd from config.js  
     * https://foundryvtt.com/api/global.html#CONFIG for info 
     */
    CONFIG.ftd = ftd;

    Items.unregisterSheet("core", ItemSheet)
    Items.registerSheet("ftd", FTDItemSheet, { makeDefault: true })
});