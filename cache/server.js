const express = require('express')
const md5 = require('md5')
const app = express()

app.get('/big.js',(req,res)=>{
    console.log('require backend')
    const fs = require('fs')
    const jsContent = fs.readFileSync('./big.js','utf-8');
    // 强缓存：200 from memory/disk cache，请求不会到达服务器
    res.setHeader('Cache-Control','max-age=20');

    // 协商缓存：请求会到达浏览器
    // 20之后，会携带一个'If-None-Match'的头
    // if-none-match: 浏览器发现上一次请求 服务器有Etag 设置， 浏览器自动发送一个
    // etag生成：MD5
    // if-modified-since:文件修改了，文件最后修改会发生变化
    // 服务器 对比前后两次文件有没有变化 从时间角度考虑，有缺陷
    const Etag = md5(jsContent)
    const oldEtag = req.headers['if-none-match']
    if(oldEtag === Etag){
        // 文件没有变化
        // 从缓存内读取304(not modified)
        res.sendStatus(304).end('')
        return;
    }
    res.setHeader('Etag',Etag)
    res.end(jsContent)
})

app.listen(9090,()=>{
    console.log(9090)
})
