<script>
	let links = [
		{
			name:"Home",
			path:"/"
		},
		{
			name:"About",
			path:"/about"
		},
		{
			name:"Settings",
			path:"/settings"
		},
		{
			name:"China",
			path:"https://bilibili.com"
		}
	]
</script>
<div id = "navbar">
	{#each links as link}
		<a href = {link.path}>
			<div class = "linkBlock">
				{link.name}
			</div>
		</a>
		
	{/each}
</div>
<style>
	#navbar{
		display:flex;
		flex-direction: row;
		width:100vw;
		height:64px;
		background-color: grey;
	}
	a{
		text-decoration: none;
	}

	.linkBlock{
		display:grid;
		place-items: center;
		padding:0px 24px 0px 24px;
		height:100%;
		background-color: orange;
		border-left:2px solid rgb(230, 79, 41);
		color:white;
	}
	a:nth-child(1)>.linkBlock{
		border-left:none;
	}
</style>