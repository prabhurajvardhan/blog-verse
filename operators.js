let x=8
let y=7

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

let z = 3
z+=4
console.log(z)
z*=6
console.log(z)
z-=2
console.log(z)
z/=4
console.log(z)
z%=3
console.log(z)

//comparision operators

let a =10,b="10"
console.log(a+b)
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<b)
console.log(a<=b)
console.log(a>b)
console.log(a>=b)

//logical operators
let age = 18
console.log(age<=20 && age>=40)
console.log(age>30 || age === 18)

let firstname = 'Prabhu Raj Vardhan'
let lastname = 'Batha'

console.log(firstname+' '+lastname)

//template literals
correctname = `Hello ${firstname} ${lastname} ,welcome to DevAstra!`
console.log(correctname)

if(age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}

let result = age>=18 ? "Eligible to vote":"you can vote"

console.log(result)

let num = 5
console.log(num++)
console.log(num)
console.log(++num)

//typeof operator

console.log(typeof num)
console.log(typeof "Prabhu")
console.log(typeof 18)