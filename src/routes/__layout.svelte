<script context="module">
  import { base as basePath } from '$app/paths';
</script>

<svelte:head>
	<link rel="icon" href={`${basePath}/favicon.png`} />
</svelte:head>

<slot />
