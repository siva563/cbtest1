var form=document.createElement('form');
form.setAttribute('Id' ,'User');
var FirstNameLabel=document.createElement('label');
FirstNameLabel.textContent='Firstname';
var FirstNameInput=document.createElement('input');
FirstNameInput.setAttribute('type' , 'text');
FirstNameInput.setAttribute('name', 'Firstname');
FirstNameLabel.appendChild(FirstNameInput);
form.appendChild(FirstNameLabel);

var LastNameLabel=document.createElement('label');
LastNameLabel.textContent='LastName';
var LastNameInput=document.createElement('input');
LastNameInput.setAttribute('type','text');
LastNameInput.setAttribute('name','LastName');
LastNameLabel.appendChild(LastNameInput);
form.appendChild(LastNameLabel);

var EmailLabel=document.createElement('label');
EmailLabel.textContent='Email';
var EmailInput=document.createElement('input');
EmailInput.setAttribute('type','Email');
EmailInput.setAttribute('name','Email');
EmailLabel.appendChild(EmailInput);
form.appendChild(EmailLabel);

var HobbiesLabel=document.createElement('label');
HobbiesLabel.textContent='Hobbies';
var HobbiesInput=document.createElement('input');
HobbiesInput.setAttribute('type','Hobbies');
HobbiesInput.setAttribute('name','Hobbies');
HobbiesLabel.appendChild(HobbiesInput);
form.appendChild(HobbiesLabel);

var GenderLabel=document.createElement('Label');
GenderLabel.textContent='Gender';
var GenderSelect=document.createElement('select');
GenderSelect.setAttribute('name','Gender');//
var MaleOption=document.createElement('Option');
MaleOption.value='Male';
MaleOption.textContent='Male';
var FemaleOption=document.createElement('Option');//
FemaleOption.value='Female';
FemaleOption.textContent='Female';
var OtherOption=document.createElement('Option');//
OtherOption.value='Other';
OtherOption.textContent='Other';
GenderSelect.appendChild(MaleOption);
GenderSelect.appendChild(FemaleOption);
GenderSelect.appendChild(OtherOption);
GenderLabel.appendChild(GenderSelect);
form.appendChild(GenderLabel);

var submitButton=document.createElement('button');
submitButton.textContent=('SUBMIT');
submitButton.setAttribute('type','submit');
form.appendChild(submitButton);

var clearButton=document.createElement('button');
clearButton.textContent='clear';
clearButton.setAttribute('type','clear');
form.appendChild(clearButton);

document.body.appendChild(form);
