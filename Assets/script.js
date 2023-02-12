var today = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(today);




$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

function timetracker(){
var liveHour = today.hours();
$('.time-block').each(function(){
    var loopId = parseInt($(this).attr('id').split('hour')[1]);
})
if (loopId<currentHour) {
    $(this).addClass('past');
}
else if (loopID === currentHour){
    $(this).removeClass('past')
    $(this).removeClass('future')
    $(this).addClass('present')


}

}

$("#hour8 .description").val(localStorage).getItem("hour8");
$("#hour9 .description").val(localStorage).getItem("hour9");
$("#hour10 .description").val(localStorage).getItem("hour10");
$("#hour11 .description").val(localStorage).getItem("hour11");
