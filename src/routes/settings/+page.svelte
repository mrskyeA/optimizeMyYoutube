<script lang="ts">
    import {getApiKey} from "$lib/store";
    let form:HTMLFormElement;
    let apiKey = getApiKey();
    function onSubmit(){
        let formData = new FormData(form);
        apiKey.set(formData.get("apiKey") as string);
    }
</script>
<form bind:this={form} on:submit={onSubmit}>
    <label for="apiKey">Youtube API Key:</label>
    <input type = "text" name="apiKey">
    <input type = "submit" value = "Search">
</form>
