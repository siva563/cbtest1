var formContainer =document.createElement('div');
formContainer.setAttribute('style','border:2px solid #333;padding:20px;width:300px;margin:auto; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1); border-radius: 8px;');

var form=document.createElement('form');
form.setAttribute('Id' ,'User');

var FirstNameLabel=document.createElement('label');
FirstNameLabel.textContent='Firstname';
FirstNameLabel.setAttribute('style','display:block;margin-bottom:10px;');
var FirstNameInput=document.createElement('input');
FirstNameInput.setAttribute('type' , 'text');
FirstNameInput.setAttribute('name', 'Firstname');
FirstNameLabel.appendChild(FirstNameInput);
form.appendChild(FirstNameLabel);

var LastNameLabel=document.createElement('label');
LastNameLabel.textContent='LastName';
LastNameLabel.setAttribute('style','display:block;margin-bottom:10px;');
var LastNameInput=document.createElement('input');
LastNameInput.setAttribute('type','text');
LastNameInput.setAttribute('name','LastName');
LastNameLabel.appendChild(LastNameInput);
form.appendChild(LastNameLabel);

var EmailLabel=document.createElement('label');
EmailLabel.textContent='Emailyour';
EmailLabel.setAttribute('style','display:block;margin-bottom:10px;');
var EmailInput=document.createElement('input');
EmailInput.setAttribute('type','Email');
EmailInput.setAttribute('name','Email');
EmailLabel.appendChild(EmailInput);
form.appendChild(EmailLabel);

var HobbiesLabel=document.createElement('label');
HobbiesLabel.textContent='Hobbiess:';
HobbiesLabel.setAttribute('style','display:block;margin-bottom:10px;');
var HobbiesInput=document.createElement('input');
HobbiesInput.setAttribute('type','text');
HobbiesInput.setAttribute('name','Hobbies');
HobbiesLabel.appendChild(HobbiesInput);
form.appendChild(HobbiesLabel);

var GenderLabel=document.createElement('Label');
GenderLabel.textContent='Gender';
GenderLabel.setAttribute('style','display:block;margin-bottom:10px;');
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
submitButton.setAttribute('style','margin-top:10px;');
form.appendChild(submitButton);

var clearButton=document.createElement('button');
clearButton.textContent='clear';
clearButton.setAttribute('type','button');
clearButton.setAttribute('style','margin-top;margin-left:10px;');
form.appendChild(clearButton);

formContainer.appendChild(form);
document.body.appendChild(formContainer);
 
var table=document.createElement('table');
table.setAttribute('border','1');
table.setAttribute('style', 'width: 100%; margin-top: 20px; display: none;');
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
    if(!FirstName || !LastName || !Email || !Hobbies || !Gender){
        alert("Please fill in all feilds before submitting.");
        return;
    }

    table.style.display='table';

    var row=table.insertRow();
    row.insertCell(0).textContent=FirstName;
    row.insertCell(1).textContent=LastName;
    row.insertCell(2).textContent=Email;
    row.insertCell(3).textContent=Hobbies;
    row.insertCell(4).textContent=Gender;

    var actionCell=row.insertCell(5);
    var editButton = document.createElement('button');
    editButton.textContent='Edit';
    editButton.setAttribute('style','margin-right:10px');
    editButton.addEventListener('click',function(){
        FirstNameInput.value=row.cells[0].textContent;
        LastNameInput.value=row.cells[1].textContent;
        EmailInput.value=row.cells[2].textContent;
        HobbiesInput.value=row.cells[2].textContent;
        GenderSelect.value = row.cells[4].textContent;

        table.deleteRow(row.rowIndex);
    });
    actionCell.appendChild(editButton);

    var deleteButton=document.createElement('button');
    deleteButton.textContent='delete';
    deleteButton.addEventListener('click',function(){
        table.deleteRow(row.rowIndex);
        if(table.rows.length==1){
            table.style.display='none';
        }
    });
    actionCell.appendChild(deleteButton);

    form.reset();
});
clearButton.addEventListener('click' ,function(){
    form.reset();
    table.style.display='none';
    while(table.rows.length>1){
        table.deleteRow(1);
    }
});
