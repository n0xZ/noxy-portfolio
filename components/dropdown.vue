<script setup lang="ts">
	import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
	type Props = {
		toggleDarkMode: () => boolean
	}
	const props = defineProps<Props>()
</script>

<template>
	<Menu as="div" className=" relative xl:hidden lg:hidden  ">
		<MenuButton
			class="w-full flex flex-row justify-center items-center space-x-2 rounded-md text-sm font-medium c-neutral-500 dark:c-neutral-50 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
		>
			<IconMenu />
		</MenuButton>
		<transition
			enter="transition ease-out duration-100"
			enterFrom="transform opacity-0 scale-95"
			enterTo="transform opacity-100 scale-100"
			leave="transition ease-in duration-75"
			leaveFrom="transform opacity-100 scale-100"
			leaveTo="transform opacity-0 scale-95"
		>
			<MenuItems
				className="absolute right-0 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			>
				<div className="px-1 py-1 ">
					<MenuItem v-slot="active">
						<NuxtLink
							:class="` ${
								active ? 'c-rose-500' : 'c-rose-900'
							} group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2 `"
							to="/about"
						>
							<IconContactMe />
							<span>About me</span></NuxtLink
						>
					</MenuItem>
					<MenuItem v-slot="active">
						<NuxtLink
							:class="` ${
								active ? 'c-rose-500' : 'c-rose-900'
							} group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2 `"
							to="/contact"
						>
							<IconContactMedia />
							<span>Contact me</span></NuxtLink
						>
					</MenuItem>
					<MenuItem v-slot="active">
						<NuxtLink
							:class="` ${
								active ? 'c-rose-500' : 'c-rose-900'
							} group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2 `"
							to="/projects"
						>
							<IconContactProject />
							<span>Projects</span></NuxtLink
						>
					</MenuItem>

					<MenuItem v-slot="active">
						<button
							:class="` ${
								active ? 'c-rose-500' : 'c-rose-900'
							} group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2 `"
							@click="props.toggleDarkMode()"
						>
							<IconSun />
							<IconMoon />
							<span>Change theme</span>
						</button>
					</MenuItem>
				</div>
			</MenuItems>
		</transition>
	</Menu>
</template>
