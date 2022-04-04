<script lang="ts">
  import type { Color } from 'iroiro';
  import Copyable from './CopyClick.svelte';

  export let color: Color;
  $: light = color.lightness < 0.5;
  $: style = `background-color: ${color.value};`;
</script>

<tr {style} class:light>
  <td><Copyable>{ color.value }</Copyable></td>
  <td><Copyable>{ color.romanized }</Copyable></td>
  <td><Copyable>{ color.name }</Copyable></td>
</tr>

<style>
  .light {
    color: white;
  }
</style>
