let obj = {}
Object.difineProperty(obj, 'a', {
    value: 1
})
function log(target, name, desriptor) {
    let originAdd = desriptor.value
    desriptor.value = function(...args) {
        console.log('start')
        let res = originAdd.apply(this, args)
        return res
    }
}
class Math {
    @log
    add() {
        // const sum = 'add'
        const sum = a + b + this.c
        return sum
    }

}
let m = new Math() 
m.add()
//监听一下 add 方法有没有被调用