/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
var webpack = require( 'webpack' );
var path = require( 'path' );
var OpenBrowserPlugin = require( 'open-browser-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {

  output: {
    filename: 'main.js',
    publicPath: '/assets',
    path: path.resolve( __dirname, 'dist/assets/' ),
	hot: true
  },

  debug: true,
  devtool: 'sourcemap',
  entry: [
		'webpack-dev-server/client?http://0.0.0.0:3500',
		'webpack/hot/only-dev-server',
		'./src/WebApp.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  eslint: {
      configFile: path.join( __dirname, '.eslintrc' )
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/src/styles',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/'
    }
  },
  module: {
	preLoaders: [{
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		loader: 'eslint-loader'
	}],
	loaders: [{
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		loader: 'react-hot!babel-loader'
	}, {
		test: /\.scss/,
		loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader?module!sass-loader?outputStyle=expanded!cssnext-loader' )
	}, {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader?module!cssnext-loader' )
	}, {
		test: /\.(png|jpg|woff|woff2)$/,
		loader: 'url-loader?limit=8192'
	}]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
	new OpenBrowserPlugin( { url: 'http://localhost:3500/webpack-dev-server/' } ),
	new ExtractTextPlugin( path.join( __dirname, '/dist/assets/styles.css' ) )
  ]

};
