/*для прокрутки вверх*/
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/*для выдвигающейся панели */
function togglePanel() {
    var panel = document.getElementById("panel");
    if (panel.style.visibility === "hidden") {
        panel.style.visibility = "visible";
        panel.style.top = "100px";
    } else {
        panel.style.visibility = "hidden";
        panel.style.top = "-100px";
    }
}