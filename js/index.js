// Append dynamic copyright year  
(function() {
  document.getElementsByClassName("year")[0].textContent = new Date().getFullYear();
})();

// Underline link for current page
(function() {
  // about page
  if (window.location.href.search("about.html") > 0) {
    document.getElementsByClassName("about-link")[0].classList.add("underlined");
    document.getElementsByTagName("footer")[0].classList.add("bg");
  } 
  // portfolio page
  else if (window.location.href.search("portfolio.html") > 0) {
    document.getElementsByClassName("portfolio-link")[0].classList.add("underlined");
    document.getElementsByTagName("footer")[0].classList.add("bg");
  } 
  // home page
  else {
    document.getElementsByClassName("home-link")[0].classList.add("underlined");
  } 
})();

