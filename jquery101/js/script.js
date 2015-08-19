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

	//----------------------------------

	// hide all Ps

	$('#accordion p').hide();

	// $('#accordion h2').data('shown',0);

	$('#accordion h2').on('click',function(){

		
		
		if($(this).data("shown") == '1'){
			$(this).next().slideUp(function(){
				$(this).prev().find('i').addClass('fa-chevron-circle-down').removeClass('fa-chevron-circle-up');
			});
			$(this).data("shown",'0');


		}else{
			$(this).next().slideDown(function(){
				$(this).prev().find('i').addClass('fa-chevron-circle-up').removeClass('fa-chevron-circle-down');
			});
			$(this).data("shown",'1');
		}

		//$('#accordion p').slideDown();

	});


});