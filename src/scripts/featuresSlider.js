const tabs = document.querySelectorAll(".features-element");
const illustrationTab = document.querySelectorAll(".illustration-tab1>img");
const descriptions = document.querySelectorAll("main>section:nth-child(5)>div");
const redUnderline = document.querySelectorAll(".red-underline");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (onClickEvent) => {
    /* inserting underline */
    redUnderline.forEach((underline) => (underline.style.display = "none"));
    redUnderline[index].style.display = "block";

    /* changing illustration image */
    illustrationTab.forEach((image) => (image.style.display = "none"));
    illustrationTab[index].style.display = "block";

    /* changing tab description */
    descriptions.forEach((des) => (des.style.display = "none"));
    descriptions[index].style.display = "flex";
  });
});
