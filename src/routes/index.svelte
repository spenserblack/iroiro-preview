<script lang="ts">
  import { colors } from 'iroiro';
  import TrColor from '../lib/TrColor.svelte';
</script>

<h1><code>iroiro</code> preview</h1>
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
