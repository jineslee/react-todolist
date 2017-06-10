var path = require('path');
module.exports = {
    entry: {
       'bundle' :path.join(__dirname,"./src/entry.js")
    },
    output: {
      path:path.join(__dirname, 'build'),
      filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js[x]?$/, loader: "babel-loader?presets[]=es2015&presets[]=react", include: /src/ },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
        ]
    }
}
