const path          = require('path')
const merge         = require('webpack-merge')
const common        = require('./config/webpack.common')

const webpack_mode  = process.env.NODE_ENV || 'development'
const build_configs = webpack_mode === 'production' ? require('./config/webpack.production.js') : require('./config/webpack.development.js')

module.exports = merge(common, build_configs, {
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/bundle.js'
    }
})
