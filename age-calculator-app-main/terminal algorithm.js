console.log("Welcome to Lou's Magic Age Calculator");

let userName = prompt("What's your name?");
let birthDate = new Date(prompt("MM/DD/YYYY"));
console.log( "idea of how dates collected, birthDats is" + birthDate);
let currentDate = new Date();
let differenceInMilliseconds = currentDate.getTime() - birthDate.getTime();

console.log("birthDate is: " + birthDate.getTime());
console.log("currentDate is: " + currentDate.getTime());

let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; //year answer
let years = Math.floor(differenceInMilliseconds / millisecondsPerYear);

let millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // average month length
let months = Math.floor((differenceInMilliseconds % millisecondsPerYear) / millisecondsPerMonth);

let millisecondsPerDay = 1000 * 60 * 60 * 24; // day answer
let days = Math.floor((differenceInMilliseconds % millisecondsPerMonth) / millisecondsPerDay);

console.log("working magic 🔮🪄");
console.log("Hmnmnn, " + userName + ", you are " + years + " years, " + months + " months, and " + days + " days old! 🪄😎");
