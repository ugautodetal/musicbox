<script>

import SingleLetter from './lib/SingleLetter.svelte'

</script>

<div class="app-container">
{#each "UGAVTOPART" as letter, index}
  <SingleLetter letter={letter} index={index}/>
{/each}
</div>

<style>
.app-container {
  user-select: none;
  font-family: "JetBrains Mono";
  font-size: 70px
}

</style>