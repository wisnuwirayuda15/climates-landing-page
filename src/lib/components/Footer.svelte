<script lang="ts">
	import Icon from '@iconify/svelte';
	import Logo from '$lib/icon/logo.png';
</script>

<div class="footer footer-center p-4">
	<div class="flex justify-between w-full">
		<a href="/" class="flex items-center gap-2 w-full">
			<img src={Logo} alt="logo" class="w-10 h-auto" />
			<h3 class="text-primary tracking-[2px] lg:tracking-[5px] hidden sm:block">CLIMATES</h3>
		</a>
		<a href="https://github.com/wisnuwirayuda15/climates-landing-page" target="_blank" class="w-full h-full hidden lg:block">
			<Icon icon="mdi:github" width="30" class="w-full text-primary" />
		</a>
		<div class="w-full flex justify-end">
			<div class="text-end">
				<p>© 2023 Climates Team</p>
				<p>All rights reserved</p>
			</div>
		</div>
	</div>
</div>
