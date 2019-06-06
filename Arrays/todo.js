// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog

//DENYS

let tasksList = ['code a little bit', 'play StarCraft 2', 'eat icecream', 'make cornflakes with milk or yogurt', 'look for a job']

console.log(`You have ${tasksList.length} tasks in your queque`)

function arrayResult(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i >= arr.length - 2) {
            console.log(`You have to ${arr[i]}`)}
        }
}

arrayResult(tasksList)

// ANDREW

const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

console.log(`You have ${todos.length} todos!`)
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)