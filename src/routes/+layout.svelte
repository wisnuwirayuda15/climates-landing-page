<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	import '../app.css';

	const navigateAnimation: boolean = false;
	let y: number;

	onNavigate(() => {
		if (document.startViewTransition && navigateAnimation) {
			return new Promise((resolve) => {
				document.startViewTransition &&
					document.startViewTransition(async () => {
						resolve();
						//@ts-ignore
						await navigation.complete;
					});
			});
		}
	});
</script>

<svelte:window bind:scrollY={y} />

<header>
	<Navbar fixed={y > 50} />
</header>

<slot />

<footer>
	<Footer />
</footer>
