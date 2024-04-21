import { merge } from 'webpack-merge';
import Dotenv from 'dotenv-webpack';

const config = require('./webpack.config');
const devConfig = {
    mode: 'development',
    plugins: [
        new Dotenv ({
            path: `./environment/.env`
        })
    ]
}

module.exports = merge(config, devConfig);