import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name=email]');
const messageRef = document.querySelector('[name=message]');


formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);


function onFormInput() {
    const dataForm = {
        email: emailRef.value,
        message: messageRef.value,
    }
        localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function localStorageSaveData (){
    let savedData = JSON.parse(localStorage.getItem('feedback-form-state'))
     if (savedData) {
         emailRef.value = savedData.email; 
         messageRef.value = savedData.message;
    }
}

localStorageSaveData();


function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}






