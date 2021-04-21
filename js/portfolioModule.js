var phonecatApp = angular.module('portfolio_app', []);
	phonecatApp.controller('portfolio_controller', function portfolio_controller($scope,$http) {
	$scope.portfolio_datas = [
		{
			title:"Taskflowpro",
			description:"Managing the tasks in the best way",
			image_src:"images/taskflowpro.png",
			embeded_link:"https://www.youtube.com/watch?v=FixCIGecRpI"
		},
		{
			title:"School website",
			description:"Providing the events and news about school to students",
			image_src:"images/schoolwebsite.png",
			embeded_link:"https://www.youtube.com/watch?v=rQ-RrHmfo80"
		},
		{
			title:"Home Automation",
			description:"Access your electric sockets wherever you are",
			image_src:"images/homeautomationwebsite.png",
			embeded_link:"https://www.youtube.com/watch?v=XwBXBGYiwDw"
		},
		{
			title:"Customize Portfolio",
			description:"Dynamically adding data in portfolio website",
			image_src:"images/portfoliowebsite.png",
			embeded_link:"https://www.youtube.com/watch?v=3mPgv0VJ1c8"
		},
	];
	$scope.sticky_element = function(){
		$('html,body').animate({ scrollTop: 0 }, 1000);	
	}
	// magnificPopup, video playing
	$(document).ready(function() {
		$(document).scrollTop(0)
		$('.zoom-gallery').magnificPopup({
			delegate: 'a',
		    type: 'iframe',
      		mainClass: 'mfp-ready',
          	closeOnContentClick: false,
          	closeBtnInside: false,
		    iframe: {
		    	markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' +
					'</div>',
		        patterns: {
		             youtube: {
		                index: 'youtube.com/', 
		                id: 'v=',
		                src: 'https://www.youtube.com/embed/%id%?autoplay=1&start=1'
		            },
		        }
		    },
          gallery: {
            enabled: true
          },
		});
		$(document).on("click",".nav-link",function(){
			 var new_position = $('#'+$(this).attr("data")).offset();
			 $('html,body').animate({ scrollTop: new_position.top }, 1000);	
		});
		$(document).scroll(function(){
			if($(this).scrollTop() >= 800){
				$('.sticky_element').show();
			}
			else{
				$('.sticky_element').hide();
			}
		})
	});
});