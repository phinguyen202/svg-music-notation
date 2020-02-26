module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}