const l = new Array()

//2
const list = new Array(10)
//3
console.log(list.length)

//4
for (let index = 0; index < list.length; index++) {
    list[index] = index 
}

console.log(`first item : ${list[0]} - mid item : ${list[list.length/2]} - last item : ${list[list.length - 1]}`)
console.log(list)


//5 
const mixedDataTypes = [true,1,'bozo',true,false,false,88.88]
console.log('\n' + mixedDataTypes.length)

//6 
const ITCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'Oracle',
    'Amazon',
    'IBM',
    'Alphabet',
]

//7 
console.log('\n' + ITCompanies)

//8 
console.log('\n' + ITCompanies.length)

//9 
console.log(`\n first company : ${ITCompanies[0]} - mid company : ${ITCompanies[ITCompanies.length/2]} - last company : ${ITCompanies[ITCompanies.length - 1]}`)

//10-11
let index = 0
ITCompanies.forEach(element => {
    index++ 
    element = element.toUpperCase()
    console.log(element)
});

//12 
console.log(ITCompanies.join(', '))

//13
let searched = 'Google'
if (ITCompanies.includes(searched)) {
    console.log(`\n ${searched} is included in the list`)
} else {
    console.log(`\n ${searched} was not found`)
}

//14 
let checkedComp = ''
let doubleOgang = new Array()
let count = 0
let tamp = []
for (let index = 0; index < ITCompanies.length; index++) {    
    // recup le nom actuel
    checkedComp = ITCompanies[index]
    count = 0 
    tamp = checkedComp.split('')
    // si elle possede deux o ou plus on l ajoute a une liste filtree 
    tamp.forEach(element => {
        if (element == 'o'){
            count++
        }
    });
    if (count >= 2){
        doubleOgang.push(checkedComp)
    }
}
console.log('list of companies from the list that contains 2 o or more ' + doubleOgang)

//15 
let sortedITcompList = ITCompanies.sort()
console.log('\n'+ sortedITcompList)

//16 
console.log('\n' + sortedITcompList.reverse())

//17 
console.log(sortedITcompList.slice(0,3))
console.log(sortedITcompList.slice(sortedITcompList.length-3))

//18 
console.log('verif array integrity    ' + sortedITcompList)

//20
sortedITcompList.shift(0)
console.log('shifted the first elem   ' + sortedITcompList)

//21
//remove the middle it company or companies 
console.log('array state atm : '+ sortedITcompList)
let size = sortedITcompList.length
console.log(`size : ${size}`)
// removing the element(s)
size%2 == 0 ? sortedITcompList.slice((size/2)-1,2) : sortedITcompList.splice(Math.floor(size/2),1,'')
console.log('spliced out the mid : '+ sortedITcompList)


//22
sortedITcompList.pop()
console.log('poped out the last  : '+ sortedITcompList)

//23 
sortedITcompList.splice(0,sortedITcompList.length)
console.log(sortedITcompList)

    