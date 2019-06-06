let AndyAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpence = function (account, expenses, income) {
    account.expenses = account.expenses + expenses
    account.income = account.income + income
    console.log(`Hello, for ${account.name}, expenses are $${account.expenses} and income is $${account.income}`)
}

let accountReset = function (account) {
    account.expenses = 0
    account.income = 0
    console.log(`Hello, for ${account.name}, expenses are rebooted to $${account.expenses} and income is rebooted to $${account.income}`)
}

let getAccountSummary = function (account) {
    console.log(`Hello, for $${account.name}, expenses are $${account.expenses} and income is $${account.income}`)
}

addExpence (AndyAccount, 900, 1000)
accountReset (AndyAccount)
getAccountSummary (AndyAccount)



