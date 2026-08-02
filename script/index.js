import { ui, handleNavToggleClick, registerEventHandlers } from "./site-navigation.js";
import { call_back_Form, registerValidationEventHandlers } from "./form-validation.js";

ui.nav_toggle_button.addEventListener('click', (event) => handleNavToggleClick(event));
registerEventHandlers();

registerValidationEventHandlers(call_back_Form.name_input, call_back_Form.error_name);
registerValidationEventHandlers(call_back_Form.phone_input, call_back_Form.error_phone)