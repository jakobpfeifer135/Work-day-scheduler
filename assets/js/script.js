// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();

// when document loads then the code is set into action
$(document).ready(function () {
  $("#currentDay").text(today.format("MMM D, YYYY hh:mmA"));
  var currentHour = dayjs().hour();
  console.log(currentHour);

  // access the button and input field id and save the given text in local storage.

  var saveButton = $(".saveBtn");
  saveButton.on("click", function (event) {
    event.preventDefault();
    var buttonId = $(this).attr("id");
    var inputField = $(this).siblings(".description").val();
    localStorage.setItem(buttonId, inputField);
    populateSchedule();
  });

  //grabs the local storage values to set them ready for append
  
  populateSchedule();

  function populateSchedule() {
    for (var index = 9; index < 18; index++) {
      var task = localStorage.getItem(index);
      $("#" + index + "").text(task);
    }
  }

  displayColors();
  // this displays the colors if it matches certain criteria time based relative to our current hour
  function displayColors() {
    var displayBlock = $(".description");
    displayBlock.each(function () {
      var hour = $(this).attr("id");
      if (currentHour > hour) {
        $(this).addClass("past");
      } else if (currentHour == hour) {
        $(this).addClass("present");
        $(this).remove("past");
      } else if (currentHour < hour) {
        $(this).addClass("future");
        $(this).remove("past");
        $(this).remove("present");
      }
    });
  }
});
