// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(vert|frag)$/i,
                exclude: /node_modules/,
                use: ['raw-loader', 'glslify-loader'],
            },
        ],
    },
}
