let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
}else {
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
}
}

// get all in-page navigation links
var navLinks = document.querySelectorAll("a[href^='#']");

// add click event listener to each link
navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    // prevent the default link behavior
    event.preventDefault();

    // get the ID of the section to display from the link href
    var sectionId = link.getAttribute("href").substr(1);

    // hide all sections except for the one that was clicked
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      if (section.id === sectionId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });

    // update the URL hash
    window.location.hash = sectionId;
  });
});

// show the section based on the URL hash on page load
if (window.location.hash) {
  var sectionId = window.location.hash.substr(1);
  var section = document.getElementById(sectionId);
  if (section) {
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      if (section.id === sectionId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
}
