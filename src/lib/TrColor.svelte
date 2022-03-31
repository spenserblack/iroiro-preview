<script lang="ts">
  import type { Color } from 'iroiro';

  export let color: Color;
  $: light = color.lightness < 0.5;
  $: style = `background-color: ${color.value};`;
</script>

<tr {style} class:light>
  <td>{ color.value }</td>
  <td>{ color.romanized }</td>
  <td>{ color.name }</td>
</tr>

<style>
  .light {
    color: white;
  }
</style>
