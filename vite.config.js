import path from 'path'

import {defineConfig} from 'vite'
import inject from "@rollup/plugin-inject";
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';



export default defineConfig({
    plugins: [
        inject({   // => that should be first under plugins array
            $: 'jquery',
            jQuery: 'jquery',
        }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: [['@babel/preset-env', { targets: { browsers: 'defaults, ie >= 11' } }]],
            // 可以通过exclude过滤掉不需要转换的文件
            exclude: 'node_modules/**',
            // 确保Babel可以应用于.ts/.tsx文件
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']
        })
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
        minify: false,
        lib: {
            entry: './lib/main.js',
            name: 'CallManager',
            fileName: (format) => {
                if(format==="cjs"){
                    return `CallManager.cjs`
                }else if(format==="es"){
                    return `CallManager.js`
                }else{
                    return `CallManager.${format}.js`
                }
            }, // 这样可以为不同的格式指定不同的文件名
            formats: ['umd', 'es', 'cjs']
        },
        rollupOptions: {
            minifyInternalExports: true
        }

    }
})
