
//Create variable to set current date in header
let DateTime = luxon.DateTime;

let currentDate = DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit'});
let today = DateTime.local();
let currentHr = today.get('hour');
let now = today.toLocaleString(DateTime.TIME_SIMPLE);
console.log(currentHr)
console.log(now)



$(document).ready(function () {
    //Set the current date and day of the week in the header
$("#currentDay").text(currentDate);
$(".timerightnow").text(now);
 $("#mainContainer").addClass("time-block");
 //call function to render the planner
 renderPlanner();

});

//Object array with data to fill out calender and to check actual time against
var myDay = [{
  hour : "9",
  dhour : "9 am"
},
{
  hour : "10",
  dhour : "10 am"
},
{
  hour : "11",
  dhour : "11 am"
},
{
  hour : "12",
  dhour : "12 pm"
},
{
  hour : "13",
  dhour : "1 pm"
},
{
  hour : "14",
  dhour : "2 pm"
},
{
  hour : "15",
  dhour : "3 pm"
},
{
  hour : "16",
  dhour : "4 pm"
},
{
  hour : "17",
  dhour : "5 pm"
}];


//function to render planner
function renderPlanner() {
//used forEach statement to make row, etc for each hour in the array
myDay.forEach(function(myDay){
//create row to hold everything
 var theRow = $("<form>").addClass("row");
 $(".container").append(theRow);

 //create time section, append
var hourSection = $("<section>").addClass("hour col-3 pt-4");
hourSection.text(myDay.dhour);
theRow.append(hourSection);

//create actual input field, append
var inputField = $("<textarea>").addClass("textarea col-7");
inputField.type = "text";
theRow.append(inputField);

//create button to save schedule, add fontawesome icon, append
var theButton = $("<button>").addClass("saveBtn col-2");
theButton.addClass("far fa-save fa-3x");
theRow.append(theButton);

//if statement to assign class according to time of day
if (myDay.hour < currentHr) {
  inputField.addClass("past");
  //disable input to time blocks that are past
  inputField.prop("disabled", true);
} else if (myDay.hour == currentHr) {
  inputField.addClass("present");
} else {
  inputField.addClass("future");
}

//create variable to define key to retrieve saved items from local storage
  var theHour = myDay.hour;

  var reminders = localStorage.getItem(theHour);
  console.log(reminders);

  if (localStorage.getItem(theHour) !== null) {
  //set inner text of planner to saved reminders
  inputField.val(reminders);
  }

//add click event to buttons to save user input to local storage
theRow.on("click", "button", function(event) {
      event.preventDefault()

      //set saved reminders to local storage
      var theHour = myDay.hour;
      var reminders = inputField.val();
 
  localStorage.setItem(theHour, reminders);
        });        

});
}