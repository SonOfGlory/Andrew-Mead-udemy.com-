let a = [1,2,3,4,5,6,7,8,9,10]

function add(a, b) {
    return a + b;
};

function arrayResult(arr) {
for (let i = 0; i < arr.length - 1; i++) {
    sum = add(arr[i], arr[i + 1])
    }
return sum
}


console.log(arrayResult(a))