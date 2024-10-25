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

function sum(a,b){
  return a+b;
}
var z = sum(2,3);
console.log("sum of value of a and b are : "+z);

function hoursToseconds(hours){
  return hours *= 3600;
}
var hours=24;
var seconds=hoursToseconds(hours);
console.log("24 hours is equal to = "+seconds);

function incrementbythree(num){
  return num + 3;
}
var num= 10;
var result=incrementbythree(num);
console.log("the result is "+result);
