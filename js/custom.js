let first = true,
  second = true;

function start(e) {
  event.preventDefault();

  // if(first){
  //     $(".little__fortune").addClass("winPosition");
  //     setTimeout(()=>{

  //     $("#popup2").fadeIn(500);

  //     },4000);
  //     first = false;
  //     return;
  // }

  // if(second){
  //     $(".popup__container").fadeOut(500);
  //     second = false;
  //     return;
  // }

  $(".big__fortune").addClass("winPosition");
  setTimeout(function () {
    $("#popup1").fadeIn(500);
  }, 4500);
}

$(function () {
  $(window).height() < ($(window).width() / 100) * 56.22 &&
    $("body").addClass("newH"),
    $(".closePopup").click(function (e) {
      e.preventDefault();
    });
});
