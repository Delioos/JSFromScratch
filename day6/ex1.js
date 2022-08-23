let str = ''
for (let index = 0; index < 10; index++) {
    str += 'f'
    //console.log(str)    
}

str = ''
do {
    str += 'w'
    //console.log(str)
} while (str.length < 10)

//5
for (let index = 0; index < 10; index++) {
    //console.log(`${index} x ${index} = ${index * index}`)   
}

//6
let index = 0 
do {
    //console.log(`${index} ${index**2} ${index**3}`)
    index++
} while (index < 11) 

//7 - 8 - 9 - 10 - 11 - 12 
let sumE = 0
let sumO = 0 
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? sumE+= i : sumO += i 
}
const sums = [sumE,sumO]
//console.log(sums)

//13 - 14
const ar = new Array() 
let n = 0
for (let index = 0; index < 10; index++) {
    let flag = true 
    do {
    n = Math.floor(Math.random()*101)
    ar.includes(n) ? console.log('value already in the array, new generation') : flag = false
    } while (flag)
    ar.push(n)
}
ar.sort(function(a,b){return a - b})
console.log(ar)

//2.4
let boucle = 0
do {
let rgb = 'rgb('
for (let index = 0; index < 3; index++) {
    rgb+= Math.floor(Math.random()*256) 
    if (index < 2) {
        rgb += ','
    }
    else {
        rgb+= ')'
    }
}
console.log(rgb)
boucle++
} while (boucle <= 11)