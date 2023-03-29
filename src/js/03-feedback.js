import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name=email');
const messageRef = document.querySelector('[name=message');


formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', onFormInput);
// emailRef.addEventListener('input', onEmailInput);

function onFormInput(e) {
    const dataForm = {
        email: emailRef.value,
        messageRef: messageRef.value,
    }
            console.log(dataForm);

}


function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')

}






