$(document).ready(function () {
  // Utility function
  function animateTo(div, dfix, mfix) {
    const $htmlBody = $("html, body");
    if ($(window).width() > 768) {
      $htmlBody.animate({ 
        scrollTop: $(div).offset().top - dfix
      }, 700);
    } else {
      $htmlBody.animate({ 
        scrollTop: $(div).offset().top - mfix
      }, 700);
    } 
  }

  // Header links click event
  (function() {
    const $headerLink = $("header .link a");
    $headerLink.each(function(i, el) {
      $(el).on("click", function() {
        var dest = $(this).attr("href");
        animateTo(dest, 120, 100);
      })
    });	
  })();

  // Init lazyload
  lazyload();
});
