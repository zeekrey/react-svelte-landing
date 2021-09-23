<script lang="ts">
	import Alert from '../components/Alert.svelte';
	import Icon from '../components/Icon.svelte';
	import SignUp from '../components/SignUp.svelte';
	import Button from '../components/Button.svelte';
	import SellingPoint from '../components/SellingPoint.svelte';
	import SellingPointLarge from '../components/SellingPointLarge.svelte';

	import { UNIQUESELLINGPOINTS, ABOUTUSPOINTS, META } from '../../website.config';

	let theme: 'light-theme' | 'dark-theme' = 'dark-theme';
	let ref

	function toggle() {
		theme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
		window.document.body.classList.toggle('dark-theme');
	}
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>


<div class="bg-gradients">
	<div class="theme-switch">
		<div on:click={toggle}>
			{#if theme === 'dark-theme'}
				<Icon name="SunIcon" on:click={toggle} />{:else}<Icon
					name="MoonIcon"
					on:click={toggle}
				/>{/if}
		</div>
	</div>
	<main class="stage stage-padding">
		<h1>{META.headline}</h1>
		<h2>{META.subheadline}</h2>
		<div class="cta-box" id="cta-box">
			<SignUp />
			<a href="#about"><Button isOutlined>{META.aboutButton}</Button></a>
		</div>
		<div class="alert-box">
			<Alert
				>{META.alert}
				<Icon name="arrowRightIcon" style="padding-left: var(--space2)" />
			</Alert>
		</div>
	</main>
</div>
<div class="stage-padding">
	<div class="selling-point-grid ">
		{#each UNIQUESELLINGPOINTS as { headline, description, icon }}
			<SellingPoint {headline} {description} icon={{ name: icon, alt: 'headline' }} />
		{/each}
	</div>
</div>
<div class="section-headline stage-padding " id="about">Über uns</div>
<div class="stage-padding">
	{#each ABOUTUSPOINTS as point}
		<SellingPointLarge {...point} />
	{/each}
</div>

<style>
	@import '@radix-ui/colors/green.css';
	@import '@radix-ui/colors/greenDark.css';
	@import '@radix-ui/colors/sage.css';
	@import '@radix-ui/colors/sageDark.css';

	@media (min-width: 1024px) {
		.stage-padding {
			padding-left: 8%;
			padding-right: 8%;
		}
	}

	.theme-switch {
		text-align: center;
		padding: var(--space4) 0;
	}

	.theme-switch > div {
		cursor: pointer;
	}

	.bg-gradients {
		background: radial-gradient(circle at 15% 50%, var(--green4), rgba(255, 255, 255, 0) 25%),
			radial-gradient(circle at 85% 30%, var(--sage7), rgba(255, 255, 255, 0) 25%);
	}
	.section-headline {
		color: var(--sage12);
		text-align: center;
		font-size: 28px;
		font-family: 'Work Sans';
		padding: var(--space5);
		margin: 0px;
	}

	.selling-point-grid {
		padding: 0px var(--space5);
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 38px;
		text-align: left;
	}

	@media (min-width: 640px) {
		.selling-point-grid {
			grid-template-columns: 1fr 1fr;
			grid-gap: 48px;
		}
	}

	@media (min-width: 1024px) {
		.selling-point-grid {
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-gap: 36px;
		}
	}

	.alert-box {
		display: grid;
		place-content: center;
	}
	.cta-box {
		padding-top: 26px;
	}

	@media (min-width: 768px) {
		.cta-box a {
			all: unset;
		}

		.cta-box a:last-of-type {
			margin-left: 12px;
		}
	}

	h1 {
		color: var(--sage12);
		font-family: 'Work Sans', sans-serif;
		margin-bottom: 0px;

		font-size: 38px;
		padding: 20px var(--space5);
		line-height: 40px;
		text-align: left;
	}

	@media (min-width: 640px) {
		h1 {
			text-align: center;
			font-size: 58px;
			padding: 20px 100px;
			line-height: 60px;
		}
	}

	h2 {
		color: var(--sage11);
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		padding: 0px var(--space5);
		text-align: left;
	}

	@media (min-width: 768px) {
		h2 {
			padding: 0px 250px;
			text-align: center;
		}
	}

	.stage {
		display: grid;
		place-content: center;
		text-align: center;
		padding-top: 100px;
	}

	:global(.noscroll) {
		overflow: hidden;
	}

	:global(html) {
		height: 100%;
		margin: 0px;
		padding: 0px;
	}

	:global(body) {
		min-height: '100%';
		margin: 0px;
		padding: 0px;
		background: var(--green1);
		color: var(--green12);
		font-family: 'Roboto', sans-serif;

		/* Tokens */
		--space1: 5px;
		--space2: 10px;
		--space3: 15px;
		--space4: 20px;
		--space5: 25px;
	}
</style>
