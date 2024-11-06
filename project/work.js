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
HobbiesInput.setAttribute('type','text');
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
clearButton.setAttribute('type','button');
form.appendChild(clearButton);
document.body.appendChild(form);
var table=document.createElement('table');
table.setAttribute('border','1');
var tableHeader='<tr>'+
    '<th> FirstName</th>'+
    '<th> LastName</th>'+
    '<th> Email</th>'+
    '<th> Hobbies</th>'+
    '<th> Gender</th>'+
'</tr>';
table.innerHTML=tableHeader;
document.body.appendChild(table);
submitButton.addEventListener('click' ,function(event){
    event.preventDefault();
    var FirstName =FirstNameInput.value;
    var LastName =LastNameInput.value;
    var Email= EmailInput.value;
    var Hobbies=HobbiesInput.value;
    var Gender=GenderSelect.value;
    alert(`form submitted:
        FirstName: ${FirstName}
        LastName: ${LastName}
        Email: ${Email}
        Hobbies: ${Hobbies}
        Gender:${Gender}`);
    var row=table.insertRow();
    row.insertCell(0).textContent=FirstName;
    row.insertCell(1).textContent=LastName;
    row.insertCell(2).textContent=Email;
    row.insertCell(3).textContent=Hobbies;
    row.insertCell(4).textContent=Gender;
    form.reset();
});
clearButton.addEventListener('click' ,function(){
    form.reset();
})
