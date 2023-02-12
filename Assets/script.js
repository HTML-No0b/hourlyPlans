var today = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(today);




$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));


function timetracker(){
var liveHour = moment().hours();


$('.time-block').each(function(){
    var loopId = parseInt($(this).attr('id').split('hour')[1]);

if (loopId < liveHour) {
    $(this).addClass('past');
}
else if (loopId === liveHour){
    $(this).removeClass('past')
    $(this).removeClass('future')
    $(this).addClass('present')
}
else{
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).addClass('future')
}
})
}
timetracker();
