var str1="bged fgbg hbgce fgbg fgbg LMNO ABCD hbgce";
var count=0;
for(var i=0; i<str1.length;i++){
if(str1[i]==='b'){
count++;
}
}
console.log(count);


var str2="helloCodeBegun";
str2=str2.replace(/hello/ ,"hello ");
str2=str2.replace(/Code/,"Code ");
str2=str2.replace(/Begun/,"Begun ");
console.log(str2);



var arr=[];
console.log(arr.length);

var arr=[1,2,3,4,5,6,7,8];
for(var i=0;i<arr.length;i++){
    console.log(" Index: " +i+",length: ",arr.length +"," );
}

var arr=[10,20,30];
arr.shift();
console.log(arr);
 
var arr=[20,30];
arr.unshift(10);
console.log(arr);

var arr=[56,78,95];
arr.pop();
console.log(arr);

var arr=[95,86,62];
arr.push("shaik");
console.log(arr);

var arr=["sharuk","basha"];
arr=["shaik",...arr];
console.log(arr);

var arr=[2,3];
arr=[1,...arr];
console.log(arr);

var arr=[2,3,4,5];
arr=[1].concat(arr);
console.log(arr);

var arr=["shaik","sharuk","basha"];
arr=arr.slice(0,-1);
console.log(arr);

var arr=["shaik","sharuk","basha"];
arr.length=arr.length-1;
console.log(arr);

var arr=["shaik","sharuk"];
arr=arr.slice(1);
console.log(arr);

var s=[1,2,3];
var a=[4,5,6];
var z=s.concat(a);
console.log(z);

var a=[1,2,3,4,5];
 var s=a.splice(1,0,5);
console.log(a);

var s1=[5,6,7,8,9];
var s2=s1.splice(0,0,4);
console.log(s1);

var a=[];
for(var i=0;i<=101;i++){
    a.push(i);
}
console.log(a);

var a=[1,2,3,3,4,5,6];
var b=a.splice(3,0,90);
console.log(a);

var a=[];
for(var i=0;i<=100;i++){
    if(i%2==0){
        a.push(i);
    }
    console.log(a);
}

var a=[];
for(var i=0;i<=100;i++){
    if(i%2!==0){
        a.push(i);
    }
    console.log(a);
}

var a=[];
for(var i=10;i<=100;i++){
    if(i%10==0)
    {
        a.push(i);
    }
    console.log(a);
}


function Sum(a,b){
    return a+b;
}
console.log(Sum(2,6));


function addition(a,b){
    var z=a+b;
    console.log(z);
}
addition(25,25);


function mintosec(mintues){
    return mintues*60;
}
console.log(mintosec(5));


var arr=["shaik","sharuk","basha"];
 var a=arr.slice(2);
console.log(a);

var a=[1,2,3,4,5];
var b=a.shift(2);
console.log(b);

var arr=[1,2,[3,4,[5,6]]];
var a=arr.flat();
console.log(a);

var arr=[1,2,[3,4,[4,5,[6,7,[8,9]]]]];
var a=arr.flat(4);
console.log(a);

var a=["apple","banana","gauva"];
delete a[1];
console.log(a);

var a=["banana","apple","grape",];
a.copyWithin(1,0,2);
console.log(a);

var a=[1,2,3,4,5,6];
a.copyWithin(5,4,5);
console.log(a);

var a=["shaik","sharuk"];
var b=a.indexOf("sharuk");
console.log(b);

var s1=["first second third"];
var s2=s1.lastIndexOf("third");
console.log(s2);

var q=[1,2,3,4];
var w=q.includes(2);
console.log(w);

var a=[1,2,3,4,5,5,6,7];
var b=a.filter(a=> a>2);
console.log(b);

function increment(a){
    return a+1;
}
var result=increment(2);
console.log(result);


function year(ageinyears){
    return ageinyears*365;
}
var age=22;
var agedays= year(age);
console.log(agedays);

function increment(a){
    return a+1;
}
var result=increment(1);
console.log(result);

function a(a){
    return a++;
}
var result=increment(100);
console.log(result);

function  ageinyears(){
    return ageinyears*365;
}
var age=20;
var agedays=year(agedays);
console.log(agedays);

function calculatePower(voltage,current){
    return volatge*current;
}
var volatge=10;
var current=5;
var power=calculatePower(volatge,current);
console.log("power: ",power,"wats");

function ageIndays(ageInyears){
    return ageInyears*365;
}
var age=20;
var agedaysResult=ageIndays(age);
console.log(agedaysResult);

function ageIndays(ageInyears){
    return ageInyears*365;
}
var age=22;
var ageIndaysResults=ageIndays(age);
console.log(ageIndaysResults);

function calculatePower(_voltage,_current){
    return volatge*current;
}
var volatge=30;
var current=10;
var power=calculatePower(volatge,current);
console.log("power:",power,"watts");

function givenSomething(a){
    return "something "+a;
}
console.log(givenSomething("special"));

function integers(a,b){
    return a===10 || b===10 || (a+b===10);
}
var a=6;
var b=4;
var results=integers(a,b);
console.log(results);

function makesTen(a,b){
    return a===10 || b===10 || (a+b==10);
}
console.log(makesTen(7,4));

function string(a,b){
    return a.length===b.length;
}
var a="shaik";
var b="shaik";
var c=string(a,b);
console.log(c);

function string(c,d){
    return c.length===d.length;
}
console.log(string("shaik","sharuk"));

var greetings=name=>`Hello,${name}!`;
console.log(greetings("sharuk"));

var greetings=name=>`Hello,${name}!`
console.log(greetings("Basha"));

var a=name =>"oyeee!";
console.log(a);

var formatphonenumebrs=numbers=>{
    if(numbers.length !==10){
        return "Array must contain exactly 10 numbers.";
    }
    return`(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`;
};
console.log(formatphonenumebrs([5,5,5,5,5,5,5,5,5,5]));
console.log(formatphonenumebrs([1,2,3,4,5,6,7,8,9,0]));


var ascendingOrder=numbers=>numbers.sort((a,b)=>a.length-b.length);
console.log(ascendingOrder(["a","ccc","bb","dddd"]));

document.onkeydown=function(event){
    console.log(`key pressed: ${event.key}`);
}
