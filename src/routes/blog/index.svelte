<script>
  const metadataByPath = import.meta.globEager("./*md");
  const posts = Object.entries(metadataByPath).map(([path, metadata]) => {
    path = path.replace(".md", "");
    metadata = metadata["metadata"];
    return { path, metadata };
  });
</script>

<ul>
  {#each posts as { path, metadata: { title } }}
    <li><a href={`/blog/${path}`}>{title}</a></li>
  {/each}
</ul>
