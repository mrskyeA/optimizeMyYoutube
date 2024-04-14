<script>
	import FlowInventory from "./FlowInventory.svelte";
    import SearchForVideo from "./SearchForVideo.svelte";

</script>
<div id = "container">
    <div id = "flowInventory">
        <FlowInventory/>
    </div>
    <div id = "videoSearch">
        <SearchForVideo/>
    </div>
    
</div>
<style>
    #container{
        background-color: black;
        display:flex;
        flex-direction: row;
    }
    #flowInventory{
        flex-grow: 1;
        height:100%;
    }
    #videoSearch{
        background-color: darkblue;
        height:100%;
    }
</style>