// 散列/哈希
const md5 = require('md5');
//同样的输入同样的输出
//如果两次 md5 的结果一样， 那么这两次原始的内容也是一样的
// => 两次md5(big.js) 对比一下
//协商： 缓存？ 新的内容？
// 服务器判断， 是否可以缓存，要知道内容有没有发生变化

console.log(md5('abc'));
console.log(md5('abc'));
console.log(md5('abcdefg'));
console.log(md5('a'));
console.log(md5(' '));