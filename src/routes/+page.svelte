<script>
	import EditFlowsPanel from "$lib/EditFlowsPanel.svelte";
	import FlowInventory from "$lib/FlowInventory.svelte";
	import SearchForVideo from "$lib/SearchForVideo.svelte";
	
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

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