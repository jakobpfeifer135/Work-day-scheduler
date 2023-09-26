// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs()


// when document loads then the code is set into action
 $(document).ready(function(){

 
    // TODO: Add a listener for click events on the save button. This code should
    // access the button and input field id and save the given text in local storage.
    var saveButton = $(".saveBtn")
    saveButton.on("click", function(event){
        event.default()
        var buttonId = $(this).attr("id")
        var inputField = $(this).siblings("description").val()
        localStorage.setItem(buttonId, inputField)
        populateSchedule()
    })
    //grabs the local storage values to set them ready for append
    function populateSchedule() {
        for (var index = 9; index < 18; index++) {
            var task = localStorage.getItem(index)
            $("#" + index + "").text(task)
        }
    }
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time

    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set

    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(today.format('MMM D, YYYY hh:mmA'))

})

//   GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar(done)
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm (done)
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



//use activity 25-dayjs and dom trav as well as 09-10 activites