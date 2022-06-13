import ts from 'rollup-plugin-typescript2'; //解析ts语法的插件
import {nodeResolve} from '@rollup/plugin-node-resolve'; //解析第三方模块
import server from 'rollup-plugin-serve';
import path from 'path';


export default {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, 'dist/bundle.js'),
        sourcemap: true,
        format: 'iife' //生成一个自执行函数 
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        ts({ tsconfig: path.resolve(__dirname, 'tsconfig.json') }),
        server({
            openPage: '/public/index.html',
            contentBase: '',
            port: 3000,
            open:true
        })
    ]

}
