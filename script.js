// //console.log("hello");

// /*function add(a ,b){
//     var a;
//     var b;
//     let z = a + b ;
  
//     console.log("the value of a and b:" +z);
// }
// add(2, 3);

// var x = 10 ;
// var y = 20;
//  function cool( a,b){
//     var c=x+y;
//     console.log(c);
//  }
//  cool(x,y);*/

// /*var x = 10 ;
// var y = 20;
//  function cool( a,b){
//     x =a;
//     y=b;
//     var z=x+y;
//     console.log(z);
//  }
//  cool(2,5);*/
// console.log("Arithmatic operations-->")
//  function add(a,b){
//    console.log("addition of a and b ="+(a+b));
//    }
//  add(2,3);

//  function sub(a,b){
//    console.log("subtraction of a and b ="+(a-b));
//  }
//  sub(10,5);

//  function mul(a,b){
//    console.log("multiplication of a and b ="+(a*b));
//  }
//  mul(10,5);

//  function div(a,b){
//    console.log("division of a and b ="+(a/b));
//  }
//  div(10,5);

//  function modulus(a,b){
//    console.log("modulus of a and b ="+(a%b));
//  }
//  modulus(10,3);

//  console.log("increment and decrement-->")

// var a=4;
// a++;
// console.log(a);

// var b=5;
// b--;
// console.log(b);

// var c=3;
// ++c;
// console.log(c);

// var d=10;
// --d;
// console.log(d);

// console.log("assignment operators-->");
// function equal(a){
//   console.log("the value of a = "+a);
// }
// equal(8)

// function assadd(a){
//   a+=5;
//   console.log("the value of a = "+a);
// }
// assadd(2)

// function asssub(a){
//   a-=5;
//   console.log("the value of a = "+a);
// }
// asssub(3)

// function assmul(a){
//   a*=5;
//   console.log("the value of a = "+a);
// }
// assmul(3)

// function assdiv(a){
//   a/=5;
//   console.log("the value of a = "+a);
// }
// assdiv(3)

// function assmdl(a){
//   a%=5;
//   console.log("the value of a = "+a);
// }
// assmdl(3)
// console.log("Question no 1:");
// function sum(a,b){
//   return a+b;
// }
// var z = sum(2,3);
// console.log("sum of value of a and b are : "+z); 
 
// console.log("Question no 2:");
// function hoursToseconds(hours){
//   return hours *= 3600;
// }
// var hours=24;
// var seconds=hoursToseconds(hours);
// console.log("24 hours is equal to = "+seconds);

// console.log("Question no 3:");
// function incrementbythree(num){
//   return num += 3;
// }
// var num= 10;
// var result=incrementbythree(num);
// console.log("the result is "+result);
// console.log("Question no 4:");
// function age(birthyear){
//     var currentYear = new Date();
//     var birthDate = new Date(birthyear ,0 ,1);
//     var diffmilliseconds = currentDate - birthDate;

//     var days = yearPassed * 365;
//     var hours = days * 24;
//     var minutes = hours * 60;
//     var seconds = minutes * 60;

//     return{
//         days: days,
//         hours: hours,
//         minutes: minutes,
//         seconds: seconds
//         };
//     }

//     var birthyear = 2001;
//     var ageintime = age(birthyear);
//     console.log(days);
//     console.log(hours);
//     console.log(minutes);
//     console.log(seconds);
 

// console.log("Question no 5:");

// function isprime(n){
//     if(n <= 1)return false;
//     if(n <= 3)return true;
//     if(n % 2 === 0 ||  n % 3 === 0 ) return false;
//     for(var i = 2 ; i<=n; i++ ){
//         if(n % i === 0 || n % (i+2) === 0){
//             return false;
//         }
//         return true;
//     }
// }
// var number = 2;
// if(isprime(number)){
//     console.log(number+'is a prime number');
// } else{
//     console.log(number+'is not a prime number');
// }


// for (var i=0; i <mydata.products.length; i++){

//     var rtr=mydata.products[i].reviews;
//     for (var k=0; k< rtr.length;k++){
//         if (rtr[k].rating==4){
//        console.log(rtr[k].comment)
//     }
//     }
// }

// for(var i=0; i< mydata.products.length; i++){
//     if(i<=mydata.products[i].category == "beauty"){
//          console.log(mydata.products[i].title);
//     }
// }

//  function display(){
//      var firstName= document.getElementById("demo").value;
//      console.log(firstName);

//      var lastName= document.getElementById("demo1").value;
//      console.log(lastName);

//      var mobile= document.getElementById("demo2").value;
//      console.log(mobile);

//      var email= document.getElementById("demo3").value;
//      console.log(email);

//      var selectedValue;
//      var names = document.getElementsByName("Gender");
//      for(var i =0 ; i < names.length;i++){
//          if(names[i].checked){
//              selectedValue=names[i].value;
//          }
//      }

//      console.log(selectedValue);
//     var qualification= document.getElementById("demo6").value;
//      console.log(qualification);

//      var degreepercentage= document.getElementById("demo7").value;
//      console.log(degreepercentage);

//      var address= document.getElementById("demo8").value;
//      console.log(address);
//      var address= document.getElementById("demo9").value;
//      console.log(address);
//      var address= document.getElementById("demo10").value;
//      console.log(address);
//     var select;
//      var hobbs=document.getElementsByName("Hobbies");
//      for(var i=0; i<hobbs.length;i++){
//          if(hobbs[i].checked){
//              select=hobbs[i].value
//          }
//      }
//      console.log(select);

//  }

//  function reset(){
//      document.getElementById("demo2").remove();
     
// }

// var _td=document.createElement("td");
//      _td.innerHTML="cell1 ";
// var _td2=document.createElement("td");
//      _td2.innerHTML="cell2";
// var _td3=document.createElement("td");
//      _td3.innerHTML="cell3 ";
// var _tr=document.createElement("tr");
//      _tr.appendChild(_td);
//      _tr.style.border="1px solid black";
//      _tr.appendChild(_td2);
//      _tr.appendChild(_td3);
// var _table=document.createElement("table");
//      _table.appendChild(_tr);
//      _table.style.border="1px solid black"
// mydiv=document.getElementById('chandu');
// mydiv.appendChild(_table);

// var _td=document.createElement("td");
//      _td.innerHTML="cell4 ";
// var _td2=document.createElement("td");
//      _td2.innerHTML="cell5";
// var _td3=document.createElement("td");
//      _td3.innerHTML="cell6 ";
// var _tr=document.createElement("tr");
//      _tr.appendChild(_td);
//      _tr.appendChild(_td2);
//      _tr.appendChild(_td3);
// var _table=document.createElement("table");
//      _table.appendChild(_tr);
//       _table.style.border="1px solid black"
// mydiv=document.getElementById('chandu');
// mydiv.appendChild(_table);

var form = document.createElement('form');

var fnameLabel = document.createElement('label');
fnameLabel.textContent = 'firstName:';
var fnameInput = document.createElement('input');
fnameInput.setAttribute("type","text");
fnameInput.setAttribute("name","firstName");
fnameInput.setAttribute("id","firstName");
form.appendChild(fnameLabel);
form.appendChild(fnameInput);

var lnameLabel = document.createElement('label');
lnameLabel.textContent = 'lastName:';
var lnameInput = document.createElement('input');
lnameInput.setAttribute("type","text");
lnameInput.setAttribute("name","lastName");
lnameInput.setAttribute("id","lastName");
form.appendChild(lnameLabel);
form.appendChild(lnameInput);


var Genderlabel = document.createElement('label');
Genderlabel.textContent = 'Gender:';
var genderselect = document.createElement("select");
genderselect.setAttribute("name","Gender");
genderselect.setAttribute("id","Gender");

var optionMale = document.createElement("option");
optionMale.value = "Male";
optionMale.textContent = "Male";


var optionFemale = document.createElement("option");
optionFemale.value = "Female";
optionFemale.textContent = "Female";

var optionother = document.createElement("option");
optionother.value = "other";
optionother.textContent = "other";

genderselect.appendChild(optionMale);
genderselect.appendChild(optionFemale);
genderselect.appendChild(optionother);

form.appendChild(Genderlabel);
form.appendChild(genderselect);

var Email = document.createElement('label');
Email.textContent = 'email:';
var emailInput= document.createElement('input');
emailInput.setAttribute("type","email");
emailInput.setAttribute("name","Email");
emailInput.setAttribute("id","Email");
form.appendChild(Email);
form.appendChild(emailInput);

var HobbiesLabel = document.createElement('label');
HobbiesLabel.textContent = 'Hobbies:';
var HobbiesInput = document.createElement('input');
HobbiesInput.setAttribute("type","text");
HobbiesInput.setAttribute("name","Hobbies");
HobbiesInput.setAttribute("id","Hobbies");
form.appendChild(HobbiesLabel);
form.appendChild(HobbiesInput);

var saveButton = document.createElement("button");
saveButton.textContent = "save";
saveButton.setAttribute("type","button");
saveButton.onclick = savedata;

form.appendChild(saveButton);

var clearButton = document.createElement("button");
clearButton.textContent = "clear";
clearButton.setAttribute("type","button");
clearButton.onclick = function(){
    form.reset();
};

form.appendChild(clearButton);

document.body.appendChild(form);

var table = document.createElement("table");
table.setAttribute("id","data-table")

var headerRow = document.createElement("tr");

var th1 = document.createElement("th");
th1.textContent = "firstName";
headerRow.appendChild(th1);


var th2 = document.createElement("th");
th2.textContent = "lastName";
headerRow.appendChild(th2);

var th3 = document.createElement("th");
th3.textContent = "Gender";
headerRow.appendChild(th3);

var th4 = document.createElement("th");
th4.textContent = "Email";
headerRow.appendChild(th4);

var th5 = document.createElement("th");
th5.textContent = "Hobbies";
headerRow.appendChild(th5);

table.appendChild(headerRow);
document.body.appendChild(table);

function savedata(){

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var Gender = document.getElementById("Gender").value;
    var Email = document.getElementById("Email").value;
    var Hobbies = document.getElementById("Hobbies").value;

    var Row = document.createElement("tr");

    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = firstName;
    Row.appendChild(firstNameCell);

    var lastNameCell = document.createElement("td");
    lastNameCell.textContent = lastName;
    Row.appendChild(lastNameCell);

    var GenderCell = document.createElement("td");
    GenderCell.textContent = Gender;
    Row.appendChild(GenderCell);

    var EmailCell = document.createElement("td");
    EmailCell.textContent = Email;
    Row.appendChild(EmailCell);

    var HobbiesCell = document.createElement("td");
    HobbiesCell.textContent = Hobbies;
    Row.appendChild(HobbiesCell);

    var action = document.createElement("td");

    var edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.onclick = function(){
        document.getElementsById("firstName").value = firstName;
        document.getElementsById("lastName").value = lastName;
        document.getElementsById("Gender").value = Gender;
        document.getElementsById("Email").value = Email;
        document.getElementsById("Hobbies").value = Hobbies;

        table.removeChild(Row);    
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function(){
        table.removeChild(Row);
    };

    action.appendChild(edit);
    action.appendChild(deleteButton);
    Row.appendChild(action);

    table.appendChild(Row);

    form.reset();
   
}