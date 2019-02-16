$(document).ready(function(){
  $(".menu:nth-child(2)").click(function(){
    $("li:nth-child(2)").removeClass("move-left move-right");
    if($("li:nth-child(1)").hasClass("is-selected")){
      $("li:nth-child(2)").addClass("is-selected").prev().removeClass("is-selected").addClass("move-left");
    }else{
      $("li:nth-child(2)").addClass("is-selected").next().removeClass("is-selected").addClass("move-right");
    }
    });
  
  /*$(".menu:nth-child(3)").click(function(){
    $("li:nth-child(3)").removeClass("move-left move-right");
    $("li:nth-child(3)").addClass("is-selected").siblings().removeClass("is-selected").addClass("move-left");
    });*/
  
  $(".menu:nth-child(1)").click(function(){
    $("li:nth-child(1)").removeClass("move-left");
    $("li:nth-child(1)").addClass("is-selected").siblings().removeClass("is-selected").addClass("move-right");
  });

  var myDataRef = new Firebase('https://brilliant-inferno-161.firebaseio.com/Attendance');
  $('#transport').keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var rsvp = $('#messageInput').val();
      var ride = $('#transport').val();
      myDataRef.push({ name: name, rsvp: rsvp, ride: ride });
      $('#messageInput').val('');
      $('#nameInput').val('');
      $('#transport').val('');
      $('.attendance').addClass('attAnim');
    }
  });
  $("#switch").click(
    function () {
      $(".english").toggleClass("language");
      $(".french").toggleClass("language");
    }
  )

})

  