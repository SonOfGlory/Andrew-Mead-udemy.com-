// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (x) {
    let result = x * x
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge Area

let tempConversion = function (fahrenheit)
{
    let celcius = (fahrenheit - 32)/1.8 + '°C'
    let kelvin = (fahrenheit - 32)/1.8 + 273.15 + '°K'

    //let both = celcius + ' ' + kelvin
    return [celcius, kelvin]
}

console.log(tempConversion(50))
console.log(tempConversion(100))
console.log(tempConversion(3))