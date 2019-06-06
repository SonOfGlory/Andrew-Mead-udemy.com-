let isValidPassword = function (password) {

    if (password.length <= 8) {
        return 'You should pick pass bigger than 8 characters'
    } 

    else if (password.includes('password')) {
        return 'Please do not use word "password" in your password ;)'
    } 

    else return 'your pass is cool, bro!'

}

console.log(isValidPassword('password12203023'))
console.log(isValidPassword('12denysos'))
