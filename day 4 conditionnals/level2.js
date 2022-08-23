for (let index = 0; index < 100; index++) {
    if (index >= 80 && index <= 100) {
        console.log(`${index} -> A`)
    }
    else if (index <= 79 && index >= 60) {
        console.log('B')
    }
    else {
        console.log('l2p bozo')
    }
}

let months = ['January','February','March','April','May','June','July','August','September','October','November','December'] //useless
let userInput = months[0]
userInput = userInput.toLowerCase()

switch(userInput){
    case 'december':
    case 'january':
    case 'february':
        console.log('winter')
        break
    case 'march':
    case 'april':
    case 'may':
        console.log('spring')
        break
    default:
        console.log('not a month')
}