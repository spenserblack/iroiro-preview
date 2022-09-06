<script lang="ts">
  import type { PageData } from '$types';
  import containerBg from '$lib/container-bg';
  import TrColor from '$lib/TrColor.svelte';

  let bgValue = '#FFF';
  export let data: PageData;
  $: colors = data.colors;

  containerBg.subscribe((bg) => {
    bgValue = bg;
  });
</script>

<div class="table-container" style="background-color: { bgValue };">
  <table>
    <caption>Click on text to copy it to the clipboard</caption>
    <thead>
      <th>Hex</th>
      <th>Romanized</th>
      <th>Name</th>
    </thead>
    <tbody>
      {#each colors as color}
        <TrColor {color} />
      {/each}
    </tbody>
  </table>
</div>

<style>
  .table-container {
    padding: 3em;
  }
</style>
