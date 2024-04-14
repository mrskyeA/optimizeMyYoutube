import { writable, type Writable } from "svelte/store";
export const flows:Writable<flowData[]> = writable([
    {
        name:"Title",
        icon:"airplay-sharp"
    },
    {
        name:"Title",
        icon:"airplay-sharp"
    },
    {
        name:"Title",
        icon:"airplay-sharp"
    }
]);
export const selectedFlow:Writable<flowData | null>  = writable(null);
export const apiKey = writable("");