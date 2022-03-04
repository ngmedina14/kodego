

// Validate the fields from form
// ex.
// <form id="login"> <input required placeholder="field" aria-describedby="errorElementID"/> </form>
// let fields = document.querySelectorAll("#login > input,select");
// validateFormFields(fields)
function validateFormFields(formFields) {
    [...formFields].map((field) => {
        field.onblur = (event) => {
            // check if the value is valid
            const isValid = event.target.validity.valid;

            // get the element id
            let targetPlaceholder = event.target.getAttribute('placeholder');

            // get the value from the input
            var targetValue = event.target.value;

            // get the validation message from the specific input
            let message = event.target.validationMessage;

            // get the value of aria-describedby : the value of this is the same as the id of the error element
            const connectedValidationId = event.target.getAttribute('aria-describedby');

            //check if the connectedValidationId has value if empty return false if true get the element
            const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;


            if (connectedValidation && message && !isValid || targetValue == 0) {
                (!targetValue) ? message = `${targetPlaceholder} field is required.` : message
                connectedValidation.textContent = message;
            } else {
                connectedValidation.textContent = '';
            }
        };
    });
}
