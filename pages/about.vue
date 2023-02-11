<script setup lang="ts">
	useHead({ title: 'Gonzalo Molina - About me' })
</script>
<template>
	<section
		class="h-full flex flex-col items-center space-y-4 container mx-auto max-w-xl p-5"
	>
		<h2 class="text-center text-4xl c-rose-500" title="About me">About me</h2>
		<article class="flex flex-col justify-center space-y-3 p-5 h-full mb-5">
			<p>
				I'm 21 years old and I'm a software developer based in Argentina. I've been
				studying programming since I was at high school, and I'm a big fan of it!
			</p>
			<p>My actual stack is based on these technologies:</p>
		</article>
		<StackList />
	</section>
</template>
