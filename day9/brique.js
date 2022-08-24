//foreach is a function that do smthg on every element of an array 
//map is a function that do smthg on every element of an array and return an array of the result
// filter is a function that select elements of an array that match a condition
// reduce is a function that operate on an array and return a single value

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//2 define a callback function that will be used in foreach, map, filter and reduce
const callback = (element) => {
  console.log(element)
}

//3 
countries.forEach(element => {
  callback(element)
});
console.log('------------------------------')
//4 
names.forEach(element => {
  callback(element)
});

console.log('------------------------------')

//5 
numbers.forEach(n => { callback(n)})

//6 
console.log('------------------------------')
console.log(countries.map(elem => elem.toUpperCase()))

//7 use map to create an array of countries length from the countries array 
console.log(countries.map(elem => elem.length))

//8
console.log(numbers.map(elem => elem**2))

//9
console.log(names.map(elem => elem.toUpperCase()))

//10 
console.log(products.map(elem => elem.price))

//11
console.log(countries.filter(elem => elem.includes('land')))

//12 
console.log(countries.filter(elem => elem.length == 6))

//13
console.log(countries.filter(elem => elem.length >= 6))

//14 
console.log(countries.filter(elem => elem.charAt(0) == 'E'))

//15 
console.log(products.filter(elem => typeof(elem.price) === 'number'))

//16 
function getStringLists (arr) {
  return arr.filter(elem => typeof(elem) === 'string')
}

//17 
console.log(numbers.reduce((acc, cur) => acc + cur, 0))

//18 
//je beug hugo j entends un mot sur trois 
console.log(countries.reduce((acc, cur) => acc.concat(`, ${cur}`)))

//19
//some check on 2 or more elem of an array | every verify the condition on every array elem 

//20 
console.log(names.some(elem => elem.length >= 7))

//21 
console.log(countries.every(elem => elem.includes('land')))

//22
// find return the elem | findIndex return the index in the array of the elem 

//23
console.log(countries.find(elem => elem.length == 6))

//24 
console.log(countries.findIndex(elem => elem.length == 6))

//25 
console.log(countries.findIndex(elem => elem == 'Norway'))

//26 
console.log(countries.findIndex(elem => elem == 'Russia'))

// Exercice 2 

//1
console.log(products.map(elem => elem.price).filter(elem => typeof(elem) === 'number').reduce((acc,cur) => acc + cur))

//2 
console.log(products.reduce((acc, cur) => typeof(cur.price) === 'number' ? acc + cur.price : acc,0))

//3 voir ctr.js