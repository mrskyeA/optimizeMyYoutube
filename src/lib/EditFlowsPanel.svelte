<script>
	import FlowInventory from "./FlowInventory.svelte";
    import SearchForVideo from "./SearchForVideo.svelte";
    import { get } from "svelte/store";
    import { selectedFlow } from "./store";
	import FlowsPlayList from "./FlowsPlayList.svelte";
    $:selectedFlowString="";
    let addingSongs = false;
    selectedFlow.subscribe((e)=>{
        if(e == null){
            addingSongs = false;
        }
        selectedFlowString=JSON.stringify(e);
    });
    
</script>
{selectedFlowString}
<div id = "container">
    <div id = "flowInventory">
        <FlowInventory/>
    </div>
    <div id = "songContainer">
        {#if $selectedFlow != null}
            {#if addingSongs}
                <div class = "songMenuContainer">
                    <button on:click={()=>{
                        addingSongs = false;
                    }}>Back</button>
                    <SearchForVideo/>
                </div>
                
            {:else}
                <div class = "songMenuContainer">
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
    .songMenuContainer{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
    }
    #flowInventory{
        display:flex;
        flex-direction:column;
        flex-grow: 1;
        height:100%;
    }
    #songContainer{
        background-color: darkblue;
        height:100%;
    }
</style>