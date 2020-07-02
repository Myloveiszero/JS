var arr = [1,2,3,4];



var sum = arr.reduce(function(pre, cur, index, arr) {
    console.log(pre, cur, index);
    return pre + cur;
}, 0);

console.log(sum);