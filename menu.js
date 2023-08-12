const menuButton = document.getElementById("nav-icon");
const navMenu = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('closed');
    navMenu.classList.toggle('hidden');
})