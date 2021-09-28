var day = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("hh:mm");
$("#currentDay").html(day);

function colorTime() {
  var hour = moment().hour();
  if (hour < 9) {
    $("#nineam").addClass("future");
  } else if (hour === 9) {
    $("#nineam").addClass("present");
  } else if (hour > 9) {
    $("#nineam").addClass("past");
  }
  if (hour < 10) {
    $("#tenam").addClass("future");
  } else if (hour === 10) {
    $("#tenam").addClass("present");
  } else if (hour > 10) {
    $("#tenam").addClass("past");
  }
  if (hour < 11) {
    $("#elevenam").addClass("future");
  } else if (hour === 11) {
    $("#elevenam").addClass("present");
  } else if (hour > 11) {
    $("#elevenam").addClass("past");
  }
  if (hour < 12) {
    $("#twelvepm").addClass("future");
  } else if (hour === 12) {
    $("#twelvepm").addClass("present");
  } else if (hour > 12) {
    $("#twelvepm").addClass("past");
  }
  if (hour < 13) {
    $("#onepm").addClass("future");
  } else if (hour === 13) {
    $("#onepm").addClass("present");
  } else if (hour > 13) {
    $("#onepm").addClass("past");
  }
  if (hour < 14) {
    $("#twopm").addClass("future");
  } else if (hour === 14) {
    $("#twopm").addClass("present");
  } else if (hour > 14) {
    $("#twopm").addClass("past");
  }
  if (hour < 15) {
    $("#threepm").addClass("future");
  } else if (hour === 15) {
    $("#threepm").addClass("present");
  } else if (hour > 15) {
    $("#threepm").addClass("past");
  }
  if (hour < 16) {
    $("#fourpm").addClass("future");
  } else if (hour === 16) {
    $("#fourpm").addClass("present");
  } else if (hour > 16) {
    $("#fourpm").addClass("past");
  }
  if (hour < 17) {
    $("#fivepm").addClass("future");
  } else if (hour === 17) {
    $("#fivepm").addClass("present");
  } else if (hour > 17) {
    $("#fivepm").addClass("past");
  }
}

$("#saveNine").on("click", function (event) {
  event.preventDefault();
  var taskNine = $("#nineam").val().trim();
  localStorage.setItem("nine-am", taskNine);
});

$("#saveTen").on("click", function (event) {
  event.preventDefault();
  var taskTen = $("#tenam").val().trim();
  localStorage.setItem("ten-am", taskTen);
});

$("#saveEleven").on("click", function (event) {
  event.preventDefault();
  var taskEleven = $("#elevenam").val().trim();
  localStorage.setItem("eleven-am", taskEleven);
});

$("#saveTwelve").on("click", function (event) {
  event.preventDefault();
  var taskTwelve = $("#twelvepm").val().trim();
  localStorage.setItem("twelve-pm", taskTwelve);
});

$("#saveOne").on("click", function (event) {
  event.preventDefault();
  var taskOne = $("#onepm").val().trim();
  localStorage.setItem("one-pm", taskOne);
});

$("#saveTwo").on("click", function (event) {
  event.preventDefault();
  var taskTwo = $("#twopm").val().trim();
  localStorage.setItem("two-pm", taskTwo);
});

$("#saveThree").on("click", function (event) {
  event.preventDefault();
  var taskThree = $("#threepm").val().trim();
  localStorage.setItem("three-pm", taskThree);
});

$("#saveFour").on("click", function (event) {
  event.preventDefault();
  var taskFour = $("#fourpm").val().trim();
  localStorage.setItem("four-pm", taskFour);
});

$("#saveFive").on("click", function (event) {
  event.preventDefault();
  var taskFive = $("#fivepm").val().trim();
  localStorage.setItem("five-pm", taskFive);
});

function loadTask() {
  var nineAmEl = localStorage.getItem("nine-am");
  $("#nineam").append(nineAmEl);
  var tenAmEl = localStorage.getItem("ten-am");
  $("#tenam").append(tenAmEl);
  var elevenAmEl = localStorage.getItem("eleven-am");
  $("#elevenam").append(elevenAmEl);
  var twelvePmEl = localStorage.getItem("twelve-pm");
  $("#twelvepm").append(twelvePmEl);
  var onePmEl = localStorage.getItem("one-pm");
  $("#onepm").append(onePmEl);
  var twoPmEl = localStorage.getItem("two-pm");
  $("#twopm").append(twoPmEl);
  var threePmEl = localStorage.getItem("three-pm");
  $("#threepm").append(threePmEl);
  var fourPmEl = localStorage.getItem("four-pm");
  $("#fourpm").append(fourPmEl);
  var fivePmEl = localStorage.getItem("five-pm");
  $("#fivepm").append(fivePmEl);
}

loadTask();
colorTime();
