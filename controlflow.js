let marks=85

if(marks>=90){
    console.log("Grade : A")
}
else if(marks>=80){
    console.log("Grade : B")
}
else if(marks>=70){
    console.log("Grade : C")
}
else{
    console.log("Fail!")
}

let day = 2;
switch(day){
    case 1:
        console.log("sunday")
        break
    case 2:
        console.log("monday")
        break
    case 3:
        console.log("tuesday")
        break
    case 4:
        console.log("wednesday")
        break
    case 5:
        console.log("thursday")
        break
    case 6:
        console.log("friday")
        break
    case 7:
        console.log("saturday")
        break
    default:
        console.log("Invalid!")
        break
}


for(let i=0;i<10;i++){
    console.log(i)

}
let i=0
while(i < 100){
    console.log(i)
    i++
}

do{
    console.log(i)
    i++
}while(i<100);

let colors = ["red","white","blue","green"]

for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
for(let color of colors ){
    console.log(color)
}
let person ={
    name:"Prabhu",
    age:18,
    roll:8

}

for(let key in person){
    console.log(`${key} : ${person[key]}`)
}

for(let i=5;i>=0;i--){
    if(i==5){
        continue
    }
    else if(i==0){
        break
    }
    console.log(i)
}
