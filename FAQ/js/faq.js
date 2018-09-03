$(document).ready(function(){


	$('.topic-option1').click(function(){

		$('.pro').show(100);
		$('.topic-option1').css({'border-bottom':'2px solid #29d9c2'});
		$('.topic-option2').css({'border-bottom':'0px '});
		$('.topic-option3').css({'border-bottom':'0px '});
		$('.topic-option1 .topic-icon').css({'background':'#29d9c2','color':'white'});
		$('.topic-option2 .topic-icon').css({'background':'#e2e0e0','color':'grey'});
		$('.topic-option3 .topic-icon').css({'background':'#e2e0e0','color':'grey'});
		$('.soft').hide(100);
		$('.infra').hide(100);
	});
	$('.topic-option2').click(function(){
		$('.topic-option2').css({'border-bottom':'2px solid #29d9c2'});
		$('.topic-option1').css({'border-bottom':'0px '});
		$('.topic-option3').css({'border-bottom':'0px '});
		$('.topic-option2 .topic-icon').css({'background':'#29d9c2','color':'white'});
		$('.topic-option3 .topic-icon').css({'background':'#e2e0e0','color':'grey'});
		$('.topic-option1 .topic-icon').css({'background':'#e2e0e0','color':'grey'});
		$('.pro').hide(100);
		$('.soft').show(100);
		$('.infra').hide(100);
	});
	$('.topic-option3').click(function(){
		$('.topic-option3').css({'border-bottom':'2px solid #29d9c2'});
		$('.topic-option1').css({'border-bottom':'0px '});
		$('.topic-option2').css({'border-bottom':'0px '});
		$('.topic-option3 .topic-icon').css({'background':'#29d9c2','color':'white'});
		$('.topic-option2 .topic-icon').css({'background':'#e2e0e0','color':'grey'});
		$('.topic-option1 .topic-icon').css({'background':'#e2e0e0','color':'grey'});
		$('.pro').hide(100);
		$('.soft').hide(100);
		$('.infra').show(100);
	});
  


    $('#questions-box .box1').click(function(){

    	$('.box1-content').show(200);
    	$('.box2-content').hide(200);
    	$('.box3-content').hide(200);
    	$('.box4-content').hide(200);
    	$('.box5-content').hide(200);
    	$('.box6-content').hide(200);
    	$('.box7-content').hide(200);

    });

    $('#questions-box .box2').click(function(){

    	$('.box1-content').hide(200);
    	$('.box2-content').show(200);
    	$('.box3-content').hide(200);
    	$('.box4-content').hide(200);
    	$('.box5-content').hide(200);
    	$('.box6-content').hide(200);
    	$('.box7-content').hide(200);

    });
    $('#questions-box .box3').click(function(){

    	$('.box1-content').hide(200);
    	$('.box2-content').hide(200);
    	$('.box3-content').show(200);
    	$('.box4-content').hide(200);
    	$('.box5-content').hide(200);
    	$('.box6-content').hide(200);
    	$('.box7-content').hide(200);

    });
    $('#questions-box .box4').click(function(){

    	$('.box1-content').hide(200);
    	$('.box2-content').hide(200);
    	$('.box3-content').hide(200);
    	$('.box4-content').show(200);
    	$('.box5-content').hide(200);
    	$('.box6-content').hide(200);
    	$('.box7-content').hide(200);

    });
    $('#questions-box .box5').click(function(){

    	$('.box1-content').hide(200);
    	$('.box2-content').hide(200);
    	$('.box3-content').hide(200);
    	$('.box4-content').hide(200);
    	$('.box5-content').show(200);
    	$('.box6-content').hide(200);
    	$('.box7-content').hide(200);

    });
    $('#questions-box .box6').click(function(){

    	$('.box1-content').hide(200);
    	$('.box2-content').hide(200);
    	$('.box3-content').hide(200);
    	$('.box4-content').hide(200);
    	$('.box5-content').hide(200);
    	$('.box6-content').show(200);
    	$('.box7-content').hide(200);

    });
    $('#questions-box .box7').click(function(){

    	$('.box1-content').hide(200);
    	$('.box2-content').hide(200);
    	$('.box3-content').hide(200);
    	$('.box4-content').hide(200);
    	$('.box5-content').hide(200);
    	$('.box6-content').hide(200);
    	$('.box7-content').show(200);

    });

});