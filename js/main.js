const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const allNav = document.querySelectorAll('nav__link')


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    allNav.forEach((item) => {
        item.addEventListener("click", () => {
          nav.classList.remove("nav--active");
          allNavItems.forEach((item) => {
            item.classList.remove("nav-items-animation");
          });
        });
      });


}

navBtn.addEventListener('click', handleNav)








const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
  };
  handleCurrentYear();