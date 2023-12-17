<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Logo from '$lib/icon/logo.png';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import '../app.css';

	const navigateAnimation: boolean = true;
	const navbarAutoHide: boolean = false;
	let scrollY: number;
	let hidden: boolean = false;

	onMount(() => {
		var prevScrollpos = window.scrollY;
		window.onscroll = function () {
			if (navbarAutoHide) {
				var currentScrollPos = window.scrollY;
				if (prevScrollpos > currentScrollPos) {
					setTimeout(() => {
						hidden = false;
					}, 0);
				} else {
					setTimeout(() => {
						hidden = true;
					}, 1000);
				}
				prevScrollpos = currentScrollPos;
			}
		};
	});

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

<svelte:window bind:scrollY />

<svelte:head>
  <meta name="twitter:image" content={Logo} />
	<link rel="icon" href={Logo} />
</svelte:head>

<header>
	<Navbar fixed={scrollY >= 50} hidden={hidden && scrollY >= 300} />
</header>

<main class="min-h-screen">
	<slot />
	<BackToTop show={scrollY >= 500} />
</main>

<footer>
	<Footer />
</footer>
