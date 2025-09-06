function myfunc(){
    console.log("Welcome to DevAstra!")
}

myfunc()

function add(x,y){
    return x+y
}

result = add(2,3)
console.log(result)

const pi = 3.14

console.log(pi)

const multiply = function (x,y){
    return x*y
}
console.log(multiply(2,4))

//arrow function

const square =(x)=>x*x
console.log(square(5))

const subtract=(x,y)=> {
    console.log(x,y)
    return x-y;
}

console.log(subtract(3,8))
