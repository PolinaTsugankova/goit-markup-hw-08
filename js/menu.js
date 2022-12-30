(() => {
   const refs = {
      openMenuBtn: document.querySelector(".header__btn"),
      closeMenuBtn: document.querySelector(".mob-header__btn"),
      menu: document.querySelector(".mob-header__nav"),
   };

   refs.openMenuBtn.addEventListener("click", toggleMenu);
   refs.closeMenuBtn.addEventListener("click", toggleMenu);

   function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
   }
})();

// (() => {
//    const mobileMenu = document.querySelector(".js-mob-header__nav");
//    const openMenuBtn = document.querySelector(".js-header__btn");
//    const closeMenuBtn = document.querySelector(".js-mob-header__btn");
//    const toggleMenu = () => {
//       const isMenuOpen =
//          openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//       openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//       mobileMenu.classList.toggle("is-open");
//       const scrollLockMethod = !isMenuOpen
//          ? "disableBodyScroll"
//          : "enableBodyScroll";
//       bodyScrollLock[scrollLockMethod](document.body);
//    };
//    openMenuBtn.addEventListener("click", toggleMenu);
//    closeMenuBtn.addEventListener("click", toggleMenu);

//    // Закрываем мобильное меню на более широких экранах
//    // в случае изменения ориентации устройства.
//    // Close the mobile menu on wider screens if the device orientation changes
//    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove("is-open");
//       openMenuBtn.setAttribute("aria-expanded", false);
//       bodyScrollLock.enableBodyScroll(document.body);
//    });
// })();
