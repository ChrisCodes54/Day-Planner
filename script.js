var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
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



//then lets set up the times on the left handside?

/*then we can focus on having the middle box be where they can write their activities
which means we will need to use local storage to achieve this */