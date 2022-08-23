// exercice 1 
age = prompt('enter your age')
age >= 18 ? console.log('you are old enough to drive') : console.log('you re too young to drive')


let myAge = 19
let userAge = 14
if (userAge > myAge) {
    console.log(`you are ${userAge - myAge} years older than me`)
} else {
    console.log(`you are ${myAge - userAge} years younger than me`)
}

let a = 4
let b = 3

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

// 1.4
let num = 25
num % 2 == 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`)