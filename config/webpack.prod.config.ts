import { merge } from 'webpack-merge';

const config = require('./webpack.config');
const Dotenv = require('dotenv-webpack');
const prodConfig = {
    mode: 'production',
    plugins: [
        new Dotenv ({
            path: `./environment/.env.prod`
        })
    ]
}

module.exports = merge(config, prodConfig);