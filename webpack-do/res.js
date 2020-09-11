// commonJS require module.exports 原理
(function(obj) {
    // 执行文件中的内容
    let module = {}
    function __webpack_require__(parms) {
        console.log(parms,module)
        obj[parms](module)
        console.log(module)
        return module.exports
    }
    obj['./index.js'](__webpack_require__)
})({
    './index.js':function (__webpack_require__) {
        const sum = __webpack_require__('./math.js')
        console.log(sum(10,20))
    },
    './math.js':function (module = {},__webpack_require__) {
        module.exports = (a, b) => a + b
    }
})