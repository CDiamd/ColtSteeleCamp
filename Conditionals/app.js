console.log ('BEFORE CONDITIONAL')
if(1+1 === 2) {
    console.log ('Math still works!')
}
console.log ('AFTER CONDITIONAL')
// BREAKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK 
const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday') {
    console.log ('UGHHH I HATE MONDAYS!!!');
}
else if (dayOfWeek === 'Saturday') {
    console.log ('I love Saturdays!')
}
// BREAKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
//AGES
//0-5 free 
// 5-10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR $10

const age = prompt('ENTER A AGE!'); 

if (age < 5) { 
    console.log ('You are a baby, you get in for free!');
}
else if (age < 10) { 
    console.log ('You are a child, you pay $10');
}
else if (age < 65) {
    console.log ('You are a adult, you pay $20');
}
else {
    console.log ('You are a senior, you pay $10');
}

// NESTING CONDITIONALS!!!! 

const password = prompt("please enter a new password");
if (password.length >= 6) {
    console.log ("LONG ENOUGH PASSWORD!")
}
else {
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS!");
}
if(password.indexOf (' ') === -1 ) {
    console.log("Good job! No space!");
}
else {
    console.log("Cannot have spaces!");
}