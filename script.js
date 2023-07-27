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
