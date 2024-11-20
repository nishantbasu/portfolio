import resolve from '@rollup/plugin-node-resolve';
import  terser  from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import fileSize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import * as path from 'path';
import purgecss from '@fullhuman/postcss-purgecss';
import importLitHtml from 'rollup-plugin-import-lithtml';
import minifyHTML from 'rollup-plugin-minify-html-literals';

export default {
	input: './src/index.ts',
	output: {
		file: 'dist/portfolio-nishant.js',
		format: 'esm',
		sourcemap: true
	},
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify( 'production' ),
			preventAssignment: true,
		}),
		minifyHTML.default(),
		importLitHtml({ include: '**/**/*.html' }),
		resolve(),
		postcss({
			config: {
				path: './postcss.config.mjs',
			},
			inject: false,
			modules: false,
			use: [[
				'sass',
				{
					includesPaths : [path.resolve('node_modules')]
				}
			]],
			minimize : true,
			plugins: [
				purgecss({
					content : ['src/**/*.ts', 'src/**/*.js', 'src/**/*.html']
				}),
			]
		}),
		fileSize(),
		typescript({tsconfig: './tsconfig.json'}),
		terser()
	]
};