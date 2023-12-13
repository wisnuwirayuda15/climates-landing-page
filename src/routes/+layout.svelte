<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/icon/logo.png';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '../app.css';

	const navigateAnimation: boolean = true;
	let scrollY: number;
	let hidden: boolean = false;

	onMount(() => {
		var prevScrollpos = window.scrollY;
		window.onscroll = function () {
			var currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				setTimeout(() => {
					hidden = false;
				}, 500);
			} else {
				setTimeout(() => {
					hidden = true;
				}, 1000);
			}
			prevScrollpos = currentScrollPos;
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
	<link rel="icon" href={Logo} />
</svelte:head>

<header>
	<Navbar fixed={scrollY > 50} {hidden} />
</header>

<main class="min-h-screen" transition:fade>
	<slot />
</main>

<footer>
	<Footer />
</footer>
