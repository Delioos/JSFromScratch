//exo 1 
//1

let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let regex = /\d+/g
let result = text.match(regex)
let annualTotal = 0 
annualTotal = +result[0] * 12 + +result[1] + +result[2] * 12
console.log(annualTotal)

//2
//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
points = [-12,-4,-3,-1,0,4,8]
points = points.sort((a,b) => a-b)

st = '-12, -4, -3, -1, 0, 4, 8'
 //extract the first number
x0 = +st.split(',')[0]
//extract the last number
x1 = +st.split(',')[st.split(',').length - 1]
console.log(x0,x1)
console.log(`the dist between the two furtherest points is ${x1 - x0}`)


// Write a pattern which identify if a string is a valid JavaScript variable name.

function is_valid_variable(name) {
    let regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/
    return regex.test(name)
}
console.log(is_valid_variable('first_name') ,is_valid_variable('first-name') ,is_valid_variable('1first_name'),is_valid_variable('firstname') )

function tenMostFrequentWords ( string) {
    let regex = new RegExp(/\w+/g)
    let words = string.match(regex)
    let count = {}
    words.forEach(word => {
        if (count[word]) {
            count[word]++
        } else {
            count[word] = 1
        }
    } )
    let sorted = Object.keys(count).sort((a,b) => count[b] - count[a])
    return sorted.slice(0,10)
}

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))

//ex 3
// write a funciton which cleans text. Clean The follow text. After cleaning, count three most freauent zords in the string
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
cleanText  = sentence.replace(/[^a-zA-Z0-9\s,.]/g, '')
console.log(tenMostFrequentWords(cleanText))