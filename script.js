// NavBar-tasktop-with-page-start
let NavLinkContainer = document.querySelector(".nav-links");
NavLinkContainer.addEventListener("click", btnClick);
function btnClick(e) {
  // 1.Click to colour change btn
  let Links = document.querySelectorAll(".nav-links li a");
  Links.forEach((link) => {
    link.classList.remove("active");
  });
  let targetLink = e.target;
  targetLink.classList.add("active");
  // 2.Display the page
  let PagesList = document.querySelectorAll(".page");
  PagesList.forEach((page) => {
    page.classList.remove("page-active");
  });
  let getPageName = e.target.href ? e.target.href.split("#")[1] : "home";
  let Pages = document.getElementById(getPageName);
  Pages.classList.add("page-active");
}
// NavBar-tasktop-with-page-End
// NavBar-Mobile-Start
let MobileNavBar = document.querySelector(".nav-btn");
let FirstCrossLine = MobileNavBar.children[0];
let HiddenLine = MobileNavBar.children[1];
let SecondCrossLine = MobileNavBar.children[2];
let popUpWindow = document.querySelector(".full-screen-nav-pop-up");
function NavClick() {
  //first-line
  if (FirstCrossLine.classList.contains("active")) {
    FirstCrossLine.classList.remove("active");
  } else {
    FirstCrossLine.classList.add("active");
  }
  //hide-line
  if (HiddenLine.classList.contains("active")) {
    HiddenLine.classList.remove("active");
  } else {
    HiddenLine.classList.add("active");
  }
  //second-line
  if (SecondCrossLine.classList.contains("active")) {
    SecondCrossLine.classList.remove("active");
  } else {
    SecondCrossLine.classList.add("active");
  }

  //popup
  if (popUpWindow.classList.contains("active")) {
    popUpWindow.classList.remove("active");
  } else {
    popUpWindow.classList.add("active");
  }
}

let MobileNavLink= document.querySelector('.full-screen-nav-pop-up ul');
MobileNavLink.addEventListener('click',mClick)
function mClick(e){
   // 2.Display the page
   let PagesList = document.querySelectorAll(".page");
   PagesList.forEach((page) => {
     page.classList.remove("page-active");
   });
   let getPageName = e.target.href ? e.target.href.split("#")[1] : "home";
   let Pages = document.getElementById(getPageName);
   Pages.classList.add("page-active");
   NavClick()
}
// NavBar-Mobile-End
