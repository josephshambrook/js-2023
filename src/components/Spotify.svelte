<script type="ts">
  import type { TracksResponse } from "@src/types";

  const fetchTracks = async (): Promise<TracksResponse[]> => {
    const rawResponse = await fetch(
      "https://spotify-worker.josephshambrook.workers.dev/top?limit=5"
    );

    if (rawResponse.status === 200) {
      return await rawResponse.json();
    }

    throw new Error("Damn");
  };

  let tracks = fetchTracks();
</script>

{#await tracks}
  <p>Loading</p>
{:then tracks}
  <ul class="list">
    {#each tracks as track}
      <li class="track">
        <div class="track-name">{track.name}</div>
        <div>{track.artist}</div>
      </li>
    {/each}
  </ul>
{/await}

<style lang="scss">
  .list {
    list-style: none;
    padding-inline-start: 0;
  }

  .list > .track:not(:last-of-type) {
    // TODO: extract this border gradient to a mixin
    border-block-end: 2px solid;
    border-image-slice: 1;
    // border-image-source: var(--gradient-blue-red);
    border-image-source: var(--theme-metadata-gradient);
    margin-block-end: 0.5rem;
    padding-block-end: 0.6rem;
  }

  .track-name {
    font-weight: bold;
  }
</style>
