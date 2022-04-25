<script lang="ts">
  import { colors } from 'iroiro';

  import containerBg from '$lib/container-bg';
  import TrColor from '$lib/TrColor.svelte';

  let bgValue = '#FFF';

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
