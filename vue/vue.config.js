module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    disableHostCheck: true,
    port: 80,
    allowedHosts: [
      '.cocoluluk.com'
    ],
    proxy: { 
      '/api': { 
        target: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'http://cocoluluk:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '../node/public',
}


