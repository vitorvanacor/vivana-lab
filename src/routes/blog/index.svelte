<script>
  import { base } from '$app/paths';
  const metadataByPath = import.meta.globEager('./*md');
  const posts = Object.entries(metadataByPath).map(([path, metadata]) => {
    path = path.replace('.md', '');
    path = `${base}/blog/${path}`;
    metadata = metadata['metadata'];
    return { path, metadata };
  });
</script>

<ul>
  {#each posts as { path, metadata: { title } }}
    <li><a href={path}>{title}</a></li>
  {/each}
</ul>
