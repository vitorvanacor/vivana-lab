<script>
  import { onMount } from 'svelte';

  let gameComponent;
  const inBrowser = Boolean(typeof navigator);

  if (inBrowser) {
    onMount(async () => {
      gameComponent = (await import('../game/Game.svelte')).default;
    });
  }
</script>

{#if gameComponent}
  <svelte:component this={gameComponent} />
{/if}
