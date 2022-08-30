// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentDate = moment().format("dddd, Do MMMM");
$("#currentDay").text(currentDate);
// Sets the current date

var currentHour = moment().format('H')
// var currentHour = '14'
// Above is a test variable to check for functionality

var rowHour;
var rows = document.getElementsByClassName("row")
rowsArray = Array.from(rows)
rowsArray.forEach(row => {
    rowHour = row.id;
        if (currentHour > rowHour) { 
            pastClass = document.getElementById(rowHour)
            pastClass.classList.add("past")
		} 
        if (currentHour === rowHour) { 
            currentClass = document.getElementById(rowHour)
            currentClass.classList.add("present")
		} 
        if (currentHour < rowHour) { 
			futureClass = document.getElementById(rowHour)
            futureClass.classList.add("future")
        }
})
// This makes each row within the rows variable (row tag in html) into an array and checks for their id against the current hour and applies classes based on the time.

function saveUserData() {

}