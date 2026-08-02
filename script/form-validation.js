












const call_back_Form = {
    name_input: document.querySelector('#name'),
    phone_input: document.querySelector('#phone'),
    error_name: document.querySelector('#error-name'),
    error_phone: document.querySelector('#error-phone')
};

function registerValidationEventHandlers(input_element, error_element) {
    input_element.addEventListener('blur', () => {
        if (input_element.validity.typeMismatch || input_element.validity.patternMismatch) {
            error_element.hidden = false;
        }
        else {
            error_element.hidden = true;
        }
    })
}

export{call_back_Form, registerValidationEventHandlers}