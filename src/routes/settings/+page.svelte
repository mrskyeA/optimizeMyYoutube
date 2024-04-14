<script lang="ts">
    import {apiKey} from "$lib/store";
    let form:HTMLFormElement;
    function onSubmit(){
        let formData = new FormData(form);
        apiKey.set(formData.get("apiKey") as string);
    }
</script>
<form bind:this={form} on:submit={onSubmit}>
    <label for="apiKey">Youtube API Key:</label>
    <input type = "text" name="apiKey" id="apiKey">
    <input type = "submit" value = "Submit">
</form>
