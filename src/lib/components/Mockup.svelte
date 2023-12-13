<script lang="ts">
	export let src: string;
	export let feature: string;
	export let className: string = '';
	export let mockupScale: number = 1;
	export let withGlow: boolean = false;
</script>

<div class="flex justify-center items-center {className}">
	<img class="{withGlow && 'glow-item-200'} " style="transform: scale({mockupScale});" {src} alt="mockup {feature}" />
</div>
