let GradeCalc = function (grade, maxGrade = 100) {
    let result = (grade/maxGrade * 100).toFixed(2)
    if (result >= 90 && result <= 100) console.log(`Wow! You got an A (${result}%)!`)
    else if (result >= 80 && result < 90) console.log(`Still pretty impressive. You got a B (${result}%)`)
    else if (result >= 70 && result < 80) console.log(`Not good but not bad either. You got a C (${result}%)`)
    else if (result >= 60 && result < 70) console.log(`You gotta learn more! ^^) You got a D (${result}%)`)
    else if (result <= 60 && result > 0) console.log(`Keep trying! You got a F (${result}%)!`)
    else console.log(`Wow, wow! Either you have messed with results or you trying to cheat little brat!
    Result of ${result}% is technically impossible!`)
}
GradeCalc(60)
GradeCalc(70)
GradeCalc(80)
GradeCalc(90)
GradeCalc(200)

// Внизу код Энди, вверху - мой

// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

let result = gradeCalc(9, 5)
console.log(result)
