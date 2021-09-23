var day = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("hh:mm");
$("#currentDay").html(day);

var tasks = {};

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

$(".description").on("click", "textarea", function () {
  var text = $(this).text().trim();
  var textInput = $("<textarea>").val(text);

  textInput.trigger("focus");
});

$(".description").on("blur", "textarea", function () {
  var text = $(this).val().trim();
  var id = $(this).closest(".description").attr("id");
  console.log(text);
  saveTasks(text);
});

function saveTasks(text) {
  localStorage.setItem("tasks", JSON.stringify(text));
}

function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing is in localStorage
  if (!tasks) {
    tasks = {
      nineam: [],
      tenam: [],
      elevenam: [],
      twelvepm: [],
      onepm: [],
      twopm: [],
      threepm: [],
      fourpm: [],
      fivepm: [],
    };
  }
}
colorTime();
