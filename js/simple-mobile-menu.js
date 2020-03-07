;(function( window, document, $, undefined ) {
  "use strict";
  // Menu Toggle
  (function() {
    $(function() {

      var $toggle = $(".js-smm-toggle");
      var $container = $(".js-smm-container");

      if( ! $toggle.length || ! $container.length ) return;

      $toggle.click(function() {
        $toggle.toggleClass("smm__toggle--open");
        $container.toggleClass("smm__container--open");
      });
    });
  })();

})( window, document, jQuery );
 //Mio no sirve Rvisarrrrrrrrr
 $(document).ready(function(){
  $("#linkproyecto").click(function(){
    $(".js-smm-toggle").removeClass("smm__toggle--open");
    $(".js-smm-container").removeClass("smm__container--open");
  });
});
 // Hasta aquí
  //Mio no sirve Rvisarrrrrrrrr
  $(document).ready(function(){
    $("#linkprincipal").click(function(){
      $(".js-smm-toggle").removeClass("smm__toggle--open");
      $(".js-smm-container").removeClass("smm__container--open");
    });
  });
   // Hasta aquí
    //Mio no sirve Rvisarrrrrrrrr
 $(document).ready(function(){
  $("#linkcontacto").click(function(){
    $(".js-smm-toggle").removeClass("smm__toggle--open");
    $(".js-smm-container").removeClass("smm__container--open");
  });
});
 // Hasta aquí