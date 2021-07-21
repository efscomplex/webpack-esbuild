const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
//const Dotenv = require('dotenv-webpack')
const BASE_DIR = path.join(__dirname, './src')
const DIST_DIR = path.join(__dirname, './dist')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	output: {
		filename: 'index.js',
		path: DIST_DIR
	},
	devServer: {
		port: process.env.PORT || 8080
	},
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
		//new Dotenv(),
		new HTMLWebpackPlugin({ template: './src/index.html' }),
		new ModuleFederationPlugin({
			filename: 'web-app'
			/* remotes: {
				page: 'about@http://localhost:3001/aboutEntry.js'
			},
			exposes: {
				'./About': './src/components/About'
			},
			shared: require('./package.json').dependencies */
		})
	]
}
