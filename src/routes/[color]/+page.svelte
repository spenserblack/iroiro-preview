<script lang="ts">
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import containerBg from '$lib/container-bg';
  import TrColor from '$lib/TrColor.svelte';
  import type { Color } from 'iroiro';

  let bgValue = '#FFF';
  export let colors: Color[] = [];

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
