<script>
	import FlowInventory from "./FlowInventory.svelte";
    import SearchForVideo from "./SearchForVideo.svelte";
    import { get } from "svelte/store";
    import { selectedFlow } from "./store";
    $:selectedFlowString="";
    selectedFlow.subscribe((e)=>{
        selectedFlowString=JSON.stringify(e);
    })
</script>
{selectedFlowString}
<div id = "container">
    <div id = "flowInventory">
        <FlowInventory/>
    </div>
    <div id = "videoSearch">
        {#if $selectedFlow != null}
            <SearchForVideo/>
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