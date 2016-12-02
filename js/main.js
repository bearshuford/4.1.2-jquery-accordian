(function($){
$(function(){
  $('#accordian h3').click(function(){
    $(this).parent().parent().find('ul').slideUp(); // hide everyone

    if(!$(this).next().is(":visible")){  // if not open
      $(this).next().slideDown();   // slide down
    }
  });
});
}(jQuery));
