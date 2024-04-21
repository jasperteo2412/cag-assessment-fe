import { merge } from 'webpack-merge';
import Dotenv from 'dotenv-webpack';
import * as config from './webpack.config';

const devConfig = {
    mode: "development",
    plugins: [
        new Dotenv ({
            path: `./environment/.env`
        })
    ]
}

module.exports = merge(config, devConfig);