const ui = {
    nav_toggle_button: document.querySelector('.mobile-menu-toggle'),
    mobile_nav: document.querySelector('.mobile-nav')
};

const handleNavToggleClick = (event) => {
    ui.mobile_nav.classList.toggle('show');
    ui.nav_toggle_button.querySelector('.material-symbols-outlined').textContent = ui.mobile_nav.classList.contains('show') ? 'menu_open' : 'menu';
};

export { ui, handleNavToggleClick };