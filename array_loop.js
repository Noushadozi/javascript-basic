var numbers = [1, 2, 3, 4, 5, "ryan", 7, 8, 9];

console.log(numbers.length);
console.log(numbers[5]);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.push("ozi");
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift("ozi");
console.log(numbers);

for (var i = 0; i <= 100; i++) {
  console.log(i);
}

var numbers = [1, 2, 3, 4, 5, 8, 7, 8, 9];

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    if(element == 5){
        console.log("five");
    }
    console.log(element);
}


var temp = [];

var numbers = [1, 2, 3, 4, 5, 8, 7, 8, 9];

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];

    if(element % 2 == 0){
        temp.push(element);
    }
}
console.log(temp);

const friends2 = ["asif", "khairul", "hujaifa"];

for(var i = 0; i < friends.length; i++){
    const element = friends[i];
    if(element == "hujaifa"){
        console.log('HUJ');
    }
}
const friends = ["asif", "khairul", "hujaifaa"];

for(var i = 0; i < friends.length; i++){
    const element = friends[i];
    if(element[0].length > element[1].length && element[0].length > element[2].length){
        console.log("first bondhur mon boro");
    }
    else if(element[1].length > element[2].length){
        console.log("second bondhur mon boro");
    }
    else{
        console.log("third bondhur mon boro");
    }
}