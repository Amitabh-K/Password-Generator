
// DOM elements 

const outputEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const specialCha = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower:  getRamdomLowerCase,
    upper:  getRamdomUpperCase,
    number: getRamdomNumber,
    SpecialChar: getRamdomSpecialChar
};

// Reference source https://www.w3schools.com/js/js_htmldom_eventlistener.asp

generateEl.addEventListener("click", ()  => {
    const length = parseInt(lengthEl.value);
    
    console.log(typeof length);

});
 




// Character generator functions
// Reference source https://www.w3schools.com/html/html_charset.asp

// LowerCase random function using browser charset "a" being "97" and 25 alphabets to follow

function getRamdomLowerCase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRamdomLowerCase());

// Replicating the same as in lowerCase random function using browser charset ..with change "A" being 65 and 25 to follow

function getRamdomUpperCase (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}
console.log(getRamdomUpperCase());

// Replicating the same as for alphabets function using browser charset ..with change "0" being 48 and 9 to follow

function getRamdomNumber (){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

console.log(getRamdomNumber());

// Replicating similar function as above but charCode being avoided for ease of coding

function getRamdomSpecialChar (){
    const specialChar = "!@#$%^&*(){}[]<>/?+.";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

console.log(getRamdomSpecialChar());


