const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust the entry point based on your project structure
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
