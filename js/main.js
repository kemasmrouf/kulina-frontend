$(document).ready(function(){
   $(document).on('click', 'a.down', function(event){
       $('html, body').animate({
           scrollTop: $( $.attr(this, 'href') ).offset().top
       }, 1000);
   });
});
