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

var textInput = document.querySelector(".col-10")
var time = document.querySelector(".col-1")

var currentDate = moment().format("dddd, Do MMMM");
$("#currentDay").text(currentDate);

var currentHour = moment().format("HHmm");
$('.colorcode').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+6){
        $(this).addClass('future');
    }else if(val < currentHour && val > currentHour-6){
        $(this).addClass('past');
    }else if(val === currentHour){
        $(this).addClass('present');
    }else{
        $(this).css('background-color','White');
    }
});