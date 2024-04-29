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
            fileName: (format) => `CallManager.${format}.js`, // ��������Ϊ��ͬ�ĸ�ʽָ����ͬ���ļ���
            formats: ['umd', 'es', 'cjs']
        },
        rollupOptions: {
            minifyInternalExports: true,
        }

    }
})
