let person ={
    name:'Prabhu',
    age:18

}
console.log(person.name)
console.log(person["age"])
const {name,age} = person

let fruits = ["apple","banana","mango"]
console.log(fruits[0])

let number = [1,2,3,4,5,6]

let square = number.map((num)=> num*num)
console.log(square)

let even = number.filter((num)=> num%2==0)
console.log(even)

let sum=number.reduce((present,num)=>present+num,0)
console.log(sum)

let ArrObj = [{
    name:'Prabhu',
    marks:88
},{
    name:'Pavan',
    marks:77
},{
    name:'Rahul',
    marks:99
}]

for(let person of ArrObj){
    console.log(person)
}

let highest=0
let topper
for(let person of ArrObj){
    if(person.marks>highest){
        highest = person.marks
        topper = person.name
    }
    
}

console.log(`${topper} scored highest marks of ${highest}`)



