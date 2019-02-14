const year = new Date().getFullYear();

// Append dynamic copyright year  
document.getElementsByClassName("year")[0].textContent = year;

// Resume page
if (window.location.href.search("resume.html") > 0) {
  document.getElementsByClassName("resume-link")[0].classList.add("underlined");
  document.getElementsByTagName("nav")[0].classList.add("bg");
  document.getElementsByTagName("footer")[0].classList.add("bg");
} 
// Portfolio page
else if (window.location.href.search("portfolio.html") > 0) {
  document.getElementsByClassName("portfolio-link")[0].classList.add("underlined");
  document.getElementsByTagName("footer")[0].classList.add("bg");
} 
// Home page
else {
  document.getElementsByClassName("home-link")[0].classList.add("underlined");
} 

