<script lang="ts">
	import Icon from '@iconify/svelte';
	import Mockup from '$lib/components/Mockup.svelte';
	import AppStore from '$lib/img/app-store.svg';
	import GooglePlay from '$lib/img/google-play.svg';
	import Dots from '$lib/img/dots.svg';
	import MockupHome from '$lib/img/mockup-home.png';
	import MockupCarbonCalculator from '$lib/img/mockup-carbon-calculator.png';
	import MockupCarbonFootprint from '$lib/img/mockup-carbon-footprint.png';
	import MockupCarbonMarket from '$lib/img/mockup-carbon-market.png';
	import MockupCarbonProduct from '$lib/img/mockup-carbon-product.png';
	import MockupCommunity from '$lib/img/mockup-community.png';
	import MockupCommunityChat from '$lib/img/mockup-community-chat.png';

	// $: outerWidth = 0;
	// $: innerWidth = 0;
	// $: outerHeight = 0;
	// $: innerHeight = 0;

	const problems = [
		{
			title: '65%',
			text: 'of greenhouse gases are caused by household consumption',
			source: 'Household greenhouse gases',
			href: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jiec.12371'
		},
		{
			title: '35 bn',
			text: 'ton of annual CO2 Emission ',
			source: 'ourworldindata.org',
			href: 'https://ourworldindata.org/co2-emissions#co2-emissions-by-region'
		},
		{
			title: '47%',
			text: 'share of global CO2 emissions',
			source: 'Nature Sustainability',
			href: 'https://www.nature.com/articles/s41893-021-00842-z'
		}
	];

	const features = [
		{
			title: 'Track Your Progress',
			text: 'Take measurements from the Carbon Footprint Calculator and view the results on the Data InsightDashboard periodically.',
			icon: 'eva:bar-chart-fill',
			color: 'rgb(245, 126, 35)',
			bgColor: 'rgb(245, 126, 35, .2)'
		},
		{
			title: 'Contribution to the natural environment',
			text: 'Helping environmental projects  offset carbon emissions, this can be done through the Carbon Offset Marketplace.',
			icon: 'ic:round-check-circle',
			color: 'rgb(103, 190, 185)',
			bgColor: 'rgb(103, 190, 185, .2)'
		},
		{
			title: 'Join the Community',
			text: 'Through Community Engagement can build a community that is aware and cares about the environment.',
			icon: 'fa-solid:users',
			color: 'rgb(107, 142, 80)',
			bgColor: 'rgb(107, 142, 80, .2)'
		}
	];
</script>

<!-- <svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight /> -->

<svelte:head>
	<title>Climates</title>
</svelte:head>

<div>
	<section id="overview">
		<div class="grid lg:grid-cols-2">
			<div class="grid grid-cols-1 place-items-center">
				<div class="text-center lg:text-start">
					<h1>Make a Transforming Imprint, Without Changing Your Daily Routine</h1>
					<p class="mt-2">
						Every small step can be a big contribution to our planet. In each of your daily
						decisions, there is the power to create a positive impact without having to change your
						entire lifestyle.
					</p>
					<div class="flex justify-center lg:justify-start gap-3 mt-10">
						<a href="https://www.apple.com/app-store" target="_blank">
							<img src={AppStore} alt="app store" />
						</a>
						<a href="https://play.google.com/store" target="_blank">
							<img src={GooglePlay} alt="google play" />
						</a>
					</div>
					<p class="mt-10">Join a global community from 150+ countries.</p>
				</div>
			</div>
			<Mockup
				className="lg:justify-end"
				src={MockupHome}
				feature="home"
				mockupScale={0.8}
				withGlow
			/>
		</div>
	</section>

	<section id="quotes">
		<div class="grid grid-rows-2 grid-flow-col gap-20 lg:gap-10 w-full">
			<div>
				<img src={Dots} alt="dots" class="w-44 absolute translate-y-7 left-0 -z-10" />
				<h1 class="text-primary lg:w-[50%] glow-item-50">
					"We can all feel helpless in the face of the climate crisis..."
				</h1>
			</div>
			<div class="flex justify-end">
				<h1 class="text-end lg:w-[50%] glow-item-50">
					"...however, our individual actions do matter."
				</h1>
				<div
					class="right-0 translate-y-20 lg:translate-y-12 opacity-50 absolute h-28 w-[30%] box-gradient rounded-md"
				></div>
			</div>
		</div>
	</section>

	<section id="the-problem">
		<div class="grid gap-36 lg:grid-cols-2 lg:gap-0 place-items-center w-full">
			<div class="text-center lg:text-start">
				<h1 class="text-primary">The Problem</h1>
				<p class="lg:text-2xl text-lg my-5 glow-item-50">
					Earth needs us, but carbon footprints are on the rise. Our daily choices, from
					transportation to energy consumption, contribute to climate change.
				</p>
				<h2>We may not fully grasp the extent of its impact</h2>
			</div>

			<div class="grid grid-cols-1 gap-10 text-center lg:text-end">
				{#each problems as p}
					<div class="grid grid-cols-1">
						<h1 class="glow-item-50">{p.title}</h1>
						<p class="text-3xl">{p.text}</p>
						<p>
							Source: <a class="link" target="_blank" href={p.href}>{p.source}</a>
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="how-does-climates-work">
		<div class="grid lg:grid-rows-2 gap-10 w-full place-items-center">
			<div class="text-center max-w-2xl glow-item-100 mb-20 lg:mb-0">
				<h1 class="text-primary mb-2">How does Climates work ?</h1>
				<p>
					Climates gives everyone who wishes to lower emissions, enhance lives, and take care of our
					planet with ideas and tools that are supported by science.
				</p>
			</div>

			<div class="grid lg:grid-cols-3 gap-20 lg:gap-5 justify-between w-fit">
				{#each features as f}
					<div class="text-center grid grid-cols-1 glow-item-100 mx-auto">
						<div
							class="rounded-lg w-24 h-24 grid place-items-center mb-4 mx-auto"
							style="background-color: {f.bgColor};"
						>
							<Icon icon={f.icon} class="text-5xl absolute" style="color: {f.color}" />
						</div>
						<h3>{f.title}</h3>
						<p>{f.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="feature-1">
		<div class="grid lg:grid-cols-2 w-full">
			<div class="grid place-items-center lg:pb-[30%]">
				<div class="text-center lg:text-start">
					<h1 class="text-primary mb-5">Measure Your Impact, Shape Our Future</h1>
					<p>
						Empower change with knowledge. Our Carbon Footprint Calculator lets you measure your
						daily impact on the planet. Understand, adapt, and take meaningful steps towards a
						sustainable future.
					</p>
				</div>
			</div>
			<Mockup
				className="lg:justify-end"
				src={MockupCarbonCalculator}
				feature="carbon calculator"
				mockupScale={0.7}
				withGlow
			/>
		</div>
	</section>

	<section id="feature-2">
		<div class="grid lg:grid-cols-2 w-full">
			<Mockup
				className="lg:justify-start"
				src={MockupCarbonFootprint}
				feature="carbon footprint"
				mockupScale={0.7}
				withGlow
			/>
			<div class="grid place-items-center order-first lg:order-last lg:pb-[30%]">
				<div class="text-center lg:text-end">
					<h1 class="text-primary mb-5">Illuminate Your Impact</h1>
					<p>
						Gain clarity, drive change. Our Data Insight Dashboard transforms your eco-habits into
						visual wisdom. See, understand, and chart your journey to a more sustainable lifestyle.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="feature-3">
		<div class="grid lg:grid-cols-2 w-full">
			<div class="grid place-items-center lg:pt-[30%]">
				<div class="text-center lg:text-start">
					<h1 class="text-primary mb-5">Balance Your Impact, Spark Global Change</h1>
					<p>
						Explore the Carbon Offset Marketplace and be part of a global movement towards a
						sustainable future. Every choice counts, make yours impactful.
					</p>
				</div>
			</div>
			<div class="">
				<Mockup
					className="lg:justify-end"
					src={MockupCarbonMarket}
					feature="carbon market"
					mockupScale={0.7}
					withGlow
				/>
				<!-- <div class="hidden lg:flex lg:absolute translate-x-[200px] translate-y-[50px] z-10">
					<Mockup src={MockupCarbonProduct} feature="carbon product" mockupScale={0.7} />
				</div> -->
			</div>
		</div>
	</section>

	<section id="feature-4">
		<div class="grid lg:grid-cols-2 w-full">
			<div class="">
				<Mockup
					className="lg:justify-start"
					src={MockupCommunity}
					feature="carbon market"
					mockupScale={0.7}
					withGlow
				/>
				<!-- <div class="hidden lg:flex lg:absolute translate-x-[200px] translate-y-[50px] z-10">
					<Mockup src={MockupCommunityChat} feature="carbon product" mockupScale={0.7} />
				</div> -->
			</div>
			<div class="grid place-items-center order-first lg:order-last lg:pt-[30%]">
				<div class="text-center lg:text-end">
					<h1 class="text-primary mb-5">Unite for a Greener Tomorrow</h1>
					<p>
						Together, we thrive. Our Community Engagement feature connects you with like-minded
						individuals, fostering support, sharing experiences, and driving collective action for a
						sustainable and greener future.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
