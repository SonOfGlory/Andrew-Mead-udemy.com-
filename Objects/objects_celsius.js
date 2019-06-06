let tempConversion = function (fahrenheit) {
    return {
        celcius: `${((fahrenheit - 32)/1.8).toFixed(2)}°C`,
        kelvin: `${((fahrenheit - 32)/1.8 + 273.15).toFixed(2)}°K`,
        fahrenheit: fahrenheit
    }
}

console.log(tempConversion(40).celcius)
console.log(tempConversion(40).kelvin)
console.log(tempConversion(40).fahrenheit)