const path = require('path');

module.exports = {
	entry: './src/app.js',
	output:{
		path: path.join(__dirname, 'public'),
		filename:'bundle.js'
	},
	module:{
		rules:[{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool:'cheap-module-eval-source-map',//Route the where the eror took place (source map
	devServer:{
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true // When first time using client side routing, program needs
		//to route to server first then the second time will not need to. When routing to the 
		//server for the frist time, it will link to index.html
	}
};