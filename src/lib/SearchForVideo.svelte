<div>
    <form>
        <label for="youtubeSearch">YouTube Video/Song Name:</label>
        <input type = "text" name="youtubeSearch">
        <input type = "submit" value = "Search">
    </form>
    <ul>
        <li>
            <img src = "https://i.ytimg.com/vi/GgGPuuGNPAE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC53yjMrVtkhcBJRdvh86Zc5VJklw"/>
            <div class = "videoText">
                <div class = "videoTitle">Take It Off</div>
                <div class = "creatorName">kesha</div>
            </div>
            
        </li>
    </ul>
</div>
<style>
    
    li{
        display:flex;
        
        padding:5px;
        border-radius: 5px;
        background-color: grey;
    }
    img{
        align-self: center;
        object-fit: contain;
        float:left;
    }
    .videoText{
        margin-left:5px;
    }
    .creatorName{
        margin-top:8px;
        color:white;
        font-size:12px;
    }
</style>