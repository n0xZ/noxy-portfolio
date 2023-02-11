<template>
	<main class="h-full w-full container mx-auto max-w-xl font-sawarabi">
		<section class="container mx-auto w-full space-y-5 mt-2 p-4">
			<aside class="flex flex-col justify-center items-center">
				<img
					class="rounded-full border-2 border-rose-500"
					width="100"
					height="100"
					src="~/assets/me.webp"
					alt="Image from me"
				/>
				<h2 class="text-3xl font-semibold text-center c-rose-500">
					Gonzalo Molina
				</h2>
				<p class="text-center c-neutral-400 text-md">Software developer</p>
			</aside>
			<aside
				class="w-full p-3 rounded-md dark:border-dark-500 border-2 border-transparent bg-black dark:bg-transparent c-white text-center hover:opacity-80 font-bold dark:hover:opacity-70 duration-150 ease-in-out"
			>
				<NuxtLink to="/about">About me</NuxtLink>
			</aside>
			<aside
				class="w-full p-3 rounded-md dark:border-dark-500 border-2 border-transparent bg-black dark:bg-transparent c-white text-center hover:opacity-80 font-bold dark:hover:opacity-70 duration-150 ease-in-out"
			>
				<NuxtLink to="/contact">Contact me</NuxtLink>
			</aside>
			<aside
				class="w-full p-3 rounded-md dark:border-dark-500 border-2 border-transparent bg-black dark:bg-transparent c-white text-center hover:opacity-80 font-bold dark:hover:opacity-70 duration-150 ease-in-out"
			>
				<NuxtLink to="/projects">My current projects</NuxtLink>
			</aside>
		</section>
	</main>
</template>
