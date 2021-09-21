<script lang="ts">
	import Icon from './Icon.svelte';

	export let headline: string = 'The default headline';
	export let description: string = 'The default description';
	export let icon: { name: string; alt: string | undefined } = {
		name: 'starFilledIcon',
		alt: 'the image alt'
	};
</script>

<div>
	<div class="icon-wrapper"><Icon name={icon.name} /></div>
	<h3>{headline}</h3>
	<p>{description}</p>
</div>

<style>
	.icon-wrapper {
		background: var(--green7);
		width: 50px;
		height: 50px;
		border-radius: 99px;
		display: inline-grid;
		place-content: center;
		color: var(--sage12);
	}

	h3 {
		color: var(--sage12);
		font-family: 'Work Sans';
		font-size: 22px;
	}

	p {
		color: var(--sage11);
	}
</style>
