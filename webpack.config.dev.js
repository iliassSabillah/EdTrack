const webpack = require('webpack');
const path = require('path');

module.exports = {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		path.resolve(__dirname, 'client/index')
	],
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, 'client'),
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{test: /\.jsx?$/, include: path.join(__dirname, 'client'), loaders: ['babel']},
			{test: /(\.css)$/, loaders: ['style', 'css']},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file'
      }
		]
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	}
};
