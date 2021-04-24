const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/frontend/public/js/main.ts'
    },
    output: {
        path: path.join(__dirname, 'dist/frontend/public'),
        filename: 'assets/js/[name].[contenthash].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader',
                options: {
                    htmlmin: true,
                    htmlminOptions: {
                        removeComments: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({})
        ],
    },
    plugins: [
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new Webpack.ProvidePlugin({
            _: "underscore"
        }),
        new HtmlPlugin({
            filename: '../views/index.ejs',
            template: '!!ejs-compiled-loader?{}!./src/frontend/views/pages/index.ejs'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/styles.[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/frontend/public/vendor', to: './assets/vendor' }
            ],
        })
    ]
}