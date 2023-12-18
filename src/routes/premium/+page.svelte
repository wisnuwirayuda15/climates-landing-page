<script lang="ts">
	import Eco from '$lib/img/premium-eco.jpg';
	import Green from '$lib/img/premium-green.jpg';
	import Hero from '$lib/img/premium-hero.jpg';
	import Champion from '$lib/img/premium-champion.jpg';

	let hover: boolean = false;

	const idr = (number: number): string => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'IDR'
		}).format(number);
	};

	const plans = [
		{
			name: 'Eco Starter',
			cover: Eco,
			price: idr(70000),
			features: [
				'Personal carbon footprint monitoring.',
				'Access to sustainable living tips.',
				'Weekly updates via newsletter'
			]
		},
		{
			name: 'Green Enthusiast',
			cover: Green,
			price: idr(150000),
			features: [
				'All features from the Eco Starter package.',
				'Comparison of carbon footprints with other users.',
				'Access to personalized sustainability plans.',
				'Monthly reports.'
			]
		},
		{
			name: 'Climate Hero',
			cover: Hero,
			price: idr(200000),
			features: [
				'All features from the Green Enthusiast package.',
				'In-depth carbon footprint analysis and custom recommendations.',
				'Participation in sustainability projects.',
				'Priority customer support.'
			]
		},
		{
			name: 'Carbon Champion',
			cover: Champion,
			price: idr(300000),
			features: [
				'All features from the Climate Hero package.',
				'Detailed tracking of carbon for travel and lifestyle.',
				'Personal consultations with environmental experts.',
				'Exclusive access to sustainability events and webinars.'
			]
		}
	];
</script>

<svelte:head>
	<title>Premium</title>
</svelte:head>

<div>
	<section id="premium">
		<h1 class="text-primary text-center mb-10">Premium Benefit</h1>
		<div
			on:mouseenter={() => (hover = true)}
			on:mouseleave={() => (hover = false)}
			class="mx-10 sm:mx-16 lg:gap-5 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl glow-item-400"
		>
			{#each plans as p}
				<div
					class="card card-bordered bg-base-100 bg-opacity-60 w-full h-full lg:hover:shadow-md transition-all lg:hover:scale-105 select-none {hover &&
						'lg:hover:opacity-100 lg:opacity-50'}"
				>
					<figure>
						<img
							title="Image from Pixabay"
							class="object-cover aspect-video h-auto w-full transition-all"
							src={p.cover}
							alt={p.name}
						/>
					</figure>
					<div class="card-body p-5 text-center">
						<h2 class="card-title mx-auto text-primary m-auto">{p.name}</h2>
						<div class="flex items-center justify-center">
							<h3 class="font-bold">{p.price}</h3>
							<span class="text-xs lg:text-sm opacity-50">/month</span>
						</div>
						<div class="text-start text-sm h-full">
							<p class="mt-5">Feature:</p>
							<ul class="list-disc ml-5 py-3">
								{#each p.features as f}
									<li><p>{f}</p></li>
								{/each}
							</ul>
						</div>
						<div class="card-actions">
							<button class="btn btn-primary btn-sm btn-block">Buy</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
