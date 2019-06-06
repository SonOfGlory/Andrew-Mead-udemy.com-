let tasksList = ['code a little bit', 'play StarCraft 2', 'eat icecream', 'make cornflakes with milk or yogurt', 'look for a job']

// Just with for

console.log(`You have ${tasksList.length} tasks in your queque`)

tasksList.forEach(function (item, index, array) {
    if (index === 0 || index >= array.length - 2) {
            console.log(`${index + 1}. You have to ${item}`)}
})

// With forEach

console.log(`You have ${tasksList.length} tasks in your queque`)

function arrayResult(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (index === 0 || index >= arr.length - 2) {
            console.log(`${index + 1}. You have to ${arr[index]}`)}
    }
}

arrayResult(tasksList)