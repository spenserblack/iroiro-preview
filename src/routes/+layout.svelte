<script lang="ts">
  import containerBg from '$lib/container-bg';

  const white = '#FFF';
  const colorRegex = /^#(([\dA-F]){6}|([\dA-F]){3})$/i;
  let bgInput = white;
  $: {
    containerBg.update((previous) => colorRegex.test(bgInput) ? bgInput : previous);
  }
</script>

<h1><code>iroiro</code> preview</h1>
<nav>
  <ul>
    <li><a href="/">all</a></li>
    <li><a data-sveltekit-reload href="/random">randomize</a></li>
  </ul>
</nav>
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

<slot></slot>
