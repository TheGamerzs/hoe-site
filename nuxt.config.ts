import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	modules: ["nuxt-graphql-client"],

	gql: {
		watch: true,
		autoImport: true
	},

	runtimeConfig: {
		public: {
			GQL_HOST: "http://localhost:3001/graphql"
		}
	},

	srcDir: "src/",

	buildDir: "dist/",

	head: {
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" }
		]
	}
});
