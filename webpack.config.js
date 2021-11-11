// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.glsl$/i,
                use: 'raw-loader',
            },
        ],
    },
}
