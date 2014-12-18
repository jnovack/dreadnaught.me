"use strict";

$(document).ready(function(){
	
	function loadsuperslides(){
      $('#slides-1').superslides({
        hashchange: false,
        animation: 'fade',
		play: 0,
		pagination: false
      });
	}
	
	loadsuperslides();
});
