	$(document).ready(function(){

$(window).scroll(function(){
        var c =$('.nav').offset().top;
        if (c>=150) {
        	// alert('s');

        	$('.nav #logo').animate({'line-height':'30px'},10);
        	$('.nav #logo #bag').animate({'margin-top':'-5px'},10);
        	$('.nav #logo h1').animate({'font-size':'30px'},10);
        	$('.nav #logo #l2').animate({'font-size':'30px'},10);
        	$('.nav').animate({'height':'100px','z-index':'300'},10);
        }
        else{
        	$('.nav #logo').animate({'line-height':'50px'},10);
        	$('.nav #logo #bag').animate({'margin-top':'-25px'},10);
        	$('.nav #logo h1').animate({'font-size':'50px'},10);
        	$('.nav #logo #l2').animate({'font-size':'40px'},10);
        	$('.nav').animate({'height':'300px','z-index':'1'},1);
        }
    });

$('#ham').click(function(){
         $('#ham').hide();
   		$('#menu-back').show();
   		$('.menu').show(150);
   		$('#close').show(50).click(function(){
            $('#ham').show();
   			$('.menu').hide(150);
   			$('#menu-back').hide();
   		});
   		$('#menu-back').click(function(){
   			$('.menu').hide(150);
             $('#ham').show();
   			$('#menu-back').hide();
   		});
   		// $('#ham').hide();
   	});
		// $('.Electronic').click(function(){
	 		
		// 	$('.Electronic_box').slideToggle(200);
		// 	$('.Electronic').attr("class","glyphicon glyphicon-chevron-up price");

		// });
		// 	$('.price').click(function(){

		// 	$('.price_box').slideToggle(200);

		// });
		// 	$('.color').click(function(){

		// 	$('.color_box').slideToggle(200);

		// });
		// 	$('.size').click(function(){

		// 	$('.size_box').slideToggle(200);

		// });
	});