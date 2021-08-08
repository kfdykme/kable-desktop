const path = require('path')
module.exports = {
    build : {
        index: path.resolve(__dirname, './dist/index.html')
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    }
}