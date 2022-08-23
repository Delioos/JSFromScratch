//ex 1
//1 
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
//console.log(fullName("John", "Doe"));

//2
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

//4
//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width;
}
//console.log(areaOfRectangle(2, 3));

// create a function that take two parameters and return square of the sum of the two parameters
function squareOfSum(a, b) {
    return (a + b) ** 2;
}

//13 bmi calculator 
function bmi(height, weight) {
    height /= 100
    let index = weight / (height ** 2)
    let rtStr = ''

    if (index < 18.5)
        rtStr = 'Underweight'

    if (index >= 18.5 && index < 24.9)
        rtStr = 'normal'

    if (index >= 25 && index < 29.9)
        rtStr = 'Overweight'

    if (index > 30)
        rtStr = 'Obese'

    return rtStr + ' ' +index 
}

/*let taille = prompt('taille')
let pdc = prompt('poids')
console.log(bmi(taille, pdc))
*/

 function findMax(a,b,c) {
    return Math.max(a,b,c)
 }

// console.log(findMax(2,89,1)+ ' is the max value of the parameters ')

//2.2
function solveQuadratic(a = 0,b = 0,c = 0) {
    let delta = b**2 - 4*a*c
    if (delta == 0) {
        let x = -b/2*a 
        x == 0 ? x*= -1 :x
        return x
    }
    if (delta > 0 ) {
        let sl = new Array()
        let x1 = (-b-(Math.sqrt(delta)))/2*a
        let x2 = (-b+(Math.sqrt(delta)))/2*a
        sl.push(x1,x2)
        return sl 
    }
    if (delta < 0) {
        return 'pas de solutions reel'
    }
}
/*
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/

function sumAllNums() {
    let sum = 0
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index]     
    }
    
    return sum 
}
/*
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
*/

function idGen(length,num) {
    let ids = ['\n']
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = alphabet.split('')
    for (let index = 0; index < num;index++) {
        let id = ''
        let letter = ''
        for (let i = 0; i < length; i++) {
            let proba = Math.random()*3
            if (proba <= 2) { //lettres 
                letter = alphabet[Math.floor(Math.random()*25)]
                if (proba <= 1) { //capitalise
                    letter = letter.toUpperCase()
                }
                id += letter 
            } else {
            id += Math.floor(Math.random()*10) // num si sup a 2
            }
        }
        //id = `${index+1}: ${id}`
        ids.includes(id) ? index -= 1 : ids.push(id) // evite les doublons 
    }
    ids = ids.join('\n')
    return ids
}
function userIdGeneratedByUser() {
    let length = prompt('taille de l`id')
    let num = prompt('how many ids do you want to create')
    return idGen(length,num)
}

console.log(userIdGeneratedByUser())