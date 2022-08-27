console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:skyblue',
  '',
  'color:orange',
  '',
  'color:cadetblue'
)  
console.error('We all make mistakes')
console.warn('This is a warning message')
console.info('ohio this is an info message')
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.table(countries)
console.groupEnd()

console.group('Users')
console.log(user)
for (let key in users) {
    console.table(users[key])
}
console.log(users)
console.groupEnd()

//ex 2
console.assert(10 > 2,false, '10 is greater than 2')

Arr = new Array(100000).fill(0)
console.time('timer')
for (let i = 0; i < 100000; i++) {
    Arr[i] = new Date()
}
console.timeEnd('timer')
console.time('timr')
Arr.forEach(element => {
    element = new Date()
});
console.timeEnd('timr')
console.time('time')
console.timeEnd('time')
let i = 0 
console.time('timer')
while (i < 100000) {
    Arr[i] = new Date()
    i++
}
console.timeEnd('timer')