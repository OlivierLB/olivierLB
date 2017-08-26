var webpack = require('webpack');

module.exports = {
    output: {
        path: './public/js/',
        publicPath: '/js/',
        filename: 'bundle.js'
    },
    entry: {
        app: ['./src/App.jsx']
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://0.0.0.0:3000'
            }
        }
    }
};
