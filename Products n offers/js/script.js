	$(document).ready(function(){


		$('.Electronic').click(function(){
	 		
			$('.Electronic_box').slideToggle(200);
			$('.Electronic').attr("class","glyphicon glyphicon-chevron-up price");

		});
			$('.price').click(function(){

			$('.price_box').slideToggle(200);

		});
			$('.color').click(function(){

			$('.color_box').slideToggle(200);

		});
			$('.size').click(function(){

			$('.size_box').slideToggle(200);

		});
	});