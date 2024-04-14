<script lang="ts">
    import { get } from "svelte/store";
    import { flows,selectedFlow} from "./store";
    function onClick(event:MouseEvent){
        if(!event.target.className.startsWith("flowItem")){
            selectedFlow.set(null);
        }
    }
</script>
<div id = "flowList" on:click = {onClick}>
    {#each $flows as flow}
        <button class = "flowItem" on:click={()=>{
            selectedFlow.set(flow);
        }}>
            <input bind:value={flow.name}>
    </button>
    {/each}
</div>
<style>

    #flowList{
        flex-grow:1;
        display:flex;
        gap:10px;
    }
    .flowItem{
        border-radius:5px;
        width:96px;
        height:96px;
        background-color: gray;
        
        display:grid;
        place-items:center;
        border:none;
    }
    input{
        color:white;
        text-align:center;
        background-color: transparent;
        width:100%;
        border:none;
    }
</style>