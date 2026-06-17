// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

let inputChar = prompt("Enter a character (number or string):");
let asciiCode = inputChar.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    alert("The input is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    alert("The input is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is neither a number nor a letter.");
}


// 2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
if (num1 > num2) {
    alert(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);
} else {
    alert("Both integers are equal.");
}

//3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

    let num = Number(prompt("Enter a number:"));

    if (num > 0) {
        alert(num + " is a Positive Number");
    } 
    else if (num < 0) {
        alert(num + " is a Negative Number");
    } 
    else {
        alert(`The number is Zero<br>`);
    }

// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise

let ch = prompt("Enter a character:");

if (
    ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
    ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"
) {
    alert(true);
} else {
    alert(false);
}

//5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. 
// Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. 
// Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

let correctPassword = "admin123";

let userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}


//6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }


let hour = parseInt(prompt(`Please enter hours for 1 to 24`))

if (hour < 18) {
    alert("Good Day");
}else if(hour > 18){
    alert("Good Evening");
}

//7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements.

let time = parseInt(prompt("Enter time in 24 hours format (e.g., 1900 for 7pm):"));

if (time >= 0 && time < 1200) {
    alert(`Good Morning`) 
} else if (time >= 1200 && time < 1700) {
    alert(`Good Afternoon`)
} else if (time >= 1700 && time < 2100){
    alert(`Good Evening`)
} else if (time >= 2100 && time <2359) {
    alert(`Good Night`)
} else {
    alert(`Invalid Time`)
}