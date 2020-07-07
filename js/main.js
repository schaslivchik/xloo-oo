// $(document).ready(function () {
//   $('#pagepiling').pagepiling({
//     menu: null,
//     direction: 'vertical',
//     verticalCentered: true,
//     sectionsColor: ['rgba(44, 53, 68, 1)', '#000000', '#ffffff', '#000000', '#000', '#ffffff'],
//     anchors: [],
//     scrollingSpeed: 300,
//     easing: 'swing',
//     loopBottom: false,
//     loopTop: false,
//     css3: true,
//     navigation: {
//       'textColor': '#000',
//       'bulletsColor': '#505c6f',
//       'position': 'right',
//       'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7']
//     },
//     normalScrollElements: null,
//     normalScrollElementTouchThreshold: 5,
//     touchSensitivity: 5,
//     keyboardScrolling: true,
//     sectionSelector: '.section',
//     animateAnchor: false,

//     //events
//     onLeave: function (index, nextIndex, direction) { },
//     afterLoad: function (anchorLink, index) { },
//     afterRender: function () { },
//   });
// });
$(function () {

  // Default
  jQuery.scrollSpeed(100, 800);

  // Custom Easing
  jQuery.scrollSpeed(100, 800, 'easeOutCubic');

});
var myFullpage = new fullpage('#fullpage', {
  licenseKey: '13AD7F77-A47C4568-AB432005-993C74FE',
  //Навигация
  menu: '#menu',
  lockAnchors: false,
  anchors: ['WeAreXloo', 'WhatWeDo', 'Development', 'HowWeDoIt', 'WhyChooseUs', 'OurWorks', 'TrustedBy', 'Footer'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['firstSlide', 'secondSlide'],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Скроллинг
  css3: true,
  scrollingSpeed: 1000,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  interlockedSlides: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '',
  scrollOverflow: true,
  scrollOverflowReset: null,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Доступ
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Дизайн
  controlArrows: true,
  verticalCentered: true,
  sectionsColor: ['#ccc', '#fff'],
  paddingTop: '0px',
  paddingBottom: '0px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
  cards: false,
  cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

  //Настроить селекторы
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //события
  onLeave: function (origin, destination, direction) { },
  afterLoad: function (origin, destination, direction) { },
  afterRender: function () { },
  afterResize: function (width, height) { },
  afterReBuild: function () { },
  afterResponsive: function (isResponsive) { },
  afterSlideLoad: function (section, origin, destination, direction) { },
  onSlideLeave: function (section, origin, destination, direction) { }
});

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

/*$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('.xloo-nav').addClass("xloo-sticky-nav");
  } else {
    $('.xloo-nav').removeClass("xloo-sticky-nav");
  }
});*/

$('.main-menu-trigger').click(function () {
  event.preventDefault();
  $('body').toggleClass('scroll-hidden')
  $(this).toggleClass('active-trigger');
  $('.nav-xloo').toggleClass('active-menu');
})

$('.btn-send-message').click(function () {
  event.preventDefault();
  $('body').addClass('scroll-hidden')
  $('.xloo-modal').addClass('modal-open');
});

$('.xloo-close-modal').click(function () {
  event.preventDefault();
  $('body').removeClass('scroll-hidden')
  $('.xloo-modal').removeClass('modal-open');
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    $('body').removeClass('scroll-hidden')
    $('.xloo-modal').removeClass('modal-open');
  }
});

var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:10px';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}

$(document).ready(function () {

  $(".file-upload input[type=file]").change(function () {
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename").val(filename);
  });
})
