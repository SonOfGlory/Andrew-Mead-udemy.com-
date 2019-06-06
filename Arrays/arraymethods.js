let tasksList = ['code a little bit', 'play StarCraft 2', 'eat icecream', 'make cornflakes with milk or yogurt', 'look for a job']

tasksList.splice(2,1)
tasksList.push('To annoy Andrew or his assistant with stupid questions')
tasksList.shift()

console.log(tasksList)

// result - [ 'play StarCraft 2', 'make cornflakes with milk or yogurt' ]