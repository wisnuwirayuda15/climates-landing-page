<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Logo from '$lib/icon/logo-inline-text.png';
	import Icon from '@iconify/svelte';
	export let fixed: boolean = false;
	export let dropdown: boolean = false;
</script>

<div
	class="flex justify-center w-full transition-all bg-base-100 fixed {fixed && 'z-50 shadow-lg'}"
>
	<nav class="navbar bg-base-100 px-10 transition-all {!fixed && 'py-5'}">
		<div class="navbar-start">
			<a href="/">
				<img
					src={Logo}
					alt="climates logo"
					class="{fixed ? 'w-28' : 'w-32'} h-auto transition-all"
				/>
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
							on:clickoutside={() => {
								dropdown = false;
							}}
							on:click={() => {
								dropdown = dropdown ? false : true;
							}}
						>
							Home <Icon icon="tabler:chevron-down" class="text-lg transition-all duration-500 {dropdown && 'rotate-180'}" />
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
					<a href="/about" class="{$page.url.pathname === '/about' && 'active'} ">About Us</a>
				</li>
				<li>
					<a href="/works" class="{$page.url.pathname === '/works' && 'active'} ">Our Work</a>
				</li>
				<li>
					<a href="/premium" class="{$page.url.pathname === '/premium' && 'active'} ">Premium</a>
				</li>
			</ul>
		</div>
		<div class="navbar-end">
			<div class="flex gap-3">
				<button class="btn btn-primary btn-outline transition-all {fixed && 'btn-sm'}">Login</button
				>
				<button class="btn btn-primary transition-all {fixed && 'btn-sm'}">Register</button>
			</div>
		</div>
	</nav>
</div>

<div class="pt-28"></div>
