/*var x=10;
var y=20;
function addition(a,b){
    x=20;
    y=30;
    var z=x+y;
    console.log(c);
}
addition(x,y);
*/
/*function addition(a,b){
    ++a;
    ++b;
    a++;
    b++;

    var z=a+b;
    console.log(z);
}
addition(0,0);
*/
/*function addition(a,b){
    var a=10;
    var b=20;
    var c=a+b;
    console.log("adiition of a+ b is " + c);
}
addition();
*/
/*function subtraction(a,b){
var x=10;
var y=50;
var c= a-b;
console.log("subtraction of above number is " + c);
}
subtraction(2,3);
*/
/*function multiplication(x,y){
    var a=2;
    var b=6;
    var c=x*y;
    console.log("multiplication of those numbers is:"+ c);
}
multiplication(1,2);
*/
/*function division(x,y){
    var a=2;
    var b=4;
    var c=x/y;
    console.log("division of this num:"+c);
}
division(9,3);
*/
/*function pre_increment_postincrement(x,y){
    ++x;
    ++y;
    x++;
    y++;
    var z= x+y;
    console.log("results of both increments :"+z);
} 
pre_increment_postincrement(2,2);
*/
/*function pre_decrement_post_decrement(x,y){
      --x;
      --y;
      x--;
      y--;
      var z=x+y;
      console.log("decrement values: " +z );
}
pre_decrement_post_decrement(8,8);
*/
/*function isPrime(n){
    if(n<=1){
        console.log("not a prime");
    }else if(n==2){
        console.log("prime");
    }
    else{
        console.log("undefined");
    }
}
isPrime(5);
*/
/*function isPrime(num){
    if(num<=1){
        return false;
    }
    if(num<=2){
        return true;
    }
    else if(num % 2 == 0 ){
        return false;
    }
    console.log("is a prime number:"+ num);
}
isPrime(17);
  */
 /*function addition(a,b){
    var x= 10;
    var y=20;
    var c=a+b;
    console.log("addition of two integers:"+c);
 }
 addition(2,3);
 */
/*function convert_into_seconds(a){
    var y=a*60;
    console.log("secs of the hours:"+ y);
}
convert_into_seconds(120);
*/
/*function increment(x){
    x++;
    var z=x;
    console.log("increment ofn the number is:"+ z);
}
increment(3);
*/
/*function calculateAge(age,year){
    if(typeof age !=="Number" || typeofyear !== "number"){
        console.log("please enter valid number for age and year.");
        return;
    }
    const birthyear= year - age;
    const birthDate=new Date(birthyear,16,2002,);
    const now=new Date();
    const milliseconds=now - birthDate;
    const seconds=Math.floor(milliseconds / 1000);
    const minutes =Math.floor(seconds / 60);
    const hours=Math.floor(minutes/60);
    const days=Math.floor(hours/24);
    return{
        days,
        hours : hours % 24,
        minutes:minutes%60,
        seconds:seconds%60
    }
}
calculateAge(25,2002);
*/
function getData(){
    var sharuk = document.getElementById("sharuk").value;
    var basha = document.getElementById("basha").value;
    var  mail=document.getElementById("mail").value;
    var PhoneNumber=document.getElementById("PhoneNumber").value;
    var Date=document.getElementById("Date").value;
    var pin=document.getElementById("pin").value;
    var country=document.getElementById("country");
    var state=document.getElementById("state");
    var dist=document.getElementById("Dist");
    console.log("FirstName= "+ sharuk );
    console.log("LastName= "+  basha );
    console.log("mail= "+ mail );
    console.log("PhoneNumber= "+ PhoneNumber);
    console.log("Date= "+ Date );
    console.log("pin="+ pin);
    console.log("country= "+ country );
    console.log("stateName= "+ state);
    console.log("DistName= "+ dist );
}
