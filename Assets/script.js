var today = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(today.format("LLLL"));




$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

$("#hour8 .timeblock").val(localStorage).getItem("hour8");
$("#hour9 .timeblock").val(localStorage).getItem("hour9");
$("#hour10 .timeblock").val(localStorage).getItem("hour10");
$("#hour11 .timeblock").val(localStorage).getItem("hour11");

function timetracker(){
var liveHours = today.hours();
$('.time-block').each(function(){
    var loopId = parseInt($(this).attr('id').split('hour')[1]);
})

}