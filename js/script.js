const togglemenu = document.querySelector('.toggle');
const navi = document.querySelector('.navigation');

togglemenu.addEventListener('click', () => {
  togglemenu.classList.toggle('active');
  navi.classList.toggle('active');
});
