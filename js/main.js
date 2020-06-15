
$(".tiltBox").tilt({
  maxTilt: 20,
  perspective: 1400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  speed: 800,
  glare: true,
  maxGlare: 0.3,
  scale: 1
});


$('.tiltBox').hover(
  function () { $(this).addClass('tiltZindex') },
  function () { $(this).removeClass('tiltZindex') }
)


