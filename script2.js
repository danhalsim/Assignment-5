$(function () {

  $('.saveBtn').on('click', function () {
    $('textarea').each(function () {
      let text = $(this).val(); 
      let hour = $(this).parent().attr('id'); 
      localStorage.setItem(hour, text);
    })
  });

  $('textarea').each(function () {
    let hour = $(this).parent().attr('id');
    $(this).val(localStorage.getItem(hour))
  })

  function checkTime() {
    let currentTime = dayjs().hour(); // Grab current time
    $('.time-block').each(function () {
      let timeSlot = parseInt($(this).attr('id').split('-')[1]); // Converts string id into number
      if (timeSlot < currentTime) {
        $(this).addClass('past');
      }
      else if (timeSlot == currentTime) {
        $(this).addClass('present');
      }
      else {
        $(this).addClass('future');
      }
    })
  }
  checkTime()


  let currentDate = dayjs().format('dddd, MMMM D'); //Format the current date
  $('#currentDay').text(currentDate); //Display current date on screen

});