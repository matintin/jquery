$(function(){

	console.log("hi");

	var isOpen = false;


	$('#slide-button').click(function(){
		

		if(isOpen == true){

			$('header').animate({left:'-17em'},1000,function(){

				$('#slide-button i').removeClass().addClass('fa fa-arrow-circle-o-right');

			});
			isOpen = false;

		}else{

			$('header').animate({left:'0'},1000,function(){

				$('#slide-button i').removeClass().addClass('fa fa-arrow-circle-o-left');
			});
			isOpen = true;

		}

		
	});


});