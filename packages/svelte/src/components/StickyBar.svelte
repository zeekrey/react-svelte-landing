<script lang="ts">
import Button from '../components/Button.svelte'
// import IntersectionObserver from '../components/IntersectionObserver.svelte';

// export let elementControllingVisibility;
</script>

<!-- <IntersectionObserver let:intersecting container={elementControllingVisibility}> -->
    <!-- {#if intersecting} -->
<div class="sticky">
    <p>Schon entschieden? Dann buch doch einfach mal einen Termin.</p>
<Button>Termin buchen</Button>
</div>
 <!-- {/if} -->
<!-- </IntersectionObserver> -->


<style>
    .sticky {
        position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 30px;

  box-shadow: 0 0 0 1px var(--green9);
  background: rgba(91, 185, 140, 0);
  backdrop-filter: blur(40px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
    }

    @media (min-width: 640px) {
		.sticky {
			flex-direction: row;
		}
	}
    .sticky p {
        color: var(--sage12);
  font-family: "Work Sans";
  font-size: 24px;
  flex: 1;
  margin: 0;

  margin-bottom: var(--space3);

    }

    @media (min-width: 640px) {
		.sticky p  {
			margin-bottom: 0px;
		}
	}
</style>