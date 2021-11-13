var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('LLLL');
    $("#currentDay").text(currentdate);
}
setInterval(update, 1000);

// first lets set up the boxes, we did this through HTML, but will try and make it here.
var containerEl = $('<div>').addClass('container')
var sectionrows = $('<section>').addClass('row time-block');
var divhours = $('<div>').addClass('col-2 hour');
var textarea = $('<textarea>').addClass('col-9 description');
var savebutton = $('<button').addClass('col-1 saveBtn')
sectionrows.append(divhours, textarea, savebutton);
containerEl.append(sectionrows);

/*we wll need to add an event listener to the buttons.
As user, first thing we will do is type our day in the day planner
then we will want it to be saved, so the save button is our trigger*/

/*then that should fire off a function that will save that specific section
of text to the local storage so its always there.*/

//not sure how to implement time colors
