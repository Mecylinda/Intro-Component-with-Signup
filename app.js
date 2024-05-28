const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorMessage = document.querySelectorAll(".error-message");
const errorExclaimation = document.querySelectorAll(".error-exclaimation");
const seePassword = document.querySelector(".fa-eye-slash");
const hidePassword = document.querySelector(".fa-eye");


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);


  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorExclaimation[0].classList.remove('hide');
     errorMessage[0].classList.remove("hide");

  } else {
    firstName.classList.remove('error');
     errorExclaimation[0].classList.add("hide");
     errorMessage[0].classList.add("hide");
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
     errorExclaimation[1].classList.remove("hide");
     errorMessage[1].classList.remove("hide");

  } else {
    lastName.classList.remove('error');
       errorExclaimation[1].classList.add("hide");
       errorMessage[1].classList.add("hide");
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
     errorExclaimation[2].classList.remove("hide");
     errorMessage[2].classList.remove("hide");

  } else {
    email.classList.remove('error');
     errorExclaimation[2].classList.add("hide");
     errorMessage[2].classList.add("hide");
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
     errorExclaimation[3].classList.remove("hide");
     errorMessage[3].classList.remove("hide");

  } else {
    password.classList.remove('error');
     errorExclaimation[3].classList.add("hide");
     errorMessage[3].classList.add("hide");
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
