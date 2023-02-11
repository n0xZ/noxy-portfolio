// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/image-edge', '@unocss/nuxt', '@vueuse/nuxt'],
	css: ['@unocss/reset/antfu.css'],
	unocss: {
		webFonts: {
			provider: 'google',
			fonts: {
				sawarabi: [
					{ name: 'Sawarabi Gothic', weights: [400] },
					{ name: 'sans-serif', provider: 'none' },
				],
			},
		},
	},
	sourcemap: {
		server: true,
		client: false,
	},
	app: {
		head: {
			title: 'Gonzalo Molina',
			link: [
				{ rel: 'icon', type: 'image/svg+xml', href: '~/assets/svg/nuxt-icon.svg' },
			],
		},
	},
})
