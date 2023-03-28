$(function(){

  $('.slider_main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
  ]
});

  $(window).scroll(function(){
    var scrolling=$(this).scrollTop()

    if (scrolling >20) {
      $("nav").addClass("menu_bg");
  }else{$("nav").removeClass("menu_bg")};


if (scrolling >20) {
    $(".back_to").fadeIn();
}else{$(".back_to").fadeOut()};

})
$(".back_to").click(function(){
  $("html,body").animate({
    scrollTop:0,
  })
})





});
