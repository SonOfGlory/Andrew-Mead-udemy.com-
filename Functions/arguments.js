// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Challenge
let figureOutTip = function (amount, tipRate) {
    if (amount === undefined) console.log('Set an amount of money you gonna spend')
    else if (tipRate === undefined) console.log('Set an amount of tip rate')
    else console.log (`A ${tipRate*100}% tip on ${amount}$ would be ${amount*tipRate}$`)
}

let figureOut = figureOutTip(200, 0.1)