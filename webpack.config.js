const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './lib',
	},
	plugins: [new CleanWebpackPlugin(['lib'])],
	output: {
		filename: '[name].bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'lib'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
