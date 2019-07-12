const path = require('path');
const webpack = require('webpack');
const WebpackVisualizer = require('webpack-visualizer-plugin');

const constants = require('./../lib/constants');

const PROJECT_ROOT = path.dirname(require.resolve('./../package.json'));

module.exports = (grunt, options) => Object.freeze({
    default: {
        target: 'web',
        entry: {
            [constants.entryPoints.app]: './client/index.js'
        },
        externals: {
            'jquery': 'jQuery',
            'tinymce': 'tinyMCE',
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react-bootstrap': 'ReactBootstrap',
            'react-redux': 'ReactRedux'
        },
        output: {
            path: path.join(PROJECT_ROOT, 'assets'),
            filename: '[name].min.js'
        },
        resolve: {
            extensions: [ '.jsx', '.js' ]
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'production',
                DEBUG: false
            }),

            new WebpackVisualizer({
                filename: '../reports/webpack-visualizer.html'
            }),

            new webpack.optimize.CommonsChunkPlugin({
                names: 'vendor',
                filename: `${constants.versionedName}-[name].min.js`,
                minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1
                // }),

            // new webpack.optimize.UglifyJsPlugin({
            //     compress: false,
            //     output: {
            //         ascii_only: true
            //     }
            })
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
});
