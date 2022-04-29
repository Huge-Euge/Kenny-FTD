/**
 * the overarching js file which imports js relating to actors, items, and tokens FINISH HTML FIRST / TODO
 * the init hook loads in the new character sheet for now, and that is all
 */

import { PCSheet } from "./pc-sheet";

Hooks.once("init", async function(){
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("core", PCSheet, { makeDefault: true });
    console.log("ass");
});