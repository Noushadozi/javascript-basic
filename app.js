var name = "rahim";

console.log(name);

var i = 0;
console.log(i);

var num1 = 10;
var num2 = "20.342344";
// var convertNum2 = parseFloat(num2);

const sum = num1 * num2;

console.log(sum.toFixed(3));

// if else from here

var name = "Ryan Goslin";

if(name == "Hero Alam"){
    console.log("baler hero");
}
else if(name == "Ryan Goslin"){
    console.log("Literally Us :)");
}
else{
    console.log('WhatEver');
}

var num0 = 333;
var num = 75;

if(num == 75 && num0 == 333){
    console.log("shakib bhai r gayle");
} 
else{
    console.log("baler player");
}


if(num == 75 || num0 == 333){
    console.log("bhalo player");
} 
else{
    console.log("baler player");
}

var num5 = 990;

if(num5 > 100){
    console.log('bigger then hundred');
}
else if(num5 < 100){
    console.log('smaller then hundred');
}
else{
    console.log("equal hundred")
}


var num1 = 100;
var num2 = 200;
var num3 = 300;

if(num1 > num2 && num1 > num3){
    console.log("num1 is biggest");
}
else if(num2 > num3){
    console.log("num2 is biggest");
}
else{
    console.log("num3 is biggest");
} 

 var number = 30;

if(number == 30){
    if(typeof number == "string"){
        console.log("string and thirty");
    }
    else{
        console.log("thirty but not string type");
    }
}
else{
    console.log("nothing")
}

var num = 100;

if(num / 2 != 1){
    console.log("even number");
}
else{
    console.log("odd number");
}




// 0-32 = F
// 33-49 = D
// 50-59 = C
// 60-69 = B
// 70-79 = A
// 80-100 = A+

var result = 79;

if(result > 100){
    console.log('undefined result');
}
else if(result <= 100 && result >= 0){
    if(result >= 0 && result <= 32){
        console.log("your grade is 'F'");
    }
    else if(result >= 33 && result <= 49){
        console.log("your grade is 'D'");
    }
    else if(result >= 50 && result <= 59){
        console.log("your grade is 'C'");
    }
    else if(result >= 60 && result <= 69){
        console.log("your grade is 'B'");
    }
    else if(result >= 70 && result <= 79){
        console.log("your grade is 'A'");
    }
    else{
        console.log("your grade is 'A+'");
    }
}
else{
    console.log('no negative marks allowed')
}