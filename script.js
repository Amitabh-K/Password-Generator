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

// Replicating thr same as for alphabets function using browser charset ..with change "0" being 48 and 9 to follow

function getRamdomNumber (){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

console.log(getRamdomNumber());