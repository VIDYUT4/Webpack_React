const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js"
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            },
            {
                test: /\.(scss)$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" },
                  { loader: "sass-loader" }
                ]
              },
            {
                test: /\.(jpe?g|png|gif)$/,
                exclude: /node_modules/,
                use: {loader: 'file-loader'}
            }
        ]
    }
}