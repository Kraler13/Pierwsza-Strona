$(document).ready(function() {
    $('.contactWithStaf').hover(
        function() {
            $(this).find('.accordionContent').stop(true, true).slideDown(500);
        }, 
        function() {
            $(this).find('.accordionContent').stop(true, true).slideUp(500);
        }
    );
});