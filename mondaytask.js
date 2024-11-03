// Create a form element
var form = document.createElement('form');
form.setAttribute('id', 'userForm');

// Create First Name field
var firstNameLabel = document.createElement('label');
firstNameLabel.textContent = 'First Name: ';
var firstNameInput = document.createElement('input');
firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('name', 'firstName');
firstNameLabel.appendChild(firstNameInput);
form.appendChild(firstNameLabel);

// Create Last Name field
var lastNameLabel = document.createElement('label');
lastNameLabel.textContent = 'Last Name: ';
var lastNameInput = document.createElement('input');
lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('name', 'lastName');
lastNameLabel.appendChild(lastNameInput);
form.appendChild(lastNameLabel);

// Create Gender field
var genderLabel = document.createElement('label');
genderLabel.textContent = 'Gender: ';
var genderSelect = document.createElement('select');
genderSelect.setAttribute('name', 'gender');
var maleOption = document.createElement('option');
maleOption.value = 'male';
maleOption.textContent = 'Male';
var femaleOption = document.createElement('option');
femaleOption.value = 'female';
femaleOption.textContent = 'Female';
var otherOption = document.createElement('option');
otherOption.value = 'other';
otherOption.textContent = 'Other';
genderSelect.appendChild(maleOption);
genderSelect.appendChild(femaleOption);
genderSelect.appendChild(otherOption);
genderLabel.appendChild(genderSelect);
form.appendChild(genderLabel);

// Create Email field
var emailLabel = document.createElement('label');
emailLabel.textContent = 'Email: ';
var emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailLabel.appendChild(emailInput);
form.appendChild(emailLabel);

// Create Hobbies field
var hobbiesLabel = document.createElement('label');
hobbiesLabel.textContent = 'Hobbies: ';
const hobbiesInput = document.createElement('input');
hobbiesInput.setAttribute('type', 'text');
hobbiesInput.setAttribute('name', 'hobbies');
hobbiesLabel.appendChild(hobbiesInput);
form.appendChild(hobbiesLabel);

// Create a Submit button
var submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.setAttribute('type', 'submit');
form.appendChild(submitButton);

// Append the form to the body
document.body.appendChild(form);