/*input elements*/
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const convertAge = document.getElementById("convert-age");
let dayFormError = document.querySelector(".day-form-error");
let monthFormError = document.querySelector(".month-form-error");
let yearFormError = document.querySelector(".year-form-error");
const currentDate = new Date();


convertAge.addEventListener("click", ageCalc);




function ageCalc() {
    if (day.value == "" || month.value == "" || year.value =="") {
        dayFormError.textContent = "This field is required";
        monthFormError.textContent = "This field is required";
        yearFormError.textContent = "This field is required";
        //orr, you could find out how to change an elements id or class name from javascript, and then switch the id to an already styled error tag in css 
        console.log("OMOOO");
    } else {
        
    console.log("One step down!");
    /*output elements*/
    let yearsOutput = document.getElementById("years-output");
    let monthsOutput = document.getElementById("months-output");
    let daysOutput = document.getElementById("days-output");

    /* Dynamic user data handler */
    let userDay = day.value;
    let userMonth = month.value;
    let userYear = year.value;

    /*how tf do i make new date accept input??*/
    console.log(userMonth, userDay, userYear);
    let birthDate = new Date(month.value/day.value/year.value);
    console.log(birthDate);
    /*end of how tf do i make new date accept input??*/

    let differenceInMilliseconds = currentDate.getTime() - birthDate.getTime();
    


    let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; //year answer
    yearsOutput.textContent =  Math.floor(differenceInMilliseconds / millisecondsPerYear);

    let millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // average month length
    monthsOutput.textContent = Math.floor((differenceInMilliseconds % millisecondsPerYear) / millisecondsPerMonth);

    let millisecondsPerDay = 1000 * 60 * 60 * 24; // day answer
    daysOutput.textContent = Math.floor((differenceInMilliseconds % millisecondsPerMonth) / millisecondsPerDay);
  

    }
};
