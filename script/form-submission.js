import { call_back_Form } from "./form-validation.js";
async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(call_back_Form.form);
    let name = formData.get("name");
    let phone = formData.get("phone");
    
    try {
        const response = await fetch('https://abilitypoint-website-0-0-1.onrender.com/form-handler.php', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, phone: phone })
        });

        console.log(response.status);
        console.log(await response.text());

        if (response.status > 200) {
            call_back_Form.form_feedback.classList.add('error-message');
            call_back_Form.form_feedback.textContent = 'Sorry, there has been an error, please try again later';
        }
        else {
            call_back_Form.form_feedback.classList.add('success-message');
        }
    } catch (error) {
        call_back_Form.form_feedback.classList.add('error-message');
        call_back_Form.form_feedback.textContent = 'Sorry, there has been an error, please try again later';
        console.log(error)
    }

    call_back_Form.form_feedback.hidden = false;

    call_back_Form.form.reset()
}

export{handleSubmit}