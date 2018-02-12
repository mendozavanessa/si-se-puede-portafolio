$(document).ready(function() {
  $('.parallax').parallax();
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
      $('.animar2').animate({right: 30});
    }},
  {selector: '.typed2',
    offset: 0,
    callback: function() {
      $('.typed2').animate({right: 30});
    }},
  ];
  Materialize.scrollFire(options);
  $('#typed').typed({
    strings: ['VANESSA MENDOZA INOÑAN'],
    typeSpeed: 30,
    backDelay: 500,
    loop: false,
    loopCount: false,
    callback: function() {
      foo();
    }
  });
  function foo() {
    console.log('Callback');
  }
  $('#typed2').typed({
    strings: ['Desarrolladora Front-End'],
    typeSpeed: 30,
    backDelay: 500,
    loop: false,
    loopCount: false,
    callback: function() {
      foo();
    }
  });
  function foo() {
    console.log('Callback');
  }
});
