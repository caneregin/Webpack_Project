const HtmlWebpackPlugin = import("html-webpack-plugin")
const path = import("path")
export const mode = "development"
export const entry = path.resolve(__dirname, "./src/index.jsx")
export const output = {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js"
}
export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                },
                'sass-loader',
            ],
        },
    ]
}
export const resolve = {
    extensions: [".js", ".jsx", ".json"],
}
export const devtool = "eval-cheap-module-source-map"
export const devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true
}
export const plugins = [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ title: "MerhabaApp", template: path.resolve(__dirname, './src/index.html') })
]