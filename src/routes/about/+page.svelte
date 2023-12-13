<script lang="ts">
	import PolarBear from '$lib/img/about-polar-bear.jpg';
	import Mountain from '$lib/img/about-mountain.jpg';
	import Wisnu from '$lib/img/team-wisnu.jpg';
	import Wakhid from '$lib/img/team-wakhid.jpeg';
	import Afif from '$lib/img/team-afif.jpeg';
	import Bimo from '$lib/img/team-bimo.jpeg';

	const teams = [
		{
			name: 'Putu Wisnu Wirayuda Putra',
			ig: 'https://www.instagram.com/puutuuu_/',
			role: 'Hacker',
			photo: Wisnu
		},
		{
			name: 'Afif Zaky Muhana',
			ig: 'https://www.instagram.com/afifzaky/',
			role: 'Hustler',
			photo: Afif
		},
		{
			name: 'Bimo Agung Fahrizky',
			ig: 'https://www.instagram.com/bimoagung_/',
			role: 'Handler',
			photo: Bimo
		},
		{
			name: 'Wakhid Yusuf S.W',
			ig: 'https://www.instagram.com/wakhidy.id/',
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
				<div class="card card-bordered bg-base-100 bg-opacity-70 w-full h-full shadow-md group">
					<figure>
						<a href={t.ig} target="_blank">
							<img
								class="object-cover aspect-square h-auto w-full transition-all group-hover:scale-125 group-hover:opacity-50"
								src={t.photo}
								alt={t.name}
							/>
						</a>
					</figure>
					<div class="m-auto grid grid-cols-1 text-center py-5 px-2 gap-3">
						<p class="opacity-50">{t.role}</p>
						<h2 class="card-title mx-auto m-auto">{t.name}</h2>
						<div class="flex justify-center">
							<div class="grid grid-cols-3 gap-2 w-fit">
								{#each Array(3) as _, index (index)}
									<div class="h-5 w-5 rounded-md bg-gray-300"></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
