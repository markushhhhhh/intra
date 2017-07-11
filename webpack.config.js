var path = require('path');

const webpack =  require('webpack');

module.exports = {
    entry: './src/app.js',//Entry point of the app
    output: { //tells webpack where to output the bundled file
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true, //when true, creates a new bundle when saved changes
    //debug: true,
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true //makes it possible to use debugger
        })
    ],
    devtool: "#eval-source-map", //maps the bundle to readable code
    module:{
        loaders: [ //what compiler to use
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader', //uses babel as loader
                query: {
                    presets: ['react', 'es2015', 'stage-1'], //tells babel compiler to transform ES6/es2015 ES6/stage-1 JS version into a JS version comp with the browsers, react tells WP to compile jsx into javascript
                }
            }
        ]
    }
}