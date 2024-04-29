import path from 'path'

import {defineConfig} from 'vite'
import inject from "@rollup/plugin-inject";
export default defineConfig({
    plugins: [
        inject({   // => that should be first under plugins array
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        hot: true
    },
    build: {
        lib: {
            entry: './lib/main.js',
            name: 'CallManager',
            fileName: (format) => `CallManager.${format}.js`, // 这样可以为不同的格式指定不同的文件名
            formats: ['umd', 'es', 'cjs']
        },
        rollupOptions: {
            minifyInternalExports: true,
        }

    }
})
