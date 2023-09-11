let output = document.getElementById('output')
// let subtraction = document.getElementById('subtraction')
// let multiplication = document.getElementById('multiplication')
// let percentage = document.getElementById('percentage')
// let division = document.getElementById('division')
// let equal = document.getElementById('equal')
// let buttons = document.querySelectorAll('.bloc button').innerHTML

// function additionn () {
//   let newadd= addition.split()
//   newadd = calculation + calculation
//   console.log(calculation)
// }

let result;
let calculation=[]
addition.addEventListener('click', function  additionn () {
  let addition = document.getElementById('addition').innerHTML
  let secadd = addition.split()
  calculation.push(secadd) 
  result = calculation.join('')
  output.innerHTML = result
})

subtraction.addEventListener('click', function  suntactionn () {
  let subtraction = document.getElementById('subtraction').innerHTML
  let secsub = subtraction.split()
  calculation.push(secsub) 
  result = calculation.join('')
  output.innerHTML = result
})
multiplication.addEventListener('click', function  multiplicationn () {
  let multiplication = document.getElementById('multiplication').innerHTML
  let secMultiplication = multiplication.split()
  calculation.push(secMultiplication) 
  result = calculation.join('')
  output.innerHTML = result
})
division.addEventListener('click', function divisionn () {
  let division = document.getElementById('division').innerHTML
  let secdivisiontion = division.split()
  calculation.push(secdivisiontion) 
  result = calculation.join('')
  output.innerHTML = result
})
// plusminus.addEventListener('click', function plusMinus () {
//   let plusminus = document.getElementById('plus-minus').innerHTML
//   let secplus = plusminus.split()
//   calculation.push(secplus) 
//   result = calculation.join('')
//   output.innerHTML = result
// })
percentage.addEventListener('click', function percentagee () {
  let percentage = document.getElementById('percentage').innerHTML
  let secpercentage = percentage.split()
  calculation.push(secpercentage) 
  result = calculation.join('')
  output.innerHTML = result
})
dot.addEventListener('click', function dott () {
  let dot = document.getElementById('dot').innerHTML
  let secdot = dot.split()
  calculation.push(secdot) 
  result = calculation.join('')
  output.innerHTML = result
})

equal.addEventListener('click', function  equall () {
  let equal = document.getElementById('equal').innerHTML
  eval(result)
  output.textContent = eval(result)
  console.log(result)
})

clear.addEventListener('click', function deleted() {
let clear = document.getElementById('clear')
calculation=[]
result = " "
output.innerHTML = result
console.log(result)

})

num.addEventListener('click', function nine(){
  let num9 = document.getElementById('num').innerHTML
  let neww = num9.split('')
  calculation.push(neww)
  result = calculation.join('')
  output.innerText = result
  console.log(result);

})
number.addEventListener('click', function seven() {
  let number = document.getElementById('number').innerHTML
  let new7 = number.split("")
  calculation.push(new7)
  result = calculation.join('')
  // calculation.join()
  output.innerText = result
  console.log(result)
 } )

numbers.addEventListener('click', function eight() {
  let numbers = document.getElementById('numbers').innerHTML
  let new8 = numbers.split('')
  calculation.push(new8)
  result = calculation.join('')
  console.log(result)
  output.innerText = result
})

sixth.addEventListener('click', function six() {
  let sixth = document.getElementById('sixth').innerHTML
  let new6 = sixth.split('')
  calculation.push(new6)
  result = calculation.join('')
  output.innerText = result
})

fifth.addEventListener('click', function five() {
  let fifth = document.getElementById('fifth').innerHTML
  let new5 = fifth.split('')
  calculation.push(new5)
  result = calculation.join('')
  output.innerText = result
})
forth.addEventListener('click', function four() {
  let forth = document.getElementById('forth').innerHTML
  let new4 = forth.split('')
  calculation.push(new4)
  result = calculation.join('')
  output.innerText = result
})
third.addEventListener('click', function three() {
  let third = document.getElementById('third').innerHTML
  let new3 = third.split('')
  calculation.push(new3)
  result = calculation.join('')
  output.innerText = result
})
second.addEventListener('click', function two() {
  let second = document.getElementById('second').innerHTML
  let new2 = second.split('')
  calculation.push(new2)
  result = calculation.join('')
  output.innerText = result
})
first.addEventListener('click', function one() {
  let first = document.getElementById('first').innerHTML
  let new1 = first.split('')
  calculation.push(new1)
  result=calculation.join('')
  output.innerText = result
})
zero.addEventListener('click', function nut () {
  let zero = document.getElementById('zero').innerHTML
  let new0 = zero.split('')
  calculation.push(new0)
  result = calculation.join('')
  output.innerText = result
})