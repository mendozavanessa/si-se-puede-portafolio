$(document).ready(function() {
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
  $('.carousel').carousel();
  /* ********************************************* */
  $('.fixed-action-btn').openFAB();
  $('.fixed-action-btn').closeFAB();
});


$('.card').mouseenter(function(e) {
  if ($(this).find('> .card-reveal').length) {
    if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
      // Make Reveal animate up
      $(this).find('.card-reveal').css({
        display: 'block'
      }).velocity('stop', false).velocity({
        translateY: '-100%'
      }, {
        duration: 300,
        queue: false,
        easing: 'easeInOutQuad'
      });
    }
  }

  $('.card-reveal').closest('.card').css('overflow', 'hidden');
});

$('.card').mouseleave(function() {
  // Make Reveal animate down and display none
  $(this).find('.card-reveal').velocity({
    translateY: 0
  }, {
    duration: 225,
    queue: false,
    easing: 'easeInOutQuad',
    complete: function() {
      $(this).css({
        display: 'none'
      });
    }
  });
});
