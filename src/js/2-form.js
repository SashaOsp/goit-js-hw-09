const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formObj = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);

  formObj.email = parsedData.email ?? '';
  formObj.message = parsedData.message ?? '';

  form.elements.email.value = formObj.email;
  form.elements.message.value = formObj.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name in formObj) {
    formObj[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObj));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formObj.email || !formObj.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formObj);

  localStorage.removeItem(STORAGE_KEY);
  formObj = { email: '', message: '' };
  form.reset();
});
