import { merge } from 'webpack-merge';

const config = require('./webpack.config');
const Dotenv = require('dotenv-webpack');
const devConfig = {
    mode: 'development',
    plugins: [
        new Dotenv ({
            path: `./environment/.env`
        })
    ]
}

module.exports = merge(config, devConfig);