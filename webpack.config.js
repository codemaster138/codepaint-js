const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'out'),
        filename: "bundle.js",
        library: 'codepaint',
        libraryTarget: 'umd',
        globalObject: 'this',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        extensions: ['.json', '.js', '.ts']
    }
};