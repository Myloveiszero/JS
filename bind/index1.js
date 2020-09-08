function sum(a, b, c) {
    console.log(this, a + b + c)
}
Function.prototype.mybind = function(THIS, ...arg1) {
    let fn = this
    return function(...arg2) {
        let args = arg1.concat(arg2)
        return fn.apply(THIS, args)
    }
}

let sum10 = sum.mybind(null, 10)
sum10(20,30)