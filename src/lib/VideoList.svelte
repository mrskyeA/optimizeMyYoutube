<script lang="ts">
    import MaterialSymbolsPlayArrowRounded from '~icons/material-symbols/play-arrow-rounded';
    export let songs:uiSongData[];
</script>
<ul>
    {#each songs as song}
        <li>
            <img src = {song.thumbnailUrl} alt = "Song Thumbnail"/>
            <div class = "songText">
                <div class = "songTitle">{song.title}</div>
                <div class = "creatorName">{song.creator}</div>
            </div>
            <button>
                <MaterialSymbolsPlayArrowRounded></MaterialSymbolsPlayArrowRounded>
            </button>
        </li>
    {/each}
</ul>

<style>
    ul{
        margin:0px;
        flex-grow:1;
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
    .songText{
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