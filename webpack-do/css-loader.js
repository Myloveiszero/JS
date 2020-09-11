// css.css样式文件处理
module.exports = function (source) {
    console.log(source)
    return `export default \`${source}\``
}