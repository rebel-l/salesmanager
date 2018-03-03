const path = require('path');

module.exports = {
    entry: {
        app: './js/index.js'
    },
    plugins: [],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },

        ]
    }
};
