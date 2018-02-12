$(document).ready(function() {
  $('.slider').slider({ height: 700 });

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


  $("#Arriba").hide(); //ocultamos el boton para el primer ejemplo
        $('#Abajo').fadeIn();
        $('#Arriba1').fadeOut();

		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 50) {
					$('#Arriba1').fadeIn();
				} else {
					$('#Arriba1').fadeOut();
				}
			});
			$('#Arriba1').click(function () {
				$('body,html').animate({scrollTop: 0}, 1500);
				return false;
			});

			$('#Abajo').click(function () {
				$('body,html').animate({scrollTop: $(document).height()}, 1500); //obtenemos el alto del documento
				return false;
			});
		});
});

$('.parallax').parallax();
  var options = [
  {selector: '.animar', offset: 0, callback: function() {
    $('.animar').animate({right: 30});
  } },
  ];
  Materialize.scrollFire(options);
