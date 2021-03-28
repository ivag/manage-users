module.exports = {
    entry: {
        main: "./app/main.jsx"
    },

    output: {
        publicPath: "app/scripts/",
        path: __dirname + "/app/scripts",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};
