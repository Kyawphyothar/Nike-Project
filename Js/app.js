// document.querySelectorAll('a.nav-link').forEach((link) => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();

//       const targetId = link.getAttribute('href');
//       const targetSection = document.querySelector(targetId);

//       if (targetSection) {
//         window.scrollTo({
//           top: targetSection.offsetTop,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });

  // const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 100) {
  //     scrollToTopBtn.classList.add('show');
  //   } else {
  //     scrollToTopBtn.classList.remove('show');
  //   }
  // });

  // scrollToTopBtn.addEventListener('click', () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // });