const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8082,
        open: true,
    },
    module: {
        rules: [{
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },

        // Rule for handling image files
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/', // Specify the output directory for images
                    }
                }
            ]
        },

        //Add below rule to handle project's css
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader','css-loader']

        },

        // Add below rule to handle bootstrap css
        {
            test: /\.css$/,
            include: /node_modules/,
            use: ['style-loader', 'css-loader']

        },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        })
    ]
};