
//Create variable to set current date in header
let DateTime = luxon.DateTime;
let Interval = luxon.Interval;
let Duration = luxon.Duration;

let currentDate = DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit'});
let today = DateTime.local();
let currentHr = today.get('hour');
let now = today.toLocaleString(DateTime.TIME_SIMPLE);
console.log(currentHr)
console.log(now)



$(document).ready(function () {
    //Set the current date and day of the week in the header
$("#currentDay").text(currentDate);
 $("#mainContainer").addClass("time-block");
});

//Object array with data to fill out calender and to check actual time against
var myDay = [{
  hour : "9",
  dhour : "9",
  amPM : "am"
},
{
  hour : "10",
  dhour : "10",
  amPM : "am"
},
{
  hour : "11",
  dhour : "11",
  amPM : "am"
},
{
  hour : "12",
  dhour : "12",
  amPM : "pm"
},
{
  hour : "13",
  dhour : "1",
  amPM : "pm"
},
{
  hour : "14",
  dhour : "2",
  amPM : "pm"
},
{
  hour : "15",
  dhour : "3",
  amPM : "pm"
},
{
  hour : "16",
  dhour : "4",
  amPM : "pm"
},
{
  hour : "17",
  dhour : "5",
  amPM : "pm"
}];

//used forEach statement to make row, etc for each hour in the array
myDay.forEach(function(myDay){
//create row to hold everything
 var theRow = $("<form>").addClass("row");
 $(".container").append(theRow);

 //create time section, append
var hourSection = $("<section>").addClass("hour col-3 pt-4");
hourSection.text(myDay.dhour + myDay.amPM);
theRow.append(hourSection);

//create actual input field, append
var inputField = $("<textarea>").addClass("textarea col-7");
theRow.append(inputField);


//create button to save schedule, append
var theButton = $("<button>").addClass("saveBtn col-2");
theButton.addClass("far fa-save fa-3x");
theRow.append(theButton);
//theButton.click(saveButton());

//if statement to assign class according to time of day
if (myDay.hour < currentHr) {
  inputField.addClass("past");
} else if (myDay.hour == currentHr) {
  inputField.addClass("present");
} else {
  inputField.addClass("future");
}
})


