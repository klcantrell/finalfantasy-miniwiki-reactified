const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ImageminPlugin = require('imagemin-webpack-plugin').default,
      MinifyPlugin = require("babel-minify-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
	entry: {
		app: path.join(__dirname, 'src/js/index.js')
	},
	output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    // publicPath: 'https://s3.us-east-2.amazonaws.com/kals-portfolio-assets/ffminiwiki/',
		filename: "[name].bundle.js"
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    }
  },
	module: {
    rules: [
			{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader',
	      }
	    },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'responsive-loader',
          options: {
            sizes: [240, 150],
            // placeholder: true,
            // placeholderSize: 50,
            name: 'images/[name]-[width].[ext]'
          }
        }
      },
    ]
  },
  optimization: {
    minimizer: [new MinifyPlugin({}, {})],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('src/index.html'),
      inject: false,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    }),
    new ImageminPlugin({test: /\.(png|jpg|gif)$/}),
    new MinifyPlugin({}, {
      exclude: /node_modules/
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ]
}