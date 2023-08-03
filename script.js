'use strict';

/* Understand the Problem

--> input
--> output
--> Divide the section
--> Solve one by one 
*/

//element

const userNameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const formEl = document.getElementById('form');

//global variable
const inputs = [
  { input: userNameInput, message: 'Username' },
  { input: emailInput, message: 'Email Address' },
  { input: passwordInput, message: 'Password' },
  { input: confirmPasswordInput, message: 'Confirm Password' },
];

//create function for simplify the codes

function showErrorMessage(input, message) {
  const formcontrolEl = input.parentElement;
  input.classList.remove('success');
  input.classList.add('error-input');
  const errorEl = formcontrolEl.querySelector('.error');
  errorEl.classList.add('error-message');
  errorEl.innerText = message;
}
//create function for simplify the codes
function showSuccess(input) {
  input.classList.remove('error-input');
  input.classList.add('success');
  const formcontrolEl = input.parentElement;
  const errorEl = formcontrolEl.querySelector('.error');
  errorEl.classList.remove('error-message');
}

//---->too simplify
const checkRequired = function (input, message) {
  if (input.value.trim()) {
    // showSuccess(input); --> valid @ last
  } else {
    showErrorMessage(input, `${message} is required`);
  }
};
// email should be proper method
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
const checkEmail = function (inputs) {
  if (validateEmail(inputs.value.trim())) {
    showSuccess(inputs);
  } else {
    showErrorMessage(inputs, 'Enter a valid Email Address');
  }
};
//AddEventListener
formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    checkRequired(inputs[i].input, inputs[i].message);
  }
  //check length for username
  if (userNameInput.value.trim().length < 5) {
    showErrorMessage(userNameInput, 'Username should be atleast 5 characters');
  } else if (userNameInput.value.trim().length > 12) {
    showErrorMessage(
      userNameInput,
      'Username should be less than 16 characters'
    );
  } else {
    showSuccess(userNameInput);
  }

  //check length for password
  if (passwordInput.value.trim().length < 8) {
    showErrorMessage(passwordInput, 'Password should be atleast 8 characters');
  } else if (passwordInput.value.trim().length > 16) {
    showErrorMessage(
      passwordInput,
      'Password should be less than 16 characters'
    );
  } else {
    showSuccess(passwordInput);
  }

  //email
  checkEmail(emailInput);

  //password matches to confirm password

  const comparePassword = function (inputOne, inputTwo) {
    if (inputOne.value.trim() === inputTwo.value.trim()) {
      showSuccess(confirmPasswordInput);
    } else {
      showErrorMessage(
        inputTwo,
        'Password does not match with Confirm Password'
      );
    }
  };
  comparePassword(passwordInput, confirmPasswordInput);
});

//if success ---> clr changes
// userNameInput.classList.add('success');

// //to call parent element
// const formcontrolEl = userNameInput.parentElement;
// //from the child selection
// const errorEl = formcontrolEl.querySelector('.error');
// //update the class
// errorEl.classList.add('error-message');
// //display messages
// errorEl.innerText = 'Username is mandatory'

/*
const username = userNameInput.values.trim();
const email = emailInput.values.trim();
const username = passwordInput.values.trim();
const username = confirmPasswordInput.values.trim();*/
