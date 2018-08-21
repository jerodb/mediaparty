const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Load the config from .env file into process.env
require('dotenv').config();

const nodeEnv = process.env.NODE_ENV || 'development';
const port = process.env.PORT || '4000';
const gaTrackingId = process.env.GA_TRACKING_ID || '';
const langDefault = process.env.LANG_DEFAULT || 'es';
const schedUrl = process.env.SCHED_URL;
const isProduction = nodeEnv === 'production';

const hash = isProduction ? '.[hash:8]' : '';
const chunkhash = isProduction ? '.[chunkhash:8]' : '';
const contenthash = isProduction ? '.[contenthash:8]' : '';

const extractStyles = new ExtractTextPlugin(`styles${ contenthash }.css`);

const paths = {};
paths.build = path.join(__dirname, './build');
paths.source = path.join(__dirname, './src');
paths.img = path.join(paths.source, 'assets/img');
// paths.fonts = path.join(paths.source, 'assets/fonts');

// Common plugins
const plugins = [
  // Creates a separate file (vendor-[hash].js), consisting of common modules shared between multiple entry points
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'manifest'],
    minChunks: Infinity,
  }),
  // Moves all the require/import "[fileName].css" in entry chunks into a separate single CSS file.
  extractStyles,
  // Creates global constants which can be configured at compile time.
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
      PORT: JSON.stringify(port),
      GA_TRACKING_ID: JSON.stringify(gaTrackingId),
      LANG_DEFAULT: JSON.stringify(langDefault),
      SCHED_URL: JSON.stringify(schedUrl),
    },
  }),
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    include: paths.source,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.(ico|png|gif|jpg|svg)$/,
    include: paths.img,
    use: `url-loader?limit=20480&name=assets/img/[name]${ hash }.[ext]`,
  },
  {
    test: /\.css$/,
    use: extractStyles.extract({ fallback: 'style-loader', use: 'css-loader' }),
  },
  /*{
    test: /\.(woff|woff2)$/,
    include: paths.fonts,
    loader: `file-loader?name=assets/fonts/[name]${hash}.[ext]`,
  },*/
  /* {
   test: /\.(ttf|eot|svg|woff|woff2)$/,
   loader: 'url-loader?limit=20480&name=assets/fonts/[name].[hash:8].[ext]',
   }, */
];

if (isProduction) {
  // Production plugins
  plugins.push(
    // Generate an ejs file that includes all webpack bundles in the body using script tags.
    new HtmlWebpackPlugin({
      template: `!!raw-loader!${ path.join(paths.source, 'views/index.ejs') }`,
      path: paths.build,
      filename: 'index.ejs',
    }),
    // Until a loader has been updated to depend upon options being passed directly to them, the LoaderOptionsPlugin
    // exists to bridge the gap. (W1 vs W2)
    // To keep compatibility with old loaders, loaders can be switched to minimize mode via plugin:
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    // Generates IDs that preserves over builds
    new webpack.HashedModuleIdsPlugin(),
    // To ensure hashes are generated based on the file contents
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        sequences: true,  // join consecutive statements with the “comma operator”
        properties: true,  // optimize property access: a["foo"] → a.foo
        dead_code: true,  // discard unreachable code
        drop_debugger: true,  // discard “debugger” statements
        unsafe: false, // some unsafe optimizations (see below)
        conditionals: true,  // optimize if-s and conditional expressions
        comparisons: true,  // optimize comparisons
        evaluate: true,  // evaluate constant expressions
        booleans: true,  // optimize boolean expressions
        loops: true,  // optimize loops
        unused: true,  // drop unused variables/functions
        hoist_funs: true,  // hoist function declarations
        hoist_vars: false, // hoist variable declarations
        if_return: true,  // optimize if-s followed by return/continue
        join_vars: true,  // join var declarations
        cascade: true,  // try to cascade `right` into `left` in sequences
        side_effects: true,  // drop side-effect-free statements
        warnings: false,  // warn about potentially dangerous optimizations/code
        global_defs: {},  // global definitions
      },
      comments: false,
      sourceMap: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CopyWebpackPlugin([
      { from: path.join(paths.source, 'assets/terms.txt'), to: path.join(paths.build, 'assets/terms.txt') },
      { from: path.join(paths.source, 'assets/robots.txt'), to: path.join(paths.build, 'assets/robots.txt') },
      { from: path.join(paths.source, 'assets/img'), to: path.join(paths.build, 'assets/img') },
      { from: path.join(paths.source, 'views/auth.ejs'), to: path.join(paths.build, 'auth.ejs') },
    ])
  );
} else {
  // Development plugins
  plugins.push(
    // Generate an HTML5 file that includes all webpack bundles in the body using script tags.
    new HtmlWebpackPlugin({
      template: `!!raw-loader!${ path.join(paths.source, 'views/index.ejs') }`,
      filename: 'index.html',
    }),
    // enable Hot Module Replacement (HMR) globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // CLI dashboard for the webpack dev server
    new DashboardPlugin()
  );
}

module.exports = {
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  // context: paths.source,
  entry: {
    app: path.join(paths.source, 'index.js'),
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'isomorphic-fetch',
      'react-dom',
      'react-router-dom',
      'react',
      'prop-types',
      'classnames',
      'react-day-picker',
      'dateformat',
    ],
  },
  output: {
    path: paths.build,
    filename: `[name]${ chunkhash }.js`,
    chunkFilename: `[name]${ chunkhash }.js`,
    publicPath: '/',
  },
  module: {
    rules,
  },
  // Options affecting the resolving of modules.
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(paths.source),
    ],
  },
  plugins,
  // Configure the behaviour of webpack-dev-server
  devServer: {
    // Tell the server where to serve content from.
    contentBase: isProduction ? './build' : './src',
    historyApiFallback: true,
    // Enable gzip compression for everything served
    compress: isProduction,
    // If true => A script will be inserted in the bundle to take care of live reloading, and build messages will
    // appear in the browser console.
    inline: !isProduction,
    // enable HMR
    hot: !isProduction,
    // CLI only
    host: 'localhost',
    // CLI only
    port,
    //  lets you precisely control what bundle information gets displayed.
    stats: {
      assets: true,
      children: true,
      chunks: true,
      hash: true,
      modules: true,
      publicPath: true,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
