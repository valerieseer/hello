const year = new Date().getFullYear();

// Append dynamic copyright year  
document.getElementsByClassName('copyright-date')[0].textContent = year;

// Resume page
if (window.location.href.search('resume.html') > 0) {
  document.getElementsByClassName('resume-link')[0].classList.add('underlined--white');
  document.getElementsByTagName('nav')[0].classList.add('bg--blue');
  document.getElementsByTagName('footer')[0].classList.add('bg--blue');
} 
// Portfolio page
else if (window.location.href.search('portfolio.html') > 0) {
  document.getElementsByClassName('portfolio-link')[0].classList.add('underlined--blue');
  document.getElementsByTagName('footer')[0].classList.add('bg--blue');
} 
// Home page
else {
  document.getElementsByClassName('home-link')[0].classList.add('underlined--blue');
} 

