import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        //Generate an external css file with a hash in the filename
        new ExtractTextPlugin('site.css'),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })},
            {test: /\.(ttf|otf|jpeg|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]'}
        ]
    }
}