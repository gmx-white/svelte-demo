<script>
  import { cards } from './store'
import Card from './Card.svelte'
import AppCard from './AppCard.svelte';
</script>

<div id="root">
  {#each $cards as card, index}
  <Card {...card} index={index}/>
  {/each}

  <AppCard/>
</div>
  
  


<style >
  
</style>
