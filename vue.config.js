module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://192.168.2.135:3000',
                ws: true,
                changeOrigin: true,
            },
        },
    },
};