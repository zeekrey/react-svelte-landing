<script lang="ts">
	import Icon from './Icon.svelte';

	export let tag: string = 'The Tag';
	export let headline: string = 'The headline';
	export let description: string[] = ['The description'];
	export let bulletPoints: string[] = ['Bullet point no 1'];
</script>

<div class="wrapper">
	<span class="keyBox">{tag}</span>
	<h3>{headline}</h3>
	<div class="container">
		<div class="box">
			{#each description as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<div class="box">
			<ul>
				{#each bulletPoints as bulletPoint}
					<li>
						<span class="icon-wrapper"> <Icon name="CheckIcon" /></span>
						<div>{bulletPoint}</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.wrapper {
		padding: 40px var(--space5);
	}

	.icon-wrapper {
		border-radius: 99px;
		background: var(--green8);
		color: var(--green12);
		display: inline-grid;
		place-content: center;
		padding: 16px;
		margin-right: 12px;
	}
	ul {
		list-style: none;
		color: var(--sage12);
		margin: 0px;
		padding: 0px;

		margin-top: var(--space2);
	}

	@media (min-width: 640px) {
		ul {
			margin-top: 0px;
			margin-left: var(--space2);
		}
	}

	ul li {
		margin-bottom: 12px;
		display: flex;
		align-items: center;
	}

	ul li:last-of-type {
		margin-bottom: 0px;
	}

	.box {
		flex: 1;
	}
	.container {
		display: flex;
	}

	.keyBox {
		padding: 6px;
		background: var(--green7);
		color: var(--green10);
		border-radius: 4px;
		font-size: 12px;
		font-weight: bold;
	}

	h3 {
		color: var(--sage12);
		font-family: 'Work Sans';
		font-size: 28px;

		margin-top: var(--space2);
		margin-bottom: var(--space4);
	}

	@media (min-width: 640px) {
		h3 {
			padding-right: 50%;
		}
	}
</style>
