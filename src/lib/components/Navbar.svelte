<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Logo from '$lib/icon/logo.png';
	import Icon from '@iconify/svelte';
	export let fixed: boolean = false;
	export let hidden: boolean = false;
	let dropdown: boolean = false;
	let hamburger: boolean = false;

	const toggleDropdown = () => {
		dropdown = !dropdown;
	};
	const closeDropdown = () => {
		dropdown = false;
	};
	const toggleHamburger = () => {
		hamburger = !hamburger;
	};
	const closeHamburger = () => {
		hamburger = false;
	};

	$: {
		$page.url;
		closeHamburger();
		closeDropdown();
	}
</script>

{#if dropdown}
	<button
		transition:fade
		on:click={closeHamburger}
		on:click={closeDropdown}
		class="bg-black cursor-pointer z-[999] h-screen w-screen fixed opacity-50 hidden lg:block"
	></button>
{/if}

<div
	class="w-full fixed z-[9999] {fixed && !hamburger && 'shadow-lg'} {fixed &&
		'bg-base-100 bg-opacity-50'} {hidden &&
		!hamburger &&
		!dropdown &&
		'-translate-y-full'} {hamburger && 'h-full lg:h-auto'}"
>
	<nav
		class="navbar px-5 lg:px-10 {!hamburger ? 'backdrop-blur-md' : 'bg-base-100'} {!fixed &&
			'lg:py-2'}"
	>
		<div class="navbar-start">
			<a href="/" class="flex items-center gap-2">
				<img src={Logo} alt="climates logo" class="{fixed ? 'w-10' : 'w-12'} h-auto" />
				<h3 class="text-primary {!fixed ? 'tracking-[5px]' : 'tracking-[2px]'}">CLIMATES</h3>
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal gap-5 font-bold">
				<li>
					{#if $page.url.pathname !== '/'}
						<a href="/">Home</a>
					{:else}
						<button class="{$page.url.pathname === '/' && 'active'} " on:click={toggleDropdown}>
							Home <Icon
								icon="charm:chevron-down"
								class="text-lg duration-500 {dropdown && 'rotate-180'}"
							/>
						</button>
					{/if}
					{#if dropdown}
						<ul
							transition:fly={{ y: '-30px' }}
							class="translate-y-[60px] -translate-x-[15px] absolute z-[1] menu p-2 shadow bg-base-100 rounded-md w-max font-normal"
						>
							<li>
								<a class="{$page.url.hash === '#overview' && 'active'} " href="#overview"
									>Overview</a
								>
							</li>
							<li>
								<a class="{$page.url.hash === '#quotes' && 'active'} " href="#quotes">Quotes</a>
							</li>
							<li>
								<a class="{$page.url.hash === '#the-problem' && 'active'} " href="#the-problem"
									>The Problem</a
								>
							</li>
							<li>
								<a
									class="{$page.url.hash === '#how-does-climates-work' && 'active'} "
									href="#how-does-climates-work">How does Climates work?</a
								>
							</li>
							<li>
								<a class="{$page.url.hash === '#feature-1' && 'active'} " href="#feature-1"
									>Features</a
								>
							</li>
						</ul>
					{/if}
				</li>
				<li>
					<a href="/about" class="{$page.url.pathname === '/about' && 'active'} ">About Us</a>
				</li>
				<li>
					<a href="/premium" class="{$page.url.pathname === '/premium' && 'active'} ">Premium</a>
				</li>
			</ul>
		</div>
		<div class="navbar-end">
			<div class="lg:hidden">
				<button class="btn btn-square btn-ghost" on:click={toggleHamburger}>
					<Icon
						icon={hamburger
							? 'line-md:menu-to-close-alt-transition'
							: 'line-md:close-to-menu-alt-transition'}
						class="w-[70%] h-auto"
					/>
				</button>
			</div>
			<div class="gap-3 hidden lg:flex">
				<button class="btn btn-primary btn-ghost transition-all {fixed && 'btn-sm'}">Login</button>
				<button class="btn btn-primary transition-all {fixed && 'btn-sm'}">Register</button>
			</div>
		</div>
	</nav>

	{#if hamburger}
		<div
			transition:fly={{ x: '100%' }}
			class="lg:hidden absolute min-h-full w-full bg-base-100 p-2"
		>
			<ul class="menu sm:menu-lg h-min font-bold">
				<li class="active">
					{#if $page.url.pathname === '/'}
						<button class="flex justify-between active" on:click={toggleDropdown}
							>Home <span>
								<Icon icon="charm:chevron-down" class="duration-500 {dropdown && 'rotate-180'}" />
							</span></button
						>
						{#if dropdown}
							<ul class="menu font-normal">
								<li transition:fly={{ y: '-50px', delay: 100 }}>
									<a class="{$page.url.hash === '#overview' && 'active'} " href="#overview"
										>Overview</a
									>
								</li>
								<li transition:fly={{ y: '-50px', delay: 200 }}>
									<a class="{$page.url.hash === '#quotes' && 'active'} " href="#quotes">Quotes</a>
								</li>
								<li transition:fly={{ y: '-50px', delay: 300 }}>
									<a class="{$page.url.hash === '#the-problem' && 'active'} " href="#the-problem"
										>The Problem</a
									>
								</li>
								<li transition:fly={{ y: '-50px', delay: 400 }}>
									<a
										class="{$page.url.hash === '#how-does-climates-work' && 'active'} "
										href="#how-does-climates-work">How does Climates work?</a
									>
								</li>
								<li transition:fly={{ y: '-50px', delay: 500 }}>
									<a class="{$page.url.hash === '#feature-1' && 'active'} " href="#feature-1"
										>Features</a
									>
								</li>
							</ul>
						{/if}
					{:else}
						<a href="/" class="flex justify-between"
							>Home <span>
								<Icon icon="charm:chevron-right" />
							</span></a
						>
					{/if}
				</li>
				<li>
					<a
						href="/about"
						class="{$page.url.pathname === '/about' && 'active'} flex justify-between"
						>About Us <span>
							<Icon icon="charm:chevron-right" />
						</span></a
					>
				</li>
				<li>
					<a
						href="/premium"
						class="{$page.url.pathname === '/premium' && 'active'} flex justify-between"
						>Premium <span>
							<Icon icon="charm:chevron-right" />
						</span></a
					>
				</li>
			</ul>

			<div class="grid gap-2 p-4 w-full fixed bottom-0 left-0 right-0">
				<a
					href="https://github.com/wisnuwirayuda15/climates-landing-page"
					target="_blank"
					class="w-full h-full"
				>
					<Icon icon="mdi:github" width="30" class="w-full text-primary" />
				</a>
				<button class="btn btn-sm sm:btn-md btn-primary btn-outline btn-block">Login</button>
				<button class="btn btn-sm sm:btn-md btn-primary btn-block">Register</button>
			</div>
		</div>
	{/if}
</div>
