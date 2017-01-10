$(document).ready(function(){
  $("#learn").click(function(){
    $("#content").show();
    $("#content p").text("There is a rooftop pool.");
    $(".jumbotron").text("What you didn't know");
    $("#content p").css('color', 'green');
    $("#content img").attr('src', 'img/roofpool.jpg');
  });
  $("#quickly").click(function(){
    $("#content").show();
    $("#content p").text("There are lots of food carts nearby");
    $("#content p").css('color', 'red');
    $("#content img").attr('src', 'img/foodcart.jpg');
  });
  $("#pair").click(function(){
    $("#content").show();
    $("#content p").text("Don't forget your tic-tacs");
    $("#content p").css('color', 'blue');
    $("#content img").attr('src', 'img/tictacs.png');
  });
  // $( "button:first" ).click(function() {
  //   $( "p:first" ).fadeToggle( "slow", "linear" );
  // });
  // $( "button:last" ).click(function() {
  //   $( "p:last" ).fadeToggle( "fast", function() {
  //     $( "#log" ).append( "<div>finished</div>" );
  //   });
  // });
  // $("#click").click(function(){
  //   $("#whaleFade").fadeIn("slow");
  // });
  // $("#clickOut").click(function(){
  //   $("#whaleFade").fadeOut("slow");
  // });
  // $(".clickable-fade-toggle").click(function(){
  //   $("#toggle-walrus").fadeToggle();
  //   $("#toggle-walrus-out").fadeToggle();
  // });
  // $(".clickable-slide").click(function(){
  //   $("#slide-walrus").slideToggle();
  //   $("#slide-walrus-out").slideToggle();
  // });
});
