/*input elements*/
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const convertAge = document.getElementById("convert-age");
let dayFormError = document.querySelector(".day-form-error");
let monthFormError = document.querySelector(".month-form-error");
let yearFormError = document.querySelector(".year-form-error");
let ghostStyler = document.querySelector("#ghost-styler")
const currentDate = new Date();


convertAge.addEventListener("click", ageCalc);
/*this is cool, when will my stats sync?*/



function ageCalc() {
    if (day.value == "" || month.value == "" || year.value =="") {
        dayFormError.textContent = "This field is required";
        monthFormError.textContent = "This field is required";
        yearFormError.textContent = "This field is required";
        //the code below  send styles an empty span tag to show errors
        ghostStyler.innerHTML = "<style> .top-label { color: hsl(0, 100%, 67%);} input[type=text]{border: 1px solid hsl(0, 100%, 67%);}  </style>"

    } else if (day.value > 31 || month.value > 12 || year.value > currentDate.getFullYear()) {
        dayFormError.textContent = "Must be a valid day";
        monthFormError.textContent = "Must be a valid month";
        yearFormError.textContent = "Must be in the past";
        ghostStyler.innerHTML = "<style> .top-label { color: hsl(0, 100%, 67%);} input[type=text]{border: 1px solid hsl(0, 100%, 67%);}  </style>"
        console.log("todays year is " + currentDate.getFullYear() );

    } else {
        //idk a better way to reset the paragraph
        dayFormError.textContent = "";
        monthFormError.textContent = "";
        yearFormError.textContent = "";
        ghostStyler.innerHTML = "<style> .top-label { color: hsl(0, 1%, 44%);} input[type=text]{border: 1px solid hsl(0, 0%, 86%);}  </style>"
        console.log("One step down!");

        /*output elements*/
        let yearsOutput = document.getElementById("years-output");
        let monthsOutput = document.getElementById("months-output");
        let daysOutput = document.getElementById("days-output");

        /* user input handler */
        let userDay = day.value;
        let userMonth = month.value;
        let userYear = year.value;

        /*it workksss 😭😭😭😭, the new date() just needs the value to have "/" or "-" seperating it!*/
        let birthDate = new Date(userMonth+"-"+userDay+"-"+userYear);
        console.log(birthDate);
        

        let differenceInMilliseconds = currentDate.getTime() - birthDate.getTime();
        
        let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; //year answer
        yearsOutput.textContent =  Math.floor(differenceInMilliseconds / millisecondsPerYear);

        let millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // average month length
        monthsOutput.textContent = Math.floor((differenceInMilliseconds % millisecondsPerYear) / millisecondsPerMonth);

        let millisecondsPerDay = 1000 * 60 * 60 * 24; // day answer
        daysOutput.textContent = Math.floor((differenceInMilliseconds % millisecondsPerMonth) / millisecondsPerDay);
    

    }
};
