
$(document).ready(function() {
$('.open').on('click', function (e) {
  $(this).addClass('oppenned');
  $('.close_menu').addClass('closed');
  // e.stopPropagation();
})

$('.close_menu').on('click', function (e) {
  $('.open').removeClass('oppenned');
  $('.close_menu').removeClass('closed');
  // e.stopPropagation();
})

});