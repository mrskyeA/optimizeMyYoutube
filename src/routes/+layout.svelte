<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { setFlows,setApiKey } from '$lib/store';
    setFlows();
	setApiKey();
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display:flex;
		flex-grow: 2;
		width: 100%;
		height:100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
