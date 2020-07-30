var myFullpage = new fullpage('#fullpage', {
  licenseKey: '13AD7F77-A47C4568-AB432005-993C74FE',
  //Навигация
  menu: '#menu',
  lockAnchors: false,
  anchors: ['WeAreXloo', 'WhatWeDo', 'Development', 'HowWeDoIt', 'WhyChooseUs', 'OurWorks', 'TrustedBy', 'Footer'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: [],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'top',

  //Скроллинг
  css3: true,
  scrollingSpeed: 700,
  fitToSectionDelay: 700,
  autoScrolling: true,
  scrollHorizontally: true,
  fitToSection: true,
  continuousVertical: false,
  continuousHorizontal: false,

  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  interlockedSlides: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '',
  scrollOverflow: true,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,


  //Доступ
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: false,

  //Дизайн
  controlArrows: true,
  verticalCentered: true,
  sectionsColor: ['#1d2530', '#1d2530', '#fff', '#1d2530', '#1d2530', '#fff', '#F4F5F8'],
  paddingTop: '96px',
  paddingBottom: '0px',
  fixedElements: '#header, .footer',
  responsiveWidth: 991,
  responsiveHeight: 0,
  responsiveSlides: true,
  parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
  cards: true,
  cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

  //Настроить селекторы
  sectionSelector: '.section',
  slideSelector: '.slide',
  lazyLoading: true,

  //события
  onLeave: function (origin, destination, direction) {
    var numberBlock = destination.index;
    if (numberBlock == '2' || numberBlock == '5') {
      $('.xloo-nav').addClass('white-block')

    }
    else {
      $('.xloo-nav').removeClass('white-block')
    }

    if (numberBlock == '6') {
      $('.xloo-nav').addClass('grey-block')
    }
    else {
      $('.xloo-nav').removeClass('grey-block')
    }
  },
  afterLoad: function (origin, destination, direction) {

  },
  afterRender: function () { },
  afterResize: function (width, height) { },
  afterReBuild: function () { },
  afterResponsive: function (isResponsive) { },
  afterSlideLoad: function (section, origin, destination, direction) {

  },
  onSlideLeave: function (section, origin, destination, direction) {

  }

});


var owl = $('.owl-carousel');
owl.owlCarousel({

  loop: true,
  margin: 10,
  dots: false,
  autoplay: false,
  autoplayTimeout: 0,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 4,
    },
    991: {
      items: 5,
    },
    1366: {
      items: 5,
    },
    1536: {
      items: 4
    }
  }
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



