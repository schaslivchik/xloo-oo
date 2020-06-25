
// $(".tiltBox").tilt({
//   maxTilt: 20,
//   perspective: 1400,
//   easing: "cubic-bezier(.03,.98,.52,.99)",
//   speed: 800,
//   glare: true,
//   maxGlare: 0.3,
//   scale: 1
// });

var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});


$('.tiltBox').hover(
  function () { $(this).addClass('tiltZindex') },
  function () { $(this).removeClass('tiltZindex') }
)

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('.xloo-nav').addClass("xloo-sticky-nav");
  } else {
    $('.xloo-nav').removeClass("xloo-sticky-nav");
  }
});

$('.main-menu-trigger').click(function () {
  event.preventDefault();
  $('body').toggleClass('scroll-hidden')
  $(this).toggleClass('active-trigger');
  $('.nav-xloo').toggleClass('active-menu');
})

// $('.btn-send-message').click(function () {
//   event.preventDefault();
//   $('body').toggleClass('scroll-hidden')
//   $('.xloo-modal-form').toggleClass('active-form')
// })
// $('.xloo-modal-form-close').click(function () {
//   event.preventDefault();
//   $('body').removeClass('scroll-hidden');
//   $('.xloo-modal-form').removeClass('active-form')
// })

$('.btn-send-message').click(function () {
  event.preventDefault();
  $('body').addClass('scroll-hidden')
  $('.xloo-modal').addClass('modal-open');
});

$('.xloo-close-modal').click(function () {
  $('body').removeClass('scroll-hidden')
  $('.xloo-modal').removeClass('modal-open');
});