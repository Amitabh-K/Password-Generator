
// DOM elements 

const outputEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('lower');
const lowerEl = document.getElementById('upper');
const numberEl = document.getElementById('number');
const specialCharEl = document.getElementById('specialChar');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower:  getRamdomLower,
    upper:  getRamdomUpper,
    number: getRamdomNumber,
    specialChar: getRamdomspecialChar
};

// Reference source https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// create event listner

/*

if (!lowerEl.checked && !upperEl.checked.checked && !numberEl.checked && specialCharEl.checked) {
    errorMessage.innerHTML = "Well, passwords cannot be blank."
    return;
}

*/


generateEl.addEventListener("click", function() {
    const length = parseInt(lengthEl.value);    
    const containsLower = lowerEl.checked;
    const containsUpper = upperEl.checked;
    const containsNumber = numberEl.checked;
    const containsspecialChar = specialCharEl.checked;


    
    outputEl.innerText = generatePassword(containsLower, 
        containsNumber, containsUpper, containsspecialChar, length );

});
 

// Generate Passowrd function

function generatePassword(lower, upper, number, specialChar, length){
//initialise passowrd variable
// remove the uncheked boxes
// loop over the length and call generator function for each type
// add final password to the password variable
 
var generatedPassword = "";

// count number of checked boxes

 const typesCount = lower + upper + number + specialChar;

 console.log("typescount:", typesCount);

 //array of objects lower, upper, number, specialChar  as key & filter out unckecked

 const typesArr = [{lower}, {upper}, {number}, {specialChar}].filter(item  => Object.values(item)[0])

 console.log("typesArr: ", typesArr);

if (typesCount ===0) {
     return("!!! Cannot generate bank password !!!"); 
   
    }

    if(length > 128) {
        alert("Enter number between 8 and 128");
        return '';

        
    }
    
    

    for (let i = 0; i < length; i += typesCount) {
typesArr.forEach(type =>{
const functname = Object.keys(type)[0];

    

    generatedPassword += randomFunc[functname]();
});

    }
  const combinedCharacters =  generatedPassword.slice(0, length);

    return combinedCharacters;

}

// copy the password to clipbord

clipboardEl.addEventListener("click", function() {
    const textarea = document.createElement('textarea');
    const password = outputEl.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
})



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

function getRamdomspecialChar (){
    const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}
console.log(getRamdomspecialChar());


