"use strict";

$(window).load(function() {
    // $(".loader").delay(0).fadeOut();
    $("#mask").fadeOut("slow");
    $(window).delay(1001).scroll();     // Reload hack
});

$(document).ready(function(){

$(".header").sticky({ topSpacing: 0 });

/* Menu Anchors */
$('a[href*=#]').click(function() {
 if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
     var $target = $(this.hash);
     $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
     if ($target.length) {
         var targetOffset = $target.offset().top;
         $('html,body').animate({scrollTop: targetOffset-75}, 1000);
         return false;
        }
    }
});


});
