
// DOM elements 

const outputEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('lower');
const lowerEl = document.getElementById('upper');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower:  getRamdomLower,
    upper:  getRamdomUpper,
    number: getRamdomNumber,
    symbol: getRamdomsymbol
};

// Reference source https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// create event listner

generateEl.addEventListener("click", ()  => {
    const length = parseInt(lengthEl.value);    
    const containsLower = lowerEl.checked;
    const containsUpper = upperEl.checked;
    const containsNumber = numberEl.checked;
    const containsSymbol = symbolEl.checked;


    
    outputEl.innerText = generatePassword(containsLower, 
        containsNumber, containsUpper, containsSymbol, length );

});
 

// Generate Passowrd function

function generatePassword(lower, upper, number, symbol, length){
//initialise passowrd variable
// remove the uncheked boxes
// loop over the length and call generator function for each type
// add final password to the password variable
 var generatedPassword = "";

 const typesCount = lower + upper + number + symbol;
 console.log("typescount:", typesCount);
 



}



// Character generator functions
// Reference source https://www.w3schools.com/html/html_charset.asp

// LowerCase random function using browser charset "a" being "97" and 25 alphabets to follow

function getRamdomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRamdomLower());

// Replicating the same as in lowerCase random function using browser charset ..with change "A" being 65 and 25 to follow

function getRamdomUpper (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}
console.log(getRamdomUpper());

// Replicating the same as for alphabets function using browser charset ..with change "0" being 48 and 9 to follow

function getRamdomNumber (){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

console.log(getRamdomNumber());

// Replicating similar function as above but charCode being avoided for ease of coding

function getRamdomsymbol (){
    const symbol = "!@#$%^&*(){}[]<>/?+.";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(getRamdomsymbol());


