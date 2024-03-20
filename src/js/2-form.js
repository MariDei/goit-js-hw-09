//*1
// const STORAGE_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');
// const textarea = form.querySelector('textarea');

// form.addEventListener('submit', handleSubmit);
// textarea.addEventListener('input', onTextareaInput);

// populateTextarea();

// function handleSubmit(event) {
//   event.preventDefault();

//   console.log('send');
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(event) {
//   const message = event.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     textarea.value = savedMessage;
//   }
// }

//*2
// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.querySelector('.feedback-form');

//   form.addEventListener('input', function (event) {
//     const formData = {
//       email: form.elements.email.value.trim(),
//       message: form.elements.message.value.trim(),
//     };
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   });

//   const storedFormData = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   );
//   if (storedFormData) {
//     form.elements.email.value = storedFormData.email;
//     form.elements.message.value = storedFormData.message;
//   }

//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const email = form.elements.email.value.trim();
//     const message = form.elements.message.value.trim();

//     if (email && message) {
//       console.log({ email, message });
//       localStorage.removeItem('feedback-form-state');

//       form.elements.email.value = '';
//       form.elements.message.value = '';
//     }
//   });
// });

//*3
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

textarea.addEventListener('input', onInputData);
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(event) {
  dataForm = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі поля.`);
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}
