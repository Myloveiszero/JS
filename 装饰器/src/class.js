//装饰 class 的时候 能够拿到这个 class
function observer(target) {
    target.displayName = 'XXXX'
    return target
}

@observer
class Com{
    render() {
        return '123'
    }
}

console.log(Com.displayName)