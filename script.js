var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentdate);
}
setInterval(update, 1000);
