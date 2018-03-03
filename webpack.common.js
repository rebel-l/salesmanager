const path = require('path');
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = {
    entry: {
        client: './client/index.js'
    },
    plugins: [
        new ExtractTextPlugin('./client/index.css')
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    loader: ExtractTextPlugin.extract(
        'style-loader',
        combineLoaders([
            {
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ])
    ),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'style-loader'
                }
            }, {
                test: /\.css$/,
                use: {
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            }
        ]
    }
};
