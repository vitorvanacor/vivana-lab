<script>
  import '../index';
  import Phaser from 'phaser';
  import { onMount } from 'svelte';
  let game = new Phaser.Game({
    scale: {
      mode: Phaser.Scale.FIT,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
      },
    },
    scene: Phaser.Scene,
  });

  let scene;
  onMount(async () => {
    window.g.scene = await scene;
    console.log('b');
  });
  console.log('a');

  window.g.game = game;
</script>

<button
  on:click={() => {
    scene.add.rectangle(10, 10, 20, 20, 0x00ff00);
  }}
/>
