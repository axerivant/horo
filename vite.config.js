// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'main.ts'),
			name: 'horo',
			fileName: 'horo'
		},
		rollupOptions: {
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
})
