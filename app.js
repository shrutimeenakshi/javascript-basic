// Identifiers - let, const & console.log

const myName = "Prem"

let num = 5

// console.log(myName) // Prem
// console.log(num) // 5

num = 10

// console.log(num) // 10



// Data types

let myNumber;
// console.log(myNumber) // undefined

let boolValue = true
let nullValue = null

// console.log(boolValue)
// console.log(nullValue)

//  Array

let arr = [1, 20, "John", "good"]
// console.log(arr)

let intergerArray = [2, 5, 7, 9, 11]

// console.log(intergerArray.length)
// console.log(intergerArray[0])
// console.log(intergerArray[1])
// console.log(intergerArray[intergerArray.length-1])


// Object

const person = {
  name: {
    firstName: "John",
    secondName: "Doe"
  },
  age: 25,
  place: "London"
}

// console.log(person)


const student = {
  name: "John",
  age: 25,
  courses: [
    {
      courseName: "JS",
      courseCredits: 3
    },
    {
      courseName: "MERN",
      courseCredits: 4
    }
  ]
}

// console.log(student.courses)
// console.log(student.courses[0])
// console.log(student.courses[1].courseName)


// Template strings

let myNameNew = "Prem"

myNameNew = "Gokul"

// console.log(`Hello, ${myNameNew}!`)

// Prompt & Alert

const username = prompt('Enter your username: ')
// console.log(username)

//alert('hello, ${username}!')
// operators
let a=7
let b=3
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
a++
console.log(a)
b--
console.log(b)
//comparators
console.log(3>4)
console.log(3<4)
console.log(3>=4)
console.log(3>=3)
console.log(3=='3')
console.log(3==='3')
//conditionals
let weathercondition = "Sunny"
let subcondition = "Too Hot"
if(weathercondition ==="Cloudy"){
  console.log("Take the umbrella")
}else if (weathercondition === "Rainy"){
console.log("Use the umbrella")
}else if (weathercondition ==="Snny"){
  if (subcondition ==="Too HOt"){
    console.log("use the umbrella")
  }else{
    console.log("don't use the umbrella")
  }
}else{
  console.log("don't take the umbrella")
}