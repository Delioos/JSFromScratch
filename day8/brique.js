//1  
/*
const dog = {
    name: 'felix',
    legs: 4,
    age: 7,

    bark: function() {
        return 'woof'
    }
}
let  dogCopy = Object.assign({},dog)
//const values = Object.entries(dogCopy)
console.log(values,dog.bark())

console.log(`name: ${dog.name} \nnumber of legs ${dog.legs} \nage: ${dogCopy.age}`)


dog.breed = 'golden retriever'
dog.getBreed = function() {
    return this.breed
}
dogCopy = Object.assign({},dog)
console.log('breed :  ' + dogCopy.getBreed())
*/
//2 
/*
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
*/
/*
//find the user that have the largest amount of skillz
const keys = Object.keys(users)
const values = Object.values(users)
//console.log(values)
let max = 0 
let mIndex = 0
for (let i = 0; i < keys.length ; i++) {
    // si l utilisateur possede plus de skill que le max
    var nbSkillz = values[i].skills.length
    //console.log(`user : ${keys[i]} \nskill : ${values[i].skills} \ntotal : ${nbSkillz}`)
    if (nbSkillz > max){
    // il devient le max -> on sauvegarde son indice ainsi que le nombre de skill
        max = nbSkillz
        mIndex = i
    }
}
*/
//console.log(`the user that has the most skillz is ${keys[mIndex]} with ${max} skillz `)
// we could have handle the case when 2 users get the same amount of skill with the creation of an array and splicing it when a new max is found etc 

//2.2
/*
let nbConnectedUsers = 0 
let nb50plusUsers = 0 
for (let i = 0; i < keys.length ; i++) {
    if (values[i].isLoggedIn == true) {
        nbConnectedUsers++
        if (values[i].points >= 50) {
            nb50plusUsers++
        }
    }
}
console.log(`nbConnectedUsers: ${nbConnectedUsers}\nnb50plusUsers: ${nb50plusUsers}`)
*/
//find the people who are MERN stack dev 

// for each user
/*
let mernDev = new Array()
for (let i = 0 ; i < keys.length ; i++) {
    // get the skill array 
    var skills = values[i].skills
    var newArray = new Array()
    // trunc every skill to keep the first letter only 
    skills.forEach(element => {
        var initial = element[0]
        newArray.push(initial)
    });
    console.log(newArray)
    // transform it to a string 
    newArray = newArray.join('')
    console.log(newArray)
    // if the word includes mern 
    if (newArray.includes('MERN')) {
        // add the user to an array 
        mernDev.push(keys[i])
    }
}
// return the array
console.log(`the mern stack dev are ${mernDev}`)

*/

//2.4 Set Jules as new user in the users object without modifying the original users object
/*
const jules = {
    email: 'jules@hirtz',
    skills: ['HTML', 'CSS', 'Java', 'Python', 'SQL', 'Bash', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 40
}
users['Jules'] = jules
const val = Object.values(users)
console.log(users) 
*/
//level 3

const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: {

  },
  expenses: {

  },
  totalIncomes: function() {
    return this.incomes - this.expenses
  },
  totalExpenses: function() {
    return this.expenses
  },
  accountInfo: function() {
    return `${this.firstName} ${this.lastName}`
  },
  accountBalance: function() {
    return `has a total of ${this.totalIncomes()}€ and ${this.totalExpenses()}€ of expenses`
  },
  addIncome: function(n) {
    this.incomes += n 
  },
  addExpense: function(n) {
    this.expenses += n 
  }
}

//console.log(personAccount)

//2 - 3 - 4 
const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

function signup (object) {
  users.includes(object) ? console.log('you already have an account') : (users.push(object),console.log('new account created'))
}

function signin (email, password) {
  users.forEach(user => {
    (user.email == email && user.password == password) ? (user.isLoggedIn = true,console.log(`connected as ${user.username}`)) : user 
  });
}
