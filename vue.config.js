module.exports={
    // chainWebpack:config=>{
    //   //删除编译后的独立js文件上的预获取操作
    //   config.plugins.delete("prefetch")
    // },
    // 开发环境跨域问题
    devServer:{
      proxy:{
        "/api": {
          "target": "http://api.zhuishushenqi.com/",
          "changeOrigin": true,
          "pathRewrite": {
            "^/api": "/"
          }
        }
      }
      
}
}
