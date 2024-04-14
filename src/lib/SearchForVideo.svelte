<script>
    import MaterialSymbolsPlayArrowRounded from '~icons/material-symbols/play-arrow-rounded';
    import VideoList from "./VideoList.svelte";
    let videos = [
        {
            title:"Take It Off",
            creator:"kesha",
            thumbnailUrl:"https://i.ytimg.com/vi/GgGPuuGNPAE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC53yjMrVtkhcBJRdvh86Zc5VJklw",
            songUrl:""
        },
        {
            title:"Take It Off",
            creator:"kesha",
            thumbnailUrl:"https://i.ytimg.com/vi/GgGPuuGNPAE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC53yjMrVtkhcBJRdvh86Zc5VJklw",
            songUrl:""
        },
        {
            title:"Take It Off",
            creator:"kesha",
            thumbnailUrl:"https://i.ytimg.com/vi/GgGPuuGNPAE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC53yjMrVtkhcBJRdvh86Zc5VJklw",
            songUrl:""
        }
    ];
</script>
<div id = "layout">
    
    
    <VideoList songs={videos}/>
    <div id = "formContainer">
        <form>
            <label for="youtubeSearch">YouTube Video/Song Name:</label>
            <input type = "text" name="youtubeSearch" id="youtubeSearch">
            <input type = "submit" value = "Search">
        </form>
    </div>
    
</div>
<style>
    #layout{
        padding:10px;
        display:flex;
        flex-direction: column;
        flex-grow:1;
    }
    #formContainer{
        display:grid;
        place-items: center;
        padding:10px;
        background-color: gray;
        border-radius:5px;
        max-width:100%;
        max-height:64px;
    }
    
</style>