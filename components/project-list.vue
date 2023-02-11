<script setup lang="ts">
	import { Project } from '~~/utils/projects'

	type Props = {
		projects: Project[]
	}
	const props = defineProps<Props>()
</script>

<template>
	<article
		class="min-h-screen h-full grid grid-rows-4 container mx-auto gap-7 w-full xl:p-0 p-2"
	>
		<aside
			v-for="{ description, image, repository, title, siteUrl } in props.projects"
			class="w-full h-full p-4 rounded-lg border-l-4 border-rose-500 flex flex-col justify-center space-y-2"
		>
			<nuxt-img
				format="webp"
				class="aspect-video rounded-lg"
				:src="image.url"
				:alt="description"
				:width="image.width"
				:height="image.height"
			/>
			<h4 class="text-center text-2xl mt-6 c-rose-500">{{ title }}</h4>
			<p class="pl-3">{{ description }}</p>
			<div class="flex flex-row justify-center items-center space-x-5 text-sm pt-3">
				<a
					:href="repository"
					class="px-4 py-4 flex flex-row items-center justify-center space-x-3 rounded-lg bg-rose-500 hover:bg-rose-700 duration-100 ease-in-out c-neutral-50 w-42"
				>
					<icon-contact-github />
					<span>View repository</span>
				</a>
				<a
					:href="siteUrl"
					target="_blank"
					class="px-4 py-4 flex flex-row items-center justify-center space-x-3 rounded-lg bg-rose-500 hover:bg-rose-700 duration-100 ease-in-out c-neutral-50 w-36"
				>
					<icon-stack-thunder />
					<span>View page</span>
				</a>
			</div>
		</aside>
	</article>
</template>
