$(document).ready(function(){
	$('button').click(function(){
		$.ajax({
			url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
			crossDomain: true,
			success: function(){
				console.log('loaded');
			}
		});
	});
});