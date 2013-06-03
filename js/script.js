/* Author: 
Luke Snopkiewicz
*/
 $(document).ready(function() 
   {
     if(!Modernizr.canvas)
      {
        $('#main').prepend('<div class="red_warning"><p>Your browser does <strong>NOT</strong> support html canvas. Animify will not work unless you update your browser.</p></div>');
      }

     $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 

     if($.browser.chrome)
       {
         $('#miskatony_promo').css({'background':'none', 'height':'250px'});
         $('#miskatony_promo').html('<a id="sr_link" href="//sr.devbomb.co.uk/" class="ir" title="You can help me out with development, by playing the test version and leaving gameplay-related feedback.">Check out my new game - Space Toads.</a>');
       }
   }); 