import { writable, type Writable } from "svelte/store";
export const flows:Writable<flowData[]> = writable([
    {
        name:"Title",
        icon:"airplay-sharp",
        songs:[
            {
                title:"Take It Off",
                creator:"kesha",
                thumbnailUrl:"https://i.ytimg.com/vi/GgGPuuGNPAE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC53yjMrVtkhcBJRdvh86Zc5VJklw",
                songUrl:""
            }
        ]
    },
    {
        name:"Title",
        icon:"airplay-sharp",
        songs:[
            {
                title:"Take It Off",
                creator:"kesha",
                thumbnailUrl:"https://i.ytimg.com/vi/GgGPuuGNPAE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC53yjMrVtkhcBJRdvh86Zc5VJklw",
                songUrl:""
            }
        ]
    },
    {
        name:"Title",
        icon:"airplay-sharp",
        songs:[
            {
                title:"Take It Off",
                creator:"kesha",
                thumbnailUrl:"https://i.ytimg.com/vi/GgGPuuGNPAE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC53yjMrVtkhcBJRdvh86Zc5VJklw",
                songUrl:""
            }
        ]
    }
]);
export const selectedFlow:Writable<flowData | null>  = writable(null);
export const apiKey = writable("");