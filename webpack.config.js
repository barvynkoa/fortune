/**
 * Created by Andrew on 9/12/2016.
 */
module.exports = {
    entry: "./main.ts",
    output: {
        path: __dirname + "/build",
        filename: "fortune_bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};