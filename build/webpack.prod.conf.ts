import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin'
import path from 'path'
import webpack, {Configuration} from 'webpack'

function resolve(dir: string): string {
  return path.join(__dirname, '..', dir)
}

const config: Configuration = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: ['./src/main.less', './src/main.ts']
  },
  output: {
    library: 'jinming1937',
    filename: 'static/[name].[chunkhash:8].js',
    publicPath: '',
    // libraryTarget: "var",
    path: resolve('dist')
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
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    loose: true,
                    targets: {
                      browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
                    }
                  }
                ]
              ],
              plugins: [
                [
                  '@babel/plugin-proposal-class-properties',
                  {
                    loose: false
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve('tsconfig.json'),
              compilerOptions: {
                module: 'EsNext',
                target: 'es2018'
              }
            }
          }
        ],
        include: [resolve('src')]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Math',
      filename: 'index.html',
      minify: true,
      chunks: ['main'],
      template: path.join(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[chunkhash:8].css',
      chunkFilename: '[id].css'
    }),

    new OptimizeCSSPlugin()
  ],
  optimization: {
    minimize: true
    // namedModules: false,
    // noEmitOnErrors: true,
  }
}

export default config
