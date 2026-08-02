const ui = {
    nav_toggle_button: document.querySelector('.mobile-menu-toggle'),
    mobile_nav: document.querySelector('.mobile-nav'),
    scroll_to_top_button: document.querySelector('#scroll-to-top-button')
};


function registerEventHandlers() {
    ui.mobile_nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => { ui.mobile_nav.classList.remove('show'); updateNavToggleButtonView(); });
    });

    ui.scroll_to_top_button.addEventListener('click', () => {
        console.log(34)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}

function updateNavToggleButtonView() {
    ui.nav_toggle_button.querySelector('.material-symbols-outlined').textContent = ui.mobile_nav.classList.contains('show') ? 'menu_open' : 'menu';
}

const handleNavToggleClick = (event) => {
    ui.mobile_nav.classList.toggle('show');
    ui.nav_toggle_button.querySelector('.material-symbols-outlined').textContent = ui.mobile_nav.classList.contains('show') ? 'menu_open' : 'menu';
};

export { ui, handleNavToggleClick, registerEventHandlers };