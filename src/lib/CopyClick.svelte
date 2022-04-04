<script lang="ts">
  import { onMount } from 'svelte';

  let copyable;
  let successAlert;
  let failAlert;
  const ClipboardItem = window.ClipboardItem ?? null;

  onMount(() => {
    copyable.addEventListener('click', function() {
      const text = this.innerText;
      copyText(text, toggleHidden(successAlert), toggleHidden(failAlert));
    });
  });

  function copyText(text: string, success: () => void, fail: () => void) {
    navigator.permissions.query({ name: 'clipboard-write' }).then(({ state }) => {
      if (!ClipboardItem) {
        fail();
        return;
      }
      if (state === 'granted' || state === 'prompt') {
        const type = 'text/plain';
        const blob = new Blob([text], { type });
        const data = [new ClipboardItem({ [type]: blob })];

        navigator.clipboard.write(data).then(success, fail);
      }
    });
  }

  function toggleHidden(element: HTMLElement): () => void {
    return (): void => {
      element.classList.remove('hidden');
      setTimeout(() => {
        element.classList.add('hidden');
      }, 1000);
    };
  }
</script>

<span class="clickable" bind:this={copyable}>
  <slot></slot>
</span>
<span class="alert hidden" bind:this={successAlert}><small>Copied!</small></span>
<span class="alert hidden" bind:this={failAlert}><small>Couldn't copy :(</small></span>

<style>
  .clickable {
    cursor: pointer;
  }
  .alert {
    border: 5px solid #828282;
    background-color: #787878;
    color: #FFFFFB;
  }
  .alert.hidden {
    display: none;
  }
</style>
