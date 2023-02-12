var today = moment().format('dddd, MMM Do YYYY')
$("#currentDay").text(today.format('MMM, DO YYYY'))


$('.saveBtn').on("click",function(event){

    var time = $(this).siblings(".time-block").val()
})