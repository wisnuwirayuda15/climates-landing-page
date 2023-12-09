<script lang="ts">
	export let src: string;
	export let feature: string;
	export let mockupScale: number = 1;
	export let glowScale: number = 1;
	export let withGlow: boolean = false;
</script>

<figure class="grid place-items-center">
	{#if withGlow}
		<div
			style="transform: scale({glowScale});"
			class="radial-gradient rounded-full absolute h-[700px] w-auto aspect-square -z-50"
		></div>
	{/if}
	<img style="transform: scale({mockupScale});" {src} alt="mockup {feature}" />
</figure>
