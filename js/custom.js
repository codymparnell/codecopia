/*global $:false */

$(function () {


var wrapper_ = $('.wrapper');
var icon = $('.loading_icon');

$(wrapper_).css("visibility","hidden");
$(icon).css("display","block");
	$(window).load(function() { 


		$(icon).css("display","none");
		$(wrapper_).css("visibility","");

		//RUN REVOLUTION SLIDER

		var tpj=jQuery;

			tpj(document).ready(function() {

			if (tpj.fn.cssOriginal!=undefined)
				tpj.fn.css = tpj.fn.cssOriginal;

				tpj('.fullwidthbanner').revolution(
					{
						delay:9000,
						startwidth:960,
						startheight:500,

						onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

						thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
						thumbHeight:50,
						thumbAmount:3,

						hideThumbs:0,
						navigationType:"bullet",					//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
						navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
						navigationStyle:"round",				//round,square,navbar

						touchenabled:"on",						// Enable Swipe Function : on/off

						navOffsetHorizontal:0,
						navOffsetVertical:20,

						stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
						stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

						hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
						hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
						hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
						

						fullWidth:"on",

						shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

					});
		});	

		
	});

  });

//AJAX PORTFOLIO

	$(window).load(function(){
	(function(){
		var container = $( "#portfoliod" );
		var $items = $('#container-portfolio > div.portfolio-item');
		index = $items.length;
			$('#container-portfolio .portfolio-item').click(function(){
			if ($(this).hasClass('active')){
			} else {	
			lastIndex = index;
			index = $(this).index();
			$items.removeClass('active beprev benext');
			$(this).addClass('active');

			var myUrl = $(this).find('.ajax-trigger').attr("href") + " .item-data"; 

			/*$('html, body').animate({scrollTop:20}, 800)*/ //Use this to scroll to the 20px top of the page
			$('html, body').animate({ scrollTop: $(".portfolio-top").offset().top
			}, 400); //Custom scroll to .portfolio-top div 
			$('.loading_icon').css({ "display": "block", "opacity": "0" }).animate({ "opacity": "0.8" }, 300);
			$('#portfolioData').animate({opacity:0}, 400,function(){	
				$("#portfolioData").load(myUrl,function(){	 //FIX THE HEIGHT BUG ON FLEXSLIDER
						var $helper = $('.helper');
						var height = $helper.height();
						$('#portfolioData').css("min-height", height);
						$('.flexslider').flexslider({
							smoothHeight: true,controlNav:false
						});
						$('.flexslider').css({'height' : ''});
				});
				$('#portfolioData').animate({opacity:1}, 400);
			});
			
			//SLIDE UP
				
			$('#portfoliod').slideUp(400, function(){
				$('.loading_icon').delay(800).animate({ "opacity": "0" }, 100,function(){
					$('.loading_icon').css("display","none");
				});
				$('#portfolioData').css('visibility', 'visible');}).delay(800).slideDown(400,function(){
					$('#portfolioData').animate({opacity:1}, 400);
			});

			//SLIDE UP AND DOWN
				
				if ($items.last().hasClass('beprev')){
				$('#ajax_next').click(function() {
                   $('.portfolio-item.active').addClass('beprevfix');
                });
				
			} else { 
				//Nothing
			}
			
			}

			return false;				
			
			});

		//AJAX CLOSE 
		$('#ajax_close').click(function() {
			$('#portfoliod').slideUp(400);
			$items.removeClass('benext beprev active') ;
			return false;
        });

	})();
	
});


$(document).ready(function(){
		"use strict";
		var win_height = $(window).height();
		var $header = $('#header');
		$header.css("height", win_height);

}); 

$(window).resize(function(){
	"use strict";
	var win_height = $(window).height();
	var $header = $('#header');
	$header.css("height", win_height);
});



 $(document).ready(function(){
 "use strict";
	
	$('.global .main_menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 85,
    filter: '',
    easing: 'swing',
});

$('.button_container').onePageNav({
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 85,
    filter: '',
    easing: 'swing',
});

$('#logo').onePageNav({
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 85,
    filter: '',
    easing: 'swing',
});

$('#home_icon').onePageNav({
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 85,
    filter: '',
    easing: 'swing',
});

$('.responsive_nav').onePageNav({
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 85,
    filter: '',
    easing: 'swing',
});
	
});



$(document).ready(function() {
	"use strict";
	// cache container
	var $container = $('#container-portfolio');
	// initialize isotope
	$container.isotope({
  masonry: {
    columnWidth: 2
  }
});

	

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});
        
      
});

$(document).ready(function() {
	"use strict";
    $('#filters li>a').click(function() {
	$('#filters li').removeClass('active');
    $(this).parent().addClass('active');
    });
});



/* Twitter*/

   jQuery(function($){
        $(".tweet").tweet({
          join_text: "auto",
          username: "wdtuts",
          count: 3,
          auto_join_text_default: null,      // [string]   auto text for non verb: "I said" bullocks
          auto_join_text_ed: null,                 // [string]   auto text for past tense: "I" surfed
          auto_join_text_ing: null,             // [string]   auto tense for present tense: "I was" surfing
          auto_join_text_reply: null,    // [string]   auto tense for replies: "I replied to" @someone "with"
          auto_join_text_url: null
        });
      }); 

   /* FLICKR*/

$(document).ready(function(){

	$('#flickrphotos_blog').jflickrfeed({
		limit: 8,
		qstrings: {
			id: '52617155@N08'
		},
		itemTemplate: '<li><a href="{{image_b}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});

	$('#flickrphotos_home').jflickrfeed({
		limit: 10,
		qstrings: {
			id: '52617155@N08'
		},
		itemTemplate: '<div class="flickr_item_home"><li><a href="{{image_b}}" class="prettyPhoto" target="_blank"><img src="{{image}}" alt="Image"/></a></li></div>',
	});

	
}); 
   



//CAROUSEL SLIDER

$(document).ready(function() {
$('.slidewrap').carousel({
	slider: '.slider',
	slide: '.slide',
	slideHed: '.slidehed',
	nextSlide : '.next',
	prevSlide : '.prev',
	addPagination: false,
	addNav : true,
	speed: 500 // ms.
});

$('.slidewrap2').carousel({
	slider: '.slider',
	slide: '.slide',
	slideHed: '.slidehed',
	nextSlide : '.next',
	prevSlide : '.prev',
	addPagination: true,
	addNav : false,
	speed: 500 // ms.
});

$('.slidewrap3').carousel({
	slider: '.slider',
	slide: '.slide',
	slideHed: '.slidehed',
	nextSlide : '.next',
	prevSlide : '.prev',
	addPagination: false,
	addNav : true,
	speed: 500 // ms.
});
$('.slidewrap4').carousel({
	slider: '.slider',
	slide: '.slide',
	slideHed: '.slidehed',
	nextSlide : '.next',
	prevSlide : '.prev',
	addPagination: false,
	addNav : true,
	speed: 500 // ms.
});
});



$(window).load(function(){

		var $flickr_items = $('#flickrphotos_home .flickr_item_home');

		var $last_flick_items = $flickr_items.slice(5);

		var $controlls = $('.slidewrap.flickr .slidecontrols');

	


		setTimeout(function(){
			$('#flickrphotos_home_second').html($last_flick_items);
			$('.controlls_flickr').html($controlls);	
		}, 400);


}); 




/* SERVICES */

$(document).ready(function() {

var alltabs = $('.services_tab');

$(".tab_content").hide(); //Esconde todo el contenido
$(".tab_content:first").show(); //Muestra el contenido de la primera tab
	$(".tabs_triggers a").click(function() {

		$(alltabs).removeClass("active");
		$(this).find('.services_tab').addClass("active");
		$(".tab_content").hide(); //Esconde todo el contenido de la tab

		var activeTab = $(this).attr("href"); //Encuentra el valor del atributo href para identificar la tab activa + el contenido

		$(activeTab).fadeIn(600); //Agrega efecto de transición (fade) en el contenido activo

		return false;

	});

});



// RESPONSIVE MENU 

$(document).ready(function(){
var menu_trigger = $('.menu_trigger');
var areamenu = $('.mobileAreaMenu');
var all_li =$('.mobileAreaMenu li');

$(menu_trigger).click(function() {


if ($(menu_trigger).hasClass('active')){

			$(areamenu).slideUp(200,function(){
				$(areamenu).css("display","");
				$(menu_trigger).removeClass("active");
			});
					
			} else {
				$(areamenu).slideDown(200,function(){
					//
				});

				$(menu_trigger).addClass("active");
			}
});

$('.mobileAreaMenu a').click(function(){
	
	$(areamenu).slideUp(200);
	$(menu_trigger).removeClass("active");
});
});

$(window).load(function(){
	"use strict";
    $("a[class^='prettyPhoto']").prettyPhoto();
  });



// Switcher CSS 
	$(document).ready(function() {

    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-200px"
            }, 500, function () {
                $(this).hide()
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show()
        } else {
            $("#switch").animate({
                "margin-left": "-200px"
            }, 500, function () {
                $(this).hide()
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500)
        }
    })
											
});