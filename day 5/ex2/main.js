console.log(countries)



let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

//remove the punctuation
let textNoPunctuation = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

let words = textNoPunctuation.split(' ')
console.log(words)
console.log(words.length)

//3 
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
shoppingCart.includes('Meat') ? shoppingCart : shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.includes('Meat') ? shoppingCart : shoppingCart.unshift('Meat') 

shoppingCart.includes('Sugar') ? shoppingCart : shoppingCart.push('Sugar')
console.log(shoppingCart)


shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf('Green Tea'),1,'Lemon Tea')
console.log(shoppingCart)

countries.includes('Ethiopia') ? console.log() : countries.push('Ethiopia')
console.log(countries)