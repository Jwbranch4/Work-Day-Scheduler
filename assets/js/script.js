var day = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("hh:mm");
console.log(currentTime);

$("#currentDay").html(day);

function colorTime() {
  var hour = moment().hour();
  if (hour < 9) {
    $("#9am").addClass("future");
  } else if (hour === 9) {
    $("#9am").addClass("present");
  } else if (hour > 9) {
    $("#9am").addClass("past");
  }
  if (hour < 10) {
    $("#10am").addClass("future");
  } else if (hour === 10) {
    $("#10am").addClass("present");
  } else if (hour > 10) {
    $("#10am").addClass("past");
  }
  if (hour < 11) {
    $("#11am").addClass("future");
  } else if (hour === 11) {
    $("#11am").addClass("present");
  } else if (hour > 11) {
    $("#11am").addClass("past");
  }
  if (hour < 12) {
    $("#12am").addClass("future");
  } else if (hour === 12) {
    $("#12am").addClass("present");
  } else if (hour > 12) {
    $("#12pm").addClass("past");
  }
  if (hour < 13) {
    $("#1pm").addClass("future");
  } else if (hour === 13) {
    $("#1pm").addClass("present");
  } else if (hour > 13) {
    $("#1pm").addClass("past");
  }
  if (hour < 14) {
    $("#2pm").addClass("future");
  } else if (hour === 14) {
    $("#2pm").addClass("present");
  } else if (hour > 14) {
    $("#2pm").addClass("past");
  }
  if (hour < 15) {
    $("#3pm").addClass("future");
  } else if (hour === 15) {
    $("#3pm").addClass("present");
  } else if (hour > 15) {
    $("#3pm").addClass("past");
  }
  if (hour < 16) {
    $("#4pm").addClass("future");
  } else if (hour === 16) {
    $("#4pm").addClass("present");
  } else if (hour > 16) {
    $("#4pm").addClass("past");
  }
  if (hour < 17) {
    $("#5pm").addClass("future");
  } else if (hour === 17) {
    $("#5pm").addClass("present");
  } else if (hour > 17) {
    $("#5pm").addClass("past");
  }
}

colorTime();
