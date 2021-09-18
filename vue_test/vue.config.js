module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, // 关闭语法检查
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/atguigu':''}, // 前缀
                // ws: true, // 支持websocket
                // changeOrigin: true // 用于控制请求头中的host值
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/demo':''},
                // ws: true,
                // changeOrigin: true
            }
        }
    }
}