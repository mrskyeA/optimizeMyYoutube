<script>
    import MaterialSymbolsPlayArrowRounded from '~icons/material-symbols/play-arrow-rounded';
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
    ]
</script>
<div id = "layout">
    
    
    <ul>
        {#each videos as video}
            <li>
                <img src = {video.thumbnailUrl}/>
                <div class = "videoText">
                    <div class = "videoTitle">{video.title}</div>
                    <div class = "creatorName">{video.creator}</div>
                </div>
                <button>
                    <MaterialSymbolsPlayArrowRounded></MaterialSymbolsPlayArrowRounded>
                </button>
            </li>
        {/each}
    </ul>
    <form>
        <label for="youtubeSearch">YouTube Video/Song Name:</label>
        <input type = "text" name="youtubeSearch">
        <input type = "submit" value = "Search">
    </form>
</div>
<style>
    form{
        background-color: gray;
        border-radius:5px;
        display: grid;
        justify-items: center;
        width:100%;
        height:64px;
    }
    ul{
        padding: 0;
        list-style-type: none;
    }
    li{
        overflow: auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:5px;
        border-radius: 5px;
        background-color: grey;
    }
    li+li{
        margin-top:10px;
    }
    img{
        border-radius:2px;
        object-fit: contain;
        float:left;
    }
    button{
        display: grid;
        place-items: center;
        font-size: 32px;
        width:64px;
        height:64px;
        float:right;
    }
    .videoText{
        flex-grow: 1;
        align-self: flex-start;
        margin-left:5px;
    }
    .creatorName{
        margin-top:8px;
        color:white;
        font-size:12px;
    }
</style>