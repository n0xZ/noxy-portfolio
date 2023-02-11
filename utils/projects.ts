export type Project = {
	title: string
	description: string
	repository: string
	siteUrl: string
	image: {
		width: number
		height: number
		url: string
	}
}

export const getProjects = (): Project[] => [
	{
		title: 'Mockxny',
		description:
			'Shopping cart , where the user can select its products, an perform its payment.',
		repository: 'https://github.com/n0xZ/mockxny',
		siteUrl: 'https://mockxny.vercel.app/',
		image: {
			url: 'https://media.graphassets.com/1AWYHkdTWYlj1JlLRZag',
			width: 1350,
			height: 767,
		},
	},
	{
		title: 'React Quiz',
		description:
			'Quiz that contains differents questions from differents genres, such as Entertainment, Science, History, etc.',
		repository: 'https://github.com/n0xZ/react-quiz',
		siteUrl: 'https://quiz-react-typescript.vercel.app/',
		image: {
			url: 'https://media.graphassets.com/JxgcbnnQStq6ghF9RFuR',
			width: 1679,
			height: 1049,
		},
	},
	{
		title: 'Guess Pokemon',
		description:
			'Pokemon game, where the user must visualize an image from an Pokemon, and must guess which one is it.',
		repository: 'https://github.com/n0xZ/guess-pokemon-solid/',
		siteUrl: 'https://guess-pokemon-solid.vercel.app/',
		image: {
			url: 'https://media.graphassets.com/ICfXpg6USQu1NeHmXCgO',
			width: 1679,
			height: 1049,
		},
	},
	{
		title: 'Giphyx',
		description:
			'Web-app where you can find differents gifs from Giphy, and save your favourite ones.',
		repository: 'https://github.com/n0xZ/giphyx',
		siteUrl: 'https://giphyx.vercel.app/',
		image: {
			url: 'https://media.graphassets.com/cvl6brQFSsu97OKfnge1',
			width: 1679,
			height: 1049,
		},
	},
	{
		title: 'Fyx',
		description: 'Web-app, where you can find information about Studio Ghibli',
		repository: 'https://github.com/n0xZ/fyx/',
		siteUrl: 'https://fyx-dev.netlify.app/',
		image: {
			url: 'https://media.graphassets.com/dukEqYLS0ZwibSAeb1TA',
			width: 1679,
			height: 1049,
		},
	},
	{
		title: 'Herox',
		description:
			'Web-app, where you can find differents heroes from DC/Marvel, create an team based on heroes from those comics.',
		repository: 'https://github.com/n0xZ/herox',
		siteUrl: 'https://herox-beta.vercel.app/',
		image: {
			url: 'https://media.graphassets.com/2bout24KTTebiwS4XaMC',
			width: 1679,
			height: 1049,
		},
	},
	{
		title: 'Notyx',
		description:
			"Web-app where you can create an collection of notes, so you don't need to handle those one by .txt.",
		repository: 'https://github.com/n0xZ/notyx',
		siteUrl: 'https://notyx.vercel.app/',
		image: {
			url: 'https://media.graphassets.com/APiBxldQxieNhvVbiNEH',
			width: 1679,
			height: 1049,
		},
	},
	{
		title: 'Codyx',
		description:
			'Web-app, where you can create your recommendations, such as Movie, Anime, Manga, etc.',
		image: {
			url: 'https://media.graphassets.com/lVq0SDZwTWGMXmiquZeF',
			height: 1049,
			width: 1679,
		},
		repository: 'https://github.com/n0xZ/noxy-codyx',
		siteUrl: 'https://noxy-codyx.vercel.app/',
	},
	{
		title: 'Nexy',
		description: 'Website, where you can create your projects',
		image: {
			width: 1679,
			height: 1049,
			url: 'https://media.graphassets.com/uMHN7oqgRsy7kyiHNE9u',
		},
		repository: 'https://github.com/n0xZ/nexy/',
		siteUrl: 'https://noxy-nexy.netlify.app/',
	},

	{
		title: 'Moden',
		description: 'Website where you can get an weather based your located',
		image: {
			url: 'https://media.graphassets.com/Xlfwzms6SAiLLOEDQmhw',
			width: 1679,
			height: 1049,
		},
		repository: 'https://github.com/n0xZ/moden',
		siteUrl: 'https://noxy-moden.netlify.app/',
	},
]
