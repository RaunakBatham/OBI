$(document).ready(function(){

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
});