function updateTime(){
$("#currentDay").text(moment().format('LLLL'));
}
updateTime();
setInterval(function(){
   updateTime();
},60000);


$(".saveBtn").on("click", function(){

    let userInput = $(this).siblings(".description").val();

    let timeBlock = $(this).parent().attr("id");

    console.log(timeBlock, userInput)
    
    localStorage.setItem(timeBlock, userInput);

})

// $(".deleteBtn").on('click', function(){
//     let userInput = $(this).siblings(".description").val();

//     let timeBlock = $(this).parent().attr("id");

//     console.log(timeBlock, userInput)
    
//     localStorage.removeItem(timeBlock, userInput);


// })

function keepinTime(){

    var currentHour = moment().hours();

    $(".time-block").each(function(){

        let timeBlockValue = parseInt($(this).attr("value"));
        //let timeBlockValue = parseInt($(this).attr("id").split("-")[1])
        console.log(timeBlockValue)
        console.log("current hour", currentHour)

        if(timeBlockValue < currentHour){
            $(this).addClass("past");
        } else if (timeBlockValue === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    })

}

keepinTime()

//$("#hour-9 .description").val(localStorage.getItem("hour-9"));

for(var i = 9; i < 18; i++){
    $(`#hour-${[i]} .description`).val(localStorage.getItem(`hour-${[i]}`));
    console.log([i])
}
// first lets set up the boxes, we did this through HTML, but will try and make it here.

// let section = $("<section id='hour-18' class='row time-block'>");
// let div = $("<div class='col-2 hour'>").text("6pm");
// let textarea = $("<textarea class='col-8 description'>");
// let saveBtn = $("<button class='saveBtn col-1'>").text("Save");
// let deleteBtn = $("<button class='deleteBtn btn-danger col-1'>").text("Delete");

// section.append(div, textarea, saveBtn, deleteBtn);
// $(".container").append(section)


/*we wll need to add an event listener to the buttons.
As user, first thing we will do is type our day in the day planner
then we will want it to be saved, so the save button is our trigger, each time would have
to have a unique ID i think*/

/*then that should fire off a function that will save that specific section
of text to the local storage so its always there.*/



//not sure how to implement time colors
