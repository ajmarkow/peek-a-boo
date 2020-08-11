$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-showing").slideToggle();
    $(".initially-hidden").slideDown();
    $("#also-hidden").slideDown();
    $("#also-showing").slideToggle
  });
});