const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { ESBuildPlugin } = require('esbuild-loader')
const BASE_DIR = path.join(__dirname, './src')
const DIST_DIR = path.join(__dirname, './dist')

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	output: {
		filename: 'index.js',
		path: DIST_DIR
	},
	//devtool: 'eval',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'tsx',
					target: 'es2015'
				},
				include: [BASE_DIR],
				exclude: [/node_modules/]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		modules: [BASE_DIR, 'node_modules']
	},
	plugins: [
		new ESBuildPlugin(),
		new HTMLWebpackPlugin({ template: './src/index.html' })
	]
}
