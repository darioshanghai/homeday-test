const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Homeday Test'
		}),
		new CleanWebpackPlugin(['dist'])
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
};
