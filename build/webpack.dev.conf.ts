import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import FriendlyErrorsPlugin, {Severity} from 'friendly-errors-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack, {Configuration} from 'webpack'

function resolve(dir: string): string {
  return path.join(__dirname, '..', dir)
}

const PORT = 9942

const config: Configuration = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: ['./src/main.ts']
  },
  output: {
    filename: 'static/[name].[chunkhash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.less'],
    // alias: {
    //   '@': resolve('lit')
    // }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          'cache-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: resolve('tsconfig.json'),
              compilerOptions: {
                module: 'commonjs',
                target: 'es2016'
              }
            }
          }
        ],
        include: [resolve('src'), resolve('types')],
        exclude: [resolve('node_modules')]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new ForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      excludeWarnings: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[chunkhash:8].css',
      chunkFilename: '[id].css'
    }),

    new HtmlWebpackPlugin({
      title: 'Math',
      filename: 'index.html',
      chunks: ['main'],
      template: path.join(__dirname, 'index.html'),
      inject: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://127.0.0.1:${PORT}`],
        notes: []
      },
      onErrors(_: Severity, errors: string) {
        console.error(errors)
      }
    })
  ],
  optimization: {
    minimize: false
    // namedModules: true,
    // noEmitOnErrors: true,
  },
  // mode: "development",
  devtool: 'eval-source-map',
  // node: {
  // 	setImmediate: false,
  // 	dgram: "empty",
  // 	fs: "empty",
  // 	net: "empty",
  // 	tls: "empty",
  // 	child_process: "empty",
  // },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: '/index.html'
        }
      ]
    },
    hot: true,
    contentBase: resolve('./dist'),
    // contentBase: false,
    host: '0.0.0.0',
    compress: true,
    port: PORT,
    overlay: {warnings: false, errors: true},
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: true
    },
    disableHostCheck: true
  }
}
export default config
