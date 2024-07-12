import { defineConfig } from "cypress";

const baseUrl = process.env.FRONTEND_URL || "http://localhost:3000";

export default defineConfig({
	e2e: {
		baseUrl,
		// setupNodeEvents(on, config) {
		// 	// implement node event listeners here
		// },
	},
});
