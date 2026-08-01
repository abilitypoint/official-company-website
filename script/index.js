import { ui, handleNavToggleClick, registerEventHandlers } from "./site-navigation.js";

ui.nav_toggle_button.addEventListener('click', (event) => handleNavToggleClick(event));
registerEventHandlers();