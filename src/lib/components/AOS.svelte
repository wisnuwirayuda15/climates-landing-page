<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}>
	{#if isInView}
		<div in:fade >
			<slot />
		</div>
	{/if}
</div>
