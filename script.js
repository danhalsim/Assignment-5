// MY CODE

// jQuery call to ensure that the code isn't run until the browser has finished rendering all the elements
$(function () {

  // listener for click events on the save button
  // save input to localStorage
    $('.saveBtn').on('click', function () {
      $('textarea').each(function () {
        let input = $(this).val(); 
        let hour = $(this).parent().attr('id');
        localStorage.setItem(hour, input);
      });
    });

    // apply the past, present, or future class to each time block by comparing the id to the current hour
    const updateTimeClass = () => {
      let currentTime = dayjs().hour();
      $('.time-block').each(function () {
        let time = parseInt($(this).attr('id').split('-')[1]);
        if (time === currentTime) {
          $(this).addClass('present');
        }
        else if (time < currentTime) {
          $(this).addClass('past');
        }
        else {
          $(this).addClass('future');
        }
      });
    }
    updateTimeClass();
    
    // get any user input that was saved in localStorage and set the values of the corresponding textarea elements
    $('textarea').each(function () {
      let hour = $(this).parent().attr('id');
      $(this).val(localStorage.getItem(hour));
    });
    
    // display the current date in the header
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

    // something extra for fun: event listener for clear all button
    $('#clearButton').on('click', function () {
      $('textarea').each(function () {
        $(this).val('');
      });
    });

  });