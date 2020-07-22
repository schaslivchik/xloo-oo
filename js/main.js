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
  sectionsColor: ['#1d2530', '#1d2530', '#fff', '#1d2530', '#1d2530'],
  paddingTop: '96px',
  paddingBottom: '0px',
  fixedElements: '#header, .footer',
  responsiveWidth: 768,
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
  autoplay: true,
  autoplayTimeout: 5000,
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

particlesJS("particles-js", { "particles": { "number": { "value": 30, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#93CB40" }, "shape": { "type": "edge", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.75, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.3, "width": 1 }, "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "grab" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

