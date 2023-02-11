<script  setup lang="ts">

import { getProjects } from '~~/utils/projects';
const actualProjects = getProjects()
useHead({ title: 'Gonzalo Molina - My projects' })
</script>
<template>
	<section
		class="min-h-screen h-full flex flex-col justify-center items-center space-y-3 container mx-auto max-w-3xl"
		id="projects"
	>
		<h4 class="text-center text-4xl c-rose-500" title="Projects">My projects</h4>
		<ProjectList :projects="actualProjects" />
	</section>
</template>
