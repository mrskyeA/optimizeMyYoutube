import { writable, type Writable } from "svelte/store";
import { getContext, setContext } from "svelte";
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
export function setApiKey(){
    let apiKey = writable("");
    setContext("apiKey","");
}
export function getApiKey(): Writable<string>{
    return getContext("apiKey");
}
export function setFlows(){
    let flows:Writable<flowData[]> = writable([
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
    setContext("flows",flows);
}
export function getFlows(){
    return getContext("flows");
}