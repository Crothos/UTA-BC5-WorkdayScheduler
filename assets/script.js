var timeDisplayEl = $('#currentDay');
var saveButton = $('.btn');
var currentHour = dayjs().format('H');
var textBox = $(".description");

// JUST IN CASE I CAN'T FIGURE IT OUT
// var textBox9 = $("#description9");
// var textBox10 = $("#description10");
// var textBox11 = $("#description11");
// var textBox12 = $("#description12");
// var textBox13 = $("#description13");
// var textBox14 = $("#description14");
// var textBox15 = $("#description15");
// var textBox16 = $("#description16");
// var textBox17 = $("#description17");

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(saveButton).on("click", saveElement);
    function saveElement(){
        var parentID = $(this).parent().attr('id');
        var userInput = textBox.val();
         // // // // I need something like this: 
        // // // var userInput = $(this).parent().child().val();
        localStorage.setItem(parentID, userInput);
    }

// Checks for hour value, assigns class to div ID based on value.

    if (currentHour == 9) {
        $("#hour-9").addClass("present");
    } else if (currentHour > 9) {
        $("#hour-9").addClass("past");
    } else {
        $("#hour-9").addClass("future");
    }

    if (currentHour == 10) {
        $("#hour-10").addClass("present");
    } else if (currentHour > 10) {
        $("#hour-10").addClass("past");
    } else {
        $("#hour-10").addClass("future");
    }

    if (currentHour == 11) {
        $("#hour-11").addClass("present");
    } else if (currentHour > 11) {
        $("#hour-11").addClass("past");
    } else {
        $("#hour-11").addClass("future");
    }

    if (currentHour == 12) {
        $("#hour-12").addClass("present");
    } else if (currentHour > 12) {
        $("#hour-12").addClass("past");
    } else {
        $("#hour-12").addClass("future");
    }

    if (currentHour == 13) {
        $("#hour-13").addClass("present");
    } else if (currentHour > 13) {
        $("#hour-13").addClass("past");
    } else {
        $("#hour-13").addClass("future");
    }

    if (currentHour == 14) {
        $("#hour-14").addClass("present");
    } else if (currentHour > 14) {
        $("#hour-14").addClass("past");
    } else {
        $("#hour-14").addClass("future");
    }

    if (currentHour == 15) {
        $("#hour-15").addClass("present");
    } else if (currentHour > 15) {
        $("#hour-15").addClass("past");
    } else {
        $("#hour-15").addClass("future");
    }

    if (currentHour == 16) {
        $("#hour-16").addClass("present");
    } else if (currentHour > 16) {
        $("#hour-16").addClass("past");
    } else {
        $("#hour-16").addClass("future");
    }

    if (currentHour == 17) {
        $("#hour-17").addClass("present");
    } else if (currentHour > 17) {
        $("#hour-17").addClass("past");
    } else {
        $("#hour-17").addClass("future");
    }


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    displayDescription();
    // displayDescription9();
    // displayDescription10();
    // displayDescription11();
    // displayDescription12();
    // displayDescription13();
    // displayDescription14();
    // displayDescription15();
    // displayDescription16();
    // displayDescription17();
    
    function displayDescription() {
        var userDesc = localStorage.getItem("hour-9");
        console.log(userDesc);
        textBox.append(userDesc);
    }
    // function displayDescription9() {
    //     var userDesc = localStorage.getItem("hour-9");
    //     console.log(userDesc);
    //     textBox9.append(userDesc);
    // }

    // function displayDescription10() {
    //     var userDesc = localStorage.getItem("hour-10");
    //     console.log(userDesc);
    //     textBox10.append(userDesc);
    // }

    // function displayDescription11() {
    //     var userDesc = localStorage.getItem("hour-11");
    //     console.log(userDesc);
    //     textBox11.append(userDesc);
    // }
    // function displayDescription12() {
    //     var userDesc = localStorage.getItem("hour-12");
    //     console.log(userDesc);
    //     textBox12.append(userDesc);
    // }
    // function displayDescription13() {
    //     var userDesc = localStorage.getItem("hour-13");
    //     console.log(userDesc);
    //     textBox13.append(userDesc);
    // }
    // function displayDescription14() {
    //     var userDesc = localStorage.getItem("hour-14");
    //     console.log(userDesc);
    //     textBox14.append(userDesc);
    // }
    // function displayDescription15() {
    //     var userDesc = localStorage.getItem("hour-15");
    //     console.log(userDesc);
    //     textBox15.append(userDesc);
    // }
    // function displayDescription16() {
    //     var userDesc = localStorage.getItem("hour-16");
    //     console.log(userDesc);
    //     textBox16.append(userDesc);
    // }
    // function displayDescription17() {
    //     var userDesc = localStorage.getItem("hour-17");
    //     console.log(userDesc);
    //     textBox17.append(userDesc);
    // }
  });
  
  displayTime();
  setInterval(displayTime, 1000);