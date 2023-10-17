
// Number One:
// print all even number within 0 to 10 

const evenNumbers = document.getElementById("evenNumbers");
const showButton = document.getElementById("showButton");

showButton.addEventListener('click', () => {
    let inputText = "";

    for(let i = 0; i <= 100; i++){
        if(i % 2 !== 0){
            inputText = inputText + i + " ";
        }
    }
    evenNumbers.textContent = inputText;
})

// show in console

for(i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
};

// Number two:
// print total of all numbers of an array 



const num = [2, 55, 44, 21, 36, 89];

const  newNum = num.reduce(function(total, num){
    return total + num;
})
console.log(newNum);

// Number three:
// sort the numbers of array in descending order 

const myArr = [55, 78, 25, 36, 96, 54, 32, 100];

const newArray = myArr.sort(function(a, b){
    return a - b;
});

console.log(newArray);

// Number four:
// find out the negative numbers from an array 

const myNegative =  [-22, -66, 88, -9, -3, 33, 66];
let arr = [];

const newArr = myNegative.forEach(function(value){
   
    if(value < 0){
      return arr.push(value);
    }
    
})
    
console.log(arr);

// Number five: Problem solving
// return boolean if the number is true or false 

const evenNumber = myNum => {
    if(myNum % 10 === 0){
        return true;
    }else{
        return false
    }
}

console.log(evenNumber(77));


// Number six: Problem solving
// find out the total vowel from a sentence 

const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function findVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowel.includes(value)){
            count++
        }
    });

    return count;
}
console.log(findVowels("I am learning JavaScript"));


// show cats name by forEach loop

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const cat = document.getElementById('cats');
const showCats = document.getElementById('showCats');

showCats.addEventListener('click', () => {
    let newCat = "";

  cats.forEach(function(value){
    newCat = newCat + value + " , ";
  })
  cat.innerHTML = newCat;
})






