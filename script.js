
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
 
var genPwd = "";

// count number of checked boxes

 const varCountType = lower + upper + number + specialChar;

 console.log("varCountType:", varCountType);

 //array of objects lower, upper, number, specialChar  as key & filter out unckecked

 const varCountArr = [{lower}, {upper}, {number}, {specialChar}].filter(item  => Object.values(item)[0])

 console.log("varCountArr: ", varCountArr);

if (varCountType ===0) {
    return "";
    }

    for (let i = 0; i < length; i += varCountType) {
varCountArr.forEach(type =>{
const functname = Object.keys(type)[0];

    

    genPwd += randomFunc[functname]();
});

    }
  const allChar =  genPwd.slice(0, length);

    return allChar;

}

// copy the password to clipbord

clipboardEl.addEventListener("click", function() {
    const pwdTextArea = document.createElement('pwdTextArea');
    const password = outputEl.innerText;

    if(!password) {
        return;
    }

    pwdTextArea.value = password;
    document.body.appendChild(pwdTextArea);
    pwdTextArea.select();
    document.execCommand("copy");
    pwdTextArea.remove();
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
    const specialChar = "!@#$%^&*(){}[]<>/?+.";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

console.log(getRamdomspecialChar());




