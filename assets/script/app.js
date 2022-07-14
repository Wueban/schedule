// give me the current day month and year

var date = moment().format("LL");

// give me the current hour

var currentHour = moment().format("LT")

  

// display current date to the user

var interval = setInterval(function(){

var present = moment();

//grab the id curfrent date and use moment that js to display the clock

$("#currentDay").html(date + " " + present.format("hh:mm:ss A"))

//100 because it would load at the time with the page, 1000 will show up a second later

}, 100);

  

var colorChange = function (){

$(".form-control").each(function(){

// this keyword reffers to the global object which in this case is the textarea

var hour = parseInt($(this).attr("id"));

currentHour = parseInt(currentHour)

// console.log(hour)

  

// if statements to change the color of the hours

if(currentHour < hour){

$(this).addClass("past")

}else if (currentHour === hour){

$(this).addClass("present")

}else {

$(this).addClass("future")

}

})

}

colorChange();

  

//save variables on each input that

  

var storeInput = function(){

$("#9AM").click(function(){

alert("hioii")

})

}

// var storageInput = $("<textarea>").click();

// var storageBtn = $("<button>"

var createCalendar = function(){
    var taskUl = $("<div>").addClass("row")

}