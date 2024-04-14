<script>
    let selectedFlow = null;
    let flows = [
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
    ];
</script>
<div>
    <div id = "flowList">
        {#each flows as flow}
            <button class = "flowItem" on:click={()=>{
                selectedFlow=flow;
            }} on:blur ={()=>{
                if(selectedFlow == flow){
                    selectedFlow = null;
                }
            }}>
                <input bind:value={flow.name}>
        </button>
        {/each}
    </div>
    
</div>
<style>
    #flowList{
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