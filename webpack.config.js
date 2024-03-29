const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './dev/test.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    // Enable sourcemaps for debugging webpack"s output.
    devtool: 'source-map',

    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: ['.ts', '.js', '.json'],
        // load modules whose location is specified in the paths section of tsconfig.json
        plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })]
    },

    module: {
        rules: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            { test: /\.ts?$/, loader: 'ts-loader', options: { allowTsInNodeModules: true, } },

            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

            { test: /\.css$/, use: ['style-loader', 'css-loader'] },

            { test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },

            { test: /\.(musicxml|mxl)$/, use: 'raw-loader', },
        ]
    },
};
