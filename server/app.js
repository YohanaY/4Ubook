// 加载Express模块
const express = require('express');

//加载MD5模块
const md5 = require('md5');

// 加载CORS模块
const cors = require('cors');

// 加载body-parser模块
const bodyParser = require('body-parser');

// 加载MySQL模块
const mysql = require('mysql');

// 创建MySQL连接池
const pool = mysql.createPool({
  // 数据库服务器的地址
  host: '127.0.0.1',
  // 数据库服务器的端口号
  port: 3306,
  // 数据库用户的用户名
  user: 'root',
  // 数据库用户的密码
  password: '',
  // 数据库名称
  database: '4Ubook',
  // 编码方式
  charset: 'utf8',
  // 最大连接数
  connectionLimit: 20
});

// 创建WEB服务器实例
const server = express();

// 将CORS作为Server的中间件
server.use(cors({
  origin: ['http://localhost:8080', 'http://api.zhuishushenqi.com']
}));

//将bodyParser作为Server的中间件
server.use(bodyParser.urlencoded({
  extended: false
}));

//获取所有文章分类信息的接口
server.get('/cart', (req, res) => {
    //获取文章分类表中的全部数据
    let sql = 'SELECT id,category_name FROM xzqa_category';
    //通过连接池的query()方法来执行SQL语句
    pool.query(sql, (error, results) => {
      if (error) throw error;
      res.send({ message: '查询成功', code: 1, results: results });
      console.log(results);
    });
  });