let atm = new Date()
let hours = atm.getHours()
let minutes = atm.getMinutes()
let months = atm.getMonth().toString()
let days = atm.getDate().toString()
days.length == 1 ? days = '0'+days : days
months.length == 1 ? months = '0'+months : months

let years = atm.getFullYear().toString().substring(1)

let date = years.concat('-',months,'-',days,' ',hours,':',minutes,)
// the first date must respect a YYY-MM-DD HH:mm format where hours and minutes must be like 06
console.log(date)