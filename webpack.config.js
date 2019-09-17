const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './index.html',
	filename: './index.html'
});

module.exports = {
	entry : './src/index.js',
	output: {
		path    : path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	plugins: [htmlPlugin],
	module : {
		rules: [
			{
				test   : /\.tsx?$/,
				use    : 'ts-loader',
				exclude: /node_modules/
			},
			{
				enforce: 'pre',
				test   : /\.js$/,
				loader : 'source-map-loader'
			},
			{
				enforce: 'pre', // pre loader (https://github.com/MoOx/eslint-loader)
				test   : /\*.jsx?$/,
				exclude: /node_modules/,
				loader : 'eslint-loader'
			},
			{
				test   : /\.js$/,
				loader : 'babel-loader',
				exclude: /node_modules/,
				query  : {
					presets: ['react', 'es2015']
				}
			},
			{
				test   : /\.(png|svg|jpg|gif)$/,
				loader : 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
	/* 	externals: {
		react      : 'React',
		'react-dom': 'ReactDOM'
	} */
};
