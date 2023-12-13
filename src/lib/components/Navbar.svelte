<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Logo from '$lib/icon/logo-inline-text.png';
	import Icon from '@iconify/svelte';
	export let fixed: boolean = false;
	export let hidden: boolean = false;
	let dropdown: boolean = false;
	let hamburger: boolean = false;
	const closeDropdown = () => {
		dropdown = false;
	};
	const toggleHamburger = () => {
		hamburger = !hamburger;
	};
	const closeHamburger = () => {
		hamburger = false;
	};
</script>

<div
	class="flex justify-center w-full bg-base-100 bg-opacity-50 fixed z-[9999] {fixed &&
		'shadow-lg'} {hidden && !hamburger && '-translate-y-full'}"
>
	<nav class="navbar backdrop-blur-md px-5 lg:px-10 {!fixed && 'lg:py-5'}">
		<div class="navbar-start">
			<a href="/">
				<img src={Logo} alt="climates logo" class="{fixed ? 'w-28' : 'w-32'} h-auto" />
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal gap-5 font-bold">
				<li>
					{#if $page.url.pathname !== '/'}
						<a href="/">Home</a>
					{:else}
						<button
							class="{$page.url.pathname === '/' && 'active'} "
							use:clickoutside
							on:clickoutside={closeDropdown}
							on:click={() => {
								dropdown = dropdown ? false : true;
							}}
						>
							Home <Icon
								icon="tabler:chevron-down"
								class="text-lg duration-500 {dropdown && 'rotate-180'}"
							/>
						</button>
					{/if}
					{#if dropdown}
						<ul
							transition:fade={{ duration: 100 }}
							class="translate-y-[60px] -translate-x-[15px] absolute z-[1] menu p-2 shadow bg-base-100 rounded-md w-max font-normal"
						>
							<li><a href="#overview">Overview</a></li>
							<li><a href="#quotes">Quotes</a></li>
							<li><a href="#the-problem">The Problem</a></li>
							<li><a href="#how-does-climates-work">How does Climates work?</a></li>
							<li><a href="#feature-1">Features</a></li>
						</ul>
					{/if}
				</li>
				<li>
					<a
						on:click={closeDropdown}
						href="/about"
						class="{$page.url.pathname === '/about' && 'active'} ">About Us</a
					>
				</li>
				<li>
					<a
						on:click={closeDropdown}
						href="/premium"
						class="{$page.url.pathname === '/premium' && 'active'} ">Premium</a
					>
				</li>
			</ul>
		</div>
		<div class="navbar-end">
			<div class="lg:hidden">
				<button
					class="btn btn-square btn-ghost"
					use:clickoutside
					on:click={toggleHamburger}
					on:clickoutside={closeHamburger}
				>
					<Icon icon={hamburger ? 'tabler:x' : 'ci:hamburger-lg'} class="w-[70%] h-auto" />
				</button>
				{#if hamburger}
					<div
						transition:fade={{ duration: 100 }}
						class="bg-base-100 z-50 w-56 p-3 absolute menu shadow-lg rounded-box right-4 top-[120%] font-bold"
					>
						<ul>
							<li>
								<a
									on:click={closeHamburger}
									href="/"
									class="{$page.url.pathname === '/' && 'active'} "
									>Home <span>
										<Icon icon="charm:chevron-right" />
									</span></a
								>
							</li>
							<li>
								<a
									on:click={closeHamburger}
									href="/about"
									class="{$page.url.pathname === '/about' && 'active'} "
									>About Us <span>
										<Icon icon="charm:chevron-right" />
									</span></a
								>
							</li>
							<li>
								<a
									on:click={closeHamburger}
									href="/premium"
									class="{$page.url.pathname === '/premium' && 'active'} "
									>Premium <span>
										<Icon icon="charm:chevron-right" />
									</span></a
								>
							</li>
						</ul>
					</div>
				{/if}
			</div>
			<div class="gap-3 hidden lg:flex">
				<button class="btn btn-primary btn-ghost {fixed && 'btn-sm'}">Login</button>
				<button class="btn btn-primary {fixed && 'btn-sm'}">Register</button>
			</div>
		</div>
	</nav>
</div>

<!-- <div class="pt-20"></div> -->
