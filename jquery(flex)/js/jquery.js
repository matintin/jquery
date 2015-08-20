$(function(){
	
	var isOpen = false;

	$('#slide-button').on('click',function(){
		// console.log('hi');

		if(isOpen == false){

			$('header').toggleClass('hide');
			$(this).find('i').toggleClass('fa-arrow-circle-right fa-arrow-circle-left');
			// $('nav a').hide();
			isOpen = true;
		}else{

			$('header').toggleClass('hide');
			$(this).find('i').toggleClass('fa-arrow-circle-left fa-arrow-circle-right');
			// $('nav a').show();
			isOpen = false;
		}
		
	});

	var isLeft = $('header').css('order','0');
	// var Reverse = $('#slide-button').find('i').class('fa fa-arrow-circle-right');
	
	$('#order').on('click',function(){
		
		
		// if(isReverse == true){
		// 	$('#slide-button').find('i').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left');	
		
		// }

		if(isLeft == true){

			$('header').css('order','2');

			isLeft = false;

		}else{
			
			$('header').css('order','0');
			isLeft = true;
		}
		

	});

	$('#accordion p').hide();

	$('#accordion h2').on('click',function(){

		if($(this).data('show')==0){
			$(this).next().slideDown(function(){

				$(this).prev().find('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
			});

			$(this).data('show','1');
		}else{
			$(this).next().slideUp(function(){
				
				$(this).prev().find('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
	
			});

			$(this).data('show','0');
		}
		
	});


});


