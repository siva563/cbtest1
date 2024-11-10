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

// 


var str1 = "bged fgbg hbgce fgbg fgbg lmno abcd hbgce";
console.log(str1.)