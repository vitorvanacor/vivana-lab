<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  let Game;
  let promise;

  if (browser) {
    onMount(async () => {
      promise = import('$lib/game/GameComponent.svelte').then((mod) => {
        Game = mod.default;
      });
    });
  }
</script>

{#await promise}
  Loading Game...
{:then}
  <svelte:component this={Game} />
{:catch err}
  Failed to load game: {`${err}`}
{/await}
