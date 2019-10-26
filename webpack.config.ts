import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader'

const outDir = 'dist'

const config: webpack.Configuration = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    entry: './src/index.ts',
    plugins: [
        new CleanWebpackPlugin([outDir]),
        new HtmlWebpackPlugin({
          template: "src/index.html",
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, outDir)
    },

    module: {
        rules: [
            { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
            { test: /\.scss$/, use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]},
            { test: /\.(png|jpg|svg|gif)$/, use: 'file-loader'}
        ]
    },
    devServer: {
        stats: {
            assets: false,
            hash: false,
            chunks: false,
            errors: true,
            errorDetails: true,
        },
        overlay: true
    }
};

export default config;