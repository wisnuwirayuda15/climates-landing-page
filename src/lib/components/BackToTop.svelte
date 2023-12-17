<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	export let show: boolean = false;
	function goTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>

{#if show}
	<button
		transition:fly={{ x: '100%' }}
		class="btn btn-circle btn-primary opacity-70 hover:opacity-100 fixed bottom-4 right-4 glow-item-10 z-50"
		on:click={goTop}
	>
		<Icon icon="line-md:chevron-up" class="h-[70%] w-auto" />
	</button>
{/if}
