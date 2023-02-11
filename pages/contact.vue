<script setup lang="ts">
	useHead({ title: ' Gonzalo Molina - Contact' })
</script>
<template>
	<section
		class="h-full flex flex-col items-center space-y-4 container mx-auto max-w-xl p-5"
	>
		<h2 class="text-center text-4xl c-rose-500">Contact me</h2>

		<p class="mb-3">You can contact me by over these medias:</p>

		<aside
			class="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 place-items-center gap-8 container mx-auto w-full max-w-xl"
		>
			<a
				class="flex flex-col justify-center items-center space-y-3 border-2 rounded-lg border-rose-300 dark:border-rose-900 p-7 w-28 hover:opacity-70 duration-150 ease-in-out"
				href="mailto:molinagonzalo33@gmail.com"
			>
				<IconContactGmail />
				<span>Gmail</span>
			</a>
			<a
				class="flex flex-col justify-center items-center space-y-3 border-2 rounded-lg border-rose-300 dark:border-rose-900 p-7 w-28 hover:opacity-70 duration-150 ease-in-out"
				href="https://www.linkedin.com/in/gonzalo-molina-153918217/"
				target="_blank"
				rel="noreferrer"
			>
				<IconContactLinkedin />
				<span>Linkedin</span>
			</a>
			<a
				class="flex flex-col justify-center items-center space-y-3 border-2 rounded-lg border-rose-300 dark:border-rose-900 p-7 w-28 hover:opacity-70 duration-150 ease-in-out"
				href="https://github.com/n0xZ"
				target="_blank"
				rel="noreferrer"
			>
				<IconContactGithub />
				<span>Github</span>
			</a>
		</aside>
	</section>
</template>
