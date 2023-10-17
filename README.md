
#     Uses of For loops

Loops are all about doing the same thing over and over again. Often, the code will be slightly different each time round the loop, or the same code will run but with different variables. 
we can use for loop for getting repetitive elements. I use here dom element for showing all odd numbers from 0 to 100 by clicking a button.

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

I have also show all even numbers by using for loops on console

for(i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
};


# uses of forEach loop

The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order. Unlike map() , forEach() always returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.
 we can find out all vowel from a sentence by using forEach loop

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

# The For Of Loop

The JavaScript for of statement loops through the values of an iterable object.
It lets us loop over iterable data structures such as Arrays, Strings, Maps, etc.

const myDolls = document.getElementById('myDolls');
const myDoll = ['Barbi', 'Fairy', 'Red Belvet', 'Micky Mouse', 'Sleepy Baby', 'Dolphin'];
let newDolls = "";
for(doll of myDoll){ 
    newDolls = newDolls + doll + " </br> ";
}
myDolls.innerHTML = newDolls;

#  The For In Loop

The for in statement loops through the properties of an object----

const numbers = document.getElementById('numbers');
const showNumbers = document.getElementById('showNumbers');
const personNames = {fname:"Nabila", lname:"Niar", job: "Frontend developer"}; 

let num2 = "";
showNumbers.addEventListener('click', () => {
    for(let x in personNames){
        num2 = num2 + personNames[x] + " ";
    }
    numbers.textContent = num2;
});


