<script>
	export let isOutlined = false;
</script>

<button class:isOutlined on:click>
	<slot />
</button>

<style>
	button {
		all: unset;
		background: var(--green7);
		border: 1px solid var(--green8);
		box-sizing: border-box;
		border-radius: 99px;
		padding: 10px 18px;
		cursor: pointer;

		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		font-size: 16;
		color: var(--green12);
	}

	button:hover {
		background: var(--green8);
	}

	button.isOutlined {
		background: none;
		border: none;

		color: var(--sage11);
	}
	button.isOutlined:hover {
		background: var(--sage8);
	}
</style>
