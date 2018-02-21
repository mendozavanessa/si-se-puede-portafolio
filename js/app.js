$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  var options = [{
    selector: '.animar1',
    offset: 0,
    callback: function() {
      $('.animar1').animate({
        left: '20px',
        height: '200px',
        width: '200px'
      });
    }},
  {selector: '.animar2',
    offset: 0,
    callback: function() {
      $('.animar2').animate({right: 40});
    }},
  ];
  Materialize.scrollFire(options);
});
