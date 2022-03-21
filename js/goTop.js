export const goTop = () => {
  const btnGotop = document.getElementById("goTop");
  window.addEventListener("scroll", () => {
    window.scrollY >= 100
      ? btnGotop.classList.add("goTop__active")
      : btnGotop.classList.remove("goTop__active");
  });
  btnGotop.addEventListener("click", () => {
    window.scroll(0, 0);
  });
};
