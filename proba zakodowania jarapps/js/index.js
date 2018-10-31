$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});


$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('ul').toggleClass('active')
	})
})

// $(document).ready(function(){
// 	$('.a').click(function(){
// 		$('div').toggleClass('active')
// 	})
// })


$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('div.active').removeClass('active');
						$('div').eq(i).addClass('active');
				}
		});
}).scroll();

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('li a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('nav ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }