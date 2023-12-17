<script lang="ts">
	import PolarBear from '$lib/img/about-polar-bear.jpg';
	import Mountain from '$lib/img/about-mountain.jpg';
	import Instagram from '$lib/img/instagram.svg';
	import Linkedin from '$lib/img/linkedin.svg';
	import Wisnu from '$lib/img/team-wisnu.png';
	import Wakhid from '$lib/img/team-wakhid.png';
	import Afif from '$lib/img/team-afif.png';
	import Bimo from '$lib/img/team-bimo.png';

	const teams = [
		{
			name: 'Putu Wisnu Wirayuda Putra',
			ig: 'https://www.instagram.com/puutuuu_/',
			linkedin: 'https://www.linkedin.com/in/wisnuwirayuda/',
			role: 'Hacker',
			photo: Wisnu
		},
		{
			name: 'Afif Zaky Muhana',
			ig: 'https://www.instagram.com/afifzaky/',
			linkedin: 'https://www.linkedin.com/in/afifzakymuhana/',
			role: 'Hustler',
			photo: Afif
		},
		{
			name: 'Bimo Agung Fahrizky',
			ig: 'https://www.instagram.com/bimoagung_/',
			linkedin: 'https://www.linkedin.com/in/bimoagungfahrizky/',
			role: 'Handler',
			photo: Bimo
		},
		{
			name: 'Wakhid Yusuf Sri Widodo',
			ig: 'https://www.instagram.com/wakhidy.id/',
			linkedin: 'https://www.linkedin.com/in/wakhid-yusuf-541914217/',
			role: 'Hipster',
			photo: Wakhid
		}
	];
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<div>
	<section id="about-us">
		<div class="grid lg:grid-cols-2 mb-40 lg:mb-0">
			<div class="lg:mx-10 my-auto text-center lg:text-start mb-7 lg:mb-auto">
				<h1 class="mb-5">About Us</h1>
				<p>
					Climates emerged from the collaborative vision of four innovative developers hailing from
					Telkom University's Department of Information Systems. United by a passion for sustainable
					living, they envisioned an app that transcends boundaries, making eco-conscious choices
					accessible to all.
				</p>
			</div>
			<div class="sm:p-10 mix-h-fit place-items-center grid">
				<img
					title="Photo by Pascal _photography"
					src={PolarBear}
					alt="about us"
					class="w-full h-full aspect-video object-cover rounded-xl lg:rounded-3xl glow-item-100"
				/>
			</div>
		</div>

		<div class="grid lg:grid-cols-2">
			<div class="sm:p-10 mix-h-fit place-items-center grid">
				<img
					title="Photo by Jaime Reimer"
					src={Mountain}
					alt="our vision"
					class="w-full h-full aspect-video object-cover rounded-xl lg:rounded-3xl glow-item-100"
				/>
			</div>
			<div
				class="lg:mx-10 my-auto text-center lg:text-end order-first lg:order-last mb-7 lg:mb-auto"
			>
				<h1 class="mb-5">Our Vision</h1>
				<p>
					To create a more sustainable future by empowering individuals and businesses to make
					eco-friendly choices in their daily lives.
				</p>
			</div>
		</div>
	</section>

	<section id="our-mission">
		<div class="max-w-3xl text-center">
			<h1 class="mb-5">Our Mission</h1>
			<p>
				At Climates, we believe in the power of every individual to contribute to a sustainable
				future. Our mission is to empower users with tools that measure, understand, and reduce
				their carbon footprint. We aim to foster a global community committed to positive
				environmental change.
			</p>
		</div>
	</section>

	<section id="the-team">
		<div class="max-w-3xl text-center">
			<h1 class="mb-5">Meet The Team</h1>
			<p>
				Our dynamic team of developers brings a wealth of knowledge and expertise from Telkom
				University. Rooted in the field of Information Systems, they share a common goal: to
				transform individual actions into a collective force for environmental good.
			</p>
		</div>
		<div
			class="mx-10 sm:mx-16 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 lg:gap-5 gap-10 max-w-5xl mt-20 glow-item-300"
		>
			{#each teams as t}
				<div
					class="card bg-base-100 bg-opacity-70 w-full h-full lg:hover:shadow-md group select-none"
				>
					<figure>
						<div
							class="bg-team w-full h-full aspect-square transition-all lg:grayscale group-hover:grayscale-0"
						>
							<img
								class="stroke-white object-coverh-auto w-full lg:translate-y-5 group-hover:translate-y-0"
								src={t.photo}
								alt={t.name}
							/>
						</div>
					</figure>
					<div class="m-auto grid grid-cols-1 text-center py-5 px-2 gap-3">
						<p class="opacity-50">{t.role}</p>
						<h2 class="card-title mx-auto m-auto">{t.name}</h2>
						<div class="flex justify-center">
							<div class="grid grid-cols-2 gap-2 w-fit">
								<a target="_blank" href={t.ig} class="h-6 w-6 rounded-md">
									<img class="rounded-md" src={Instagram} alt="{t.name}'s' instagram" />
								</a>
								<a target="_blank" href={t.linkedin} class="h-6 w-6 rounded-md">
									<img class="rounded-md" src={Linkedin} alt="{t.name}'s' linkedin" />
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
