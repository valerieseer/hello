$(document).ready(function() {

  if (window.location.href.search('resume.html') > 0) {
    // Add border under Resume link and other styles 
    $('.container__nav').css({'background-color': '#1939D6'});
    $('.container__nav a').css({'color': '#fff'});
    $('.container__nav .resume-link').css({'border-bottom': '2px solid #fff'});
  } else {
    // Add border under Hello link
    $('.container__nav .home-link').css({'border-bottom': '2px solid #1939D6'});
  }

});