$(document).ready(function() {

  // Append dynamic copyright year  
  var year = new Date().getFullYear();
  $('.copyright-date').append(year);

  // Update nav and footer styles according to page
  if (window.location.href.search('resume.html') > 0) {
    // Add border under Resume link and blue background
    $('.container__nav').css({'background-color': '#1939D6'});
    $('.container__nav a').css({'color': '#fff'});
    $('.container__nav .resume-link').css({'border-bottom': '2px solid #fff'});
  } else if (window.location.href.search('portfolio.html') > 0) {
    // Add border under Portfolio link
    $('.container__nav .portfolio-link').css({'border-bottom': '2px solid #1939D6'});
  } else {
    // Add border under Hello link
    $('.container__nav .home-link').css({'border-bottom': '2px solid #1939D6'});
    $('footer').css({'background-color': '#fff', 'color': '#1939D6'});
  } 

});

