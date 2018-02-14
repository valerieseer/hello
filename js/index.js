$(document).ready(function() {

  var year = new Date().getFullYear();
  $('.copyright-date').append(year);

  if (window.location.href.search('index.html') > 0) {
    // Add border under Hello link
    $('.container__nav .home-link').css({'border-bottom': '2px solid #1939D6'});
  } else if (window.location.href.search('resume.html') > 0) {
    // Add border under Resume link and blue background
    $('.container__nav').css({'background-color': '#1939D6'});
    $('.container__nav a').css({'color': '#fff'});
    $('.container__nav .resume-link').css({'border-bottom': '2px solid #fff'});
  } else {
    // Add border under Portfolio link
    $('.container__nav .portfolio-link').css({'border-bottom': '2px solid #1939D6'});
  }

});

