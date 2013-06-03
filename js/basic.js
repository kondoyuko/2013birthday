/* Author: 
Luke Snopkiewicz -> twitter.com/@touch_the_sky1
*/
 $(document).ready(function() 
   {
     if(Modernizr.canvas)
      {
        $('#div_below').Animify({
        'y-direction':'up';
        'background-color': '#ff69b4';
        });
	  }
   });
   