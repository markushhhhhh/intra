const path = require('path');

module.exports = {
    entry: './src/app.js', //Entrypoint of the app, what code to read
    output: { //tells webpack where to output the bundled file
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                                presets: ['react', 'es2015', 'stage-1'], //tells babel compiler to transform ES6/es2015 ES6/stage-1 JS version into a JS version comp with the browsers, react tells WP to compile jsx into javascript,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }


        ]
    },
    devtool: "#eval-source-map", //maps the bundle to readable code
    watch: true
};
