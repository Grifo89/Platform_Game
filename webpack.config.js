const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },

    output: {
        // path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
               test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
               // include: path.resolve(__dirname, 'src/'),
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env']
                   }
               }
            }
        ]
    },

    plugins: [
        // new CopyPlugin([
        //     {
        //         from: path.resolve(__dirname, 'index.html'),
        //         to: path.resolve(__dirname, 'build')
        //     },
        //     {
        //         from: path.resolve(__dirname, 'assets', '**', '*'),
        //         to: path.resolve(__dirname, 'build')
        //     }
        // ]),
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true)
        }),

    ],

    devServer: {
        // contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 8000
    },
}
