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

const saveBtn = document.querySelectorAll('button') 
// targets all button elements
const textAreaText = document.querySelectorAll('textarea') 
// targets all textarea elements

for (var i = 0; i < saveBtn.length; i++) { 
	// when a saveBtn is clicked,
	saveBtn[i].addEventListener("click", function() { 
		
		var hourId = 'hour' + i
		// save taskText
		var hourText = document.getElementById(hourId).value
		// save data in localStorage
		localStorage.setItem('hourText' + i, hourText)
		
	})
	
}

function loadBlocks() { 
	// for loop to input hours in correct time slots on page load/refresh - from localStorage
	for (var i = 0; i < textAreaText.length; i++) { 
    // on page load, not on button click

		var hourText = localStorage.getItem('hourText' + i)

		document.getElementById("hour" + i).value = hourText;
	}
}

loadBlocks();