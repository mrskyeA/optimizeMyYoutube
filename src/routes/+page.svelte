<script>
	import EditFlowsPanel from "$lib/EditFlowsPanel.svelte";
	import FlowInventory from "$lib/FlowInventory.svelte";
	import SearchForVideo from "$lib/SearchForVideo.svelte";
	import { getApiKey } from "$lib/store";
	let apiKey = getApiKey();
	
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div>{$apiKey}</div>
<div>
	<EditFlowsPanel/>
</div>
<style>
	div{
		display:flex;
		flex-direction: column;
		min-width:100%;
		min-height:100%;
	}
</style>