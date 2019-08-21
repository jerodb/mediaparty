// NOTE: webpack v4+ will minify your code by default in production mode.
// import DashboardPlugin from 'webpack-dashboard/plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackPugPlugin from 'html-webpack-pug-plugin'
import webpack from 'webpack'
import path from 'path'
import {
  GA_TRACKING_ID, HOST, LANG_DEFAULT, NODE_ENV, PORT, ROOT_DIR, SCHED_URL
} from './config'

const host = HOST || 'http://localhost:4000/'
const nodeEnv = NODE_ENV || 'development'
const port = PORT || '4000'
const gaTrackingId = GA_TRACKING_ID || ''
const langDefault = LANG_DEFAULT || 'es'
const schedUrl = SCHED_URL

const buildPath = ROOT_DIR
const sourcePath = path.join(__dirname, 'src')
const assets = path.join(sourcePath, 'assets')
const entryPoint = path.join(sourcePath, 'index.js')
const outputBundle = path.join('js', 'bundle.js')
const templates = path.join(sourcePath, 'templates')

const mode = nodeEnv
const isDev = mode === 'development'

const extractStyles = new ExtractTextPlugin('css/styles.css')

const rules = [
  {
    test: /\.pug/,
    use: ['pug-loader']
  },
  {
    test: /\.(jsx|js)?$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.css$/,
    use: extractStyles.extract({ fallback: 'style-loader', use: 'css-loader' }),
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
          name: '[name].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(jpe?g|png|gif|ico)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
]

const plugins = [
  // Moves all the require/import "[fileName].css" into a separate single CSS file.
  extractStyles,
  // Creates global constants which can be configured at compile time.
  new webpack.DefinePlugin({
    'process.env': {
      HOST: JSON.stringify(host),
      NODE_ENV: JSON.stringify(nodeEnv),
      PORT: JSON.stringify(port),
      GA_TRACKING_ID: JSON.stringify(gaTrackingId),
      LANG_DEFAULT: JSON.stringify(langDefault),
      SCHED_URL: JSON.stringify(schedUrl),
    },
  }),

  // https://webpack.js.org/plugins/html-webpack-plugin/
  // Generate an .html file that includes webpack bundles in the body.
  new HtmlWebpackPlugin({
    filename: 'index.html', // output template
    hash: !isDev, // automagically hashes bundles
    host, // host variable passed to pug file
    template: path.join(templates, 'index.pug'), // original template
  }),

  new HtmlWebpackPlugin({
    filename: path.join('root', 'sched.html'),
    inject: false, // don't insert assets in this template
    host,
    template: path.join(templates, 'sched.pug'),
  }),

  new HtmlWebpackPlugin({
    filename: 'auth.html',
    inject: false, // don't insert assets in this template
    template: path.join(templates, 'auth.pug'),
  }),

  // https://www.npmjs.com/package/html-webpack-pug-plugin
  new HtmlWebpackPugPlugin(),

  new CompressionPlugin({
    algorithm: 'gzip',
    // asset: '[path].gz[query]',
    // minRatio: 0.8,
    test: /\.js$|\.css$|\.html$/,
    // threshold: 10240,
  }),

  new CopyWebpackPlugin([
    { from: assets, to: buildPath },
  ]),
]

if (isDev) {
  // Development plugins
  plugins.push(
    // enable Hot Module Replacement (HMR) globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // CLI dashboard for the webpack dev server
    // new DashboardPlugin()
  )
}


export default () => ({
  // https://webpack.js.org/configuration/mode/
  mode,
  // https://webpack.js.org/configuration/devtool/
  devtool: isDev ? 'eval-source-map' : 'source-map',
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: entryPoint,
  resolve: {
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: ['.js', '.jsx', '.json'],
  },
  // https://webpack.js.org/configuration/output/
  output: {
    filename: outputBundle,
    path: buildPath,
    publicPath: host,
  },
  // https://webpack.js.org/configuration/plugins/
  plugins,
  module: {
    // https://webpack.js.org/configuration/module/#modulerules
    rules,
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: buildPath,
    port,
  },
})
