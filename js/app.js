$(document).ready(function() {
  var cool = false;
  var mouseenter = false;
  if (cool == false) {
  $('.ryu').mouseenter(function() {
      mouseenter = true;
      $('.ryu-still').hide();
		  $('.ryu-ready').show();
  		})
	.mouseleave(function() {
      mouseenter = false;
      $('.ryu-ready').hide();
    	$('.ryu-still').show();
  		})
	.mousedown(function() {
    	playHadouken();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
    	$('.ryu-cool').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').show();
    	$('.hadouken').finish().show()
  			.animate(
    			{'left': '1200px'},
    			500,
    			function() {
      				$(this).hide();
      				$(this).css('left', '425px');
    			}
  			);
  		})
    .mouseup(function() {
      $('.ryu-still').hide();
      $('.ryu-cool').hide();
    	$('.ryu-throwing').hide();
    	$('.ryu-ready').show();
  		});
  }
    $('html').keydown(function (e) {
        if (e.which == 88) {
            cool = true;
            $('.ryu-throwing').hide();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }
    })
    .keyup(function (e) {
        if (e.which == 88) {
            $('.ryu-throwing').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').hide();
            if (mouseenter == true) 
              $('.ryu-ready').show();
            else 
              $('.ryu-still').show();
            cool = false;
        };
    })
})
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}