<script setup lang="ts">
	const NavItems = [
		{ href: 'about', children: 'About me' },
		{ href: 'contact', children: 'Contact me' },
		{ href: 'projects', children: 'Projects' },
	]

	const dark = useDark()
	const toggleDarkMode = () => (dark.value = !dark.value)
</script>

<template>
	<header class="p-7 bg-white w-full dark:bg-transparent">
		<nav
			class="flex flex-row items-center justify-between container mx-auto max-w-xl font-sawarabi"
		>
			<h1 class="font-bold c-rose-500 text-xl" title="Gonzalo Molina - Portfolio">
				<NuxtLink to="/">GM</NuxtLink>
			</h1>
			<ul class="xl:flex lg:flex flex-row hidden items-center space-x-6 text-lg">
				<li
					class="hover:c-rose-500 duration-100 ease-in-out"
					v-for="{ href, children } in NavItems"
				>
					<NuxtLink :to="href">{{ children }}</NuxtLink>
				</li>
				<li>
					<button
						class="flex flex-row items-center justify-center h-8 w-8 c-rose-500"
						@click="toggleDarkMode()"
					>
						<IconSun />
						<IconMoon />
					</button>
				</li>
			</ul>
			<Dropdown :toggle-dark-mode="toggleDarkMode" />
		</nav>
	</header>
</template>
