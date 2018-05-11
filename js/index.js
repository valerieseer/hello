$(document).ready(function() {
  var primaryColor = '#1939D6';

  // Append dynamic copyright year  
  var year = new Date().getFullYear();
  $('.copyright-date').append(year);

  // Resume page
  if (window.location.href.search('resume.html') > 0) {
    $('nav .resume-link').css({'border-bottom': '2px solid #fff'});
    $('nav').css({'background-color': primaryColor});
    $('nav a').css({'color': '#fff'});
  } 
  // Portfolio page
  else if (window.location.href.search('portfolio.html') > 0) {
    $('nav .portfolio-link').css({'border-bottom': '2px solid ' + primaryColor});
  } 
  // Home page
  else {
    $('nav .home-link').css({'border-bottom': '2px solid ' + primaryColor});
    $('footer').css({'background-color': '#fff', 'color': primaryColor});
    $('footer p').css({'color': primaryColor});
  } 
});

