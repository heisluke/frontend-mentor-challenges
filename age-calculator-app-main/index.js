let convertAge = document.getElementById("convert-age");

convertAge.addEventListener("click", function() {
    console.log("One step down!");
    
})

/*if input is empty return to textcontent is empty else run p

Sure thing! Here's the basic algorithm you can follow to display a user's age in years, months, and days:

Get the user's birthdate and store it in a variable as a Date object.
Get the current date and store it in a variable as a Date object.
Calculate the difference between the current date and the user's birthdate in milliseconds.
Convert the difference in milliseconds to the number of years, months, and days.
Display the user's age in years, months, and days on the web page.
Here's how you can break down each step of the algorithm:

To get the user's birthdate, you can use the prompt() function to prompt the user to enter their birthdate in a specific format, such as "MM/DD/YYYY". Once the user enters their birthdate, you can create a new Date object from it like this:

let birthdate = new Date("MM/DD/YYYY");



2. To get the current date, you can create a new Date object without any parameters, like this:

let currentDate = new Date();

3. To calculate the difference between the current date and the user's birthdate, you can subtract the birthdate from the current date and store the result in a variable, like this:

let differenceInMilliseconds = currentDate.getTime() - birthdate.getTime();

4. To convert the difference in milliseconds to the number of years, months, and days, you can use some basic math. Here's one way to do it:

let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
let years = Math.floor(differenceInMilliseconds / millisecondsPerYear);
let millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // average month length
let months = Math.floor((differenceInMilliseconds % millisecondsPerYear) / millisecondsPerMonth);
let millisecondsPerDay = 1000 * 60 * 60 * 24;
let days = Math.floor((differenceInMilliseconds % millisecondsPerMonth) / millisecondsPerDay);


5. Here, we first define the number of milliseconds in a year, and then use Math.floor() to calculate the number of whole years between the current date and the user's birthdate. We then define the number of milliseconds in a month (using an average month length of 30.44 days), and use Math.floor() to calculate the number of whole months between the current date and the user's birthdate. Finally, we define the number of milliseconds in a day, and use Math.floor() to calculate the number of whole days between the current date and the user's birthdate.

To display the user's age in years, months, and days on the web page, you can use document.write() or update an HTML element using document.getElementById(). Here's an example using document.write():

document.write("Your age is " + years + " years, " + months + " months, and " + days + " days.");


This will display the user's age in the format "Your age is X years, Y months, and Z days." If you want to display the age in a different format, you can modify the output accordingly.

That's it! This algorithm should give you a good starting point for building an age calculator that displays a user's age in years, months, and days.

*/