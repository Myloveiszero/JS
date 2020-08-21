const Koa = require('koa')
const KoaViews = require('koa-views')

const Router = require('koa-router')
const path = require('path')
const app = new Koa();

app.use(KoaViews(path.resolve(__dirname, './views'), {
    extension: 'ejs'
}))
const router = Router();
let dataFromDB = `https://cn.bing.com/`

function jsEncode(s) {
    var t = "";
    for (let char of s) {
      let c = char.charCodeAt(0).toString('16')
      c = '\\x' + c;
      t += c;  
    }
    return t;
}
router.get('/',async (ctx) => {
    const { xss } = ctx.query
    await ctx.render('index', {
        username: 'lihua',
        xss: xss,
        dataFromDB: dataFromDB,
        js: jsEncode(`"";alert("哈哈哈！你中招了！")`)// \x16 进制
    })
})
app.use(router.routes())
.use(router.allowedMethods())

app.listen(9090, () => {
    console.log(9090)
})