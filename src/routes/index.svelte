<script lang="ts">
  import { colors } from 'iroiro';
  import TrColor from '../lib/TrColor.svelte';

  const white = '#FFF';
  const colorRegex = /^#(([\dA-F]){6}|([\dA-F]){3})$/i;
  let bgInput = white;
  $: containerBg = colorRegex.test(bgInput) ? bgInput : white;
</script>

<h1><code>iroiro</code> preview</h1>
<label>
  Set Background
  <input bind:value={bgInput}>
</label>
<p>
  <small>
    Allows preview of what each color would look like <em>on</em>
    another color
  </small>
</p>
<div class="table-container" style="background-color: { containerBg };">
  <table>
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
