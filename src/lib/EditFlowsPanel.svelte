<script>
	import FlowInventory from "./FlowInventory.svelte";
    import SearchForVideo from "./SearchForVideo.svelte";
    import { get } from "svelte/store";
    import { selectedFlow } from "./store";
	import FlowsPlayList from "./FlowsPlayList.svelte";
    $:selectedFlowString="";
    selectedFlow.subscribe((e)=>{
        if(e == null){
            addingSongs = false;
        }
        selectedFlowString=JSON.stringify(e);
    });
    let addingSongs = false;
</script>
{selectedFlowString}
<div id = "container">
    <div id = "flowInventory">
        <FlowInventory/>
    </div>
    <div id = "videoSearch">
        {#if $selectedFlow != null}
            {#if addingSongs}
                <div on:click={()=>{
                    addingSongs = false;
                }}>
                    <button>Back</button>
                    <SearchForVideo/>
                </div>
                
            {:else}
            <div>
                <button on:click={()=>{
                    addingSongs = true;
                }}>Add Songs</button>
                    <FlowsPlayList/>
                </div>
            {/if}
        {/if}
    </div>
    
</div>
<style>
    #container{
        flex-grow:1;
        background-color: black;
        display:flex;
        flex-direction: row;
    }
    #flowInventory{
        display:flex;
        flex-direction:column;
        flex-grow: 1;
        height:100%;
    }
    #videoSearch{
        display:flex;
        flex-direction: column;
        background-color: darkblue;
        height:100%;
    }
</style>