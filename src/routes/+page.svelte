<script>
    import { malangis } from "$lib/functions";
    let query = '';
    $: result = malangis(query);
    function copy() {
        navigator.clipboard.writeText(result);
    }
</script>


<div class="w-screen h-screen flex flex-col gap-2 items-center justify-center">
    <h1 class="text-2xl font-semibold">Oyi-Sam</h1>
	<input class="border text-center py-1" placeholder="Input here..." type="text" bind:value={query}>
    <input class="border text-center py-1" placeholder="result here..." type="text" bind:value={result} disabled>
    {#if result}
        <button class="bg-blue-500 text-white px-4 py-1 rounded-lg" on:click={copy}>Copy</button>
    {/if}
</div>
