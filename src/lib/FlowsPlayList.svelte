<script>
	import VideoList from "./VideoList.svelte";
    import {selectedFlow} from "./store";
</script>
<div>
    <h1>Songs</h1>
    <VideoList songs ={$selectedFlow.songs}/>
</div>