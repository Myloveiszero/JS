##  commonJS
导出： 
module.exports = function() {}
module.exports  = {}
导入：
require
1.  commonjs 一定是要代码运行起来才知道引入了哪些模块
2.  可以出现在逻辑分析里面
##  es-module

1.  import/export 不论你写在哪，都会被提前执行
2.  在代码静态分析（代码不用执行），就可以分析出你引入了哪些模块

AMD
CMD
UMD: 统一模块化方案
```js
(function() {
    //判断代码最终执行的环境到底是 node 还是浏览器
})
```
CJS
es