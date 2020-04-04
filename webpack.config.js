module.exports = {
    // ...        
    module: {
        rules: [                 
            { 
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: path.resolve(__dirname, "src/"),
                            outputPath: 'public/',
                            publicPath: 'Assets',
                            useRelativePaths: true
                        }
                    }
                ] 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            allChunks: true
        })
    ]
};