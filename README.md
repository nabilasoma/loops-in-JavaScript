
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


# What is a JavaScript Function?



# Function Syntax



#  Function Types

