const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Homeday Test',
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([{
				from: 'src/templates',
				to: 'templates/[name].[ext]',
				toType: 'template'
		}])
		],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
};
