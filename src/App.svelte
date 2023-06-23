<script>
	export let name;
	// import Login from "./login.svelte";
	// import Signup from "./signup.svelte";
    import Todos from "./todos.svelte";

</script>

<main>
	<h3>{name}'s todo app built with Svelte and Firebase!</h3>
	<!-- <Login />
	<Signup /> -->
	<Todos />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h3 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 50;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>