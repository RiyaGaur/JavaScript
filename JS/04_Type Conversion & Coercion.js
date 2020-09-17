// Type Conversion 

let myvar = 34;
console.log(myvar , typeof myvar);
myvar = String(34);
console.log(myvar , typeof myvar);

let bool = true;
console.log(bool , typeof bool);
bool = String(bool);
console.log(bool , typeof bool);

let date = new Date();
console.log(date, typeof date);
date = String(date);
console.log(date, typeof date);

let arr = [1,2,3,4,5];
console.log(arr, typeof arr , arr.length);
arr = String(arr);
console.log(arr, typeof arr , arr.length);

let i = 8;
console.log("Number:" + i);
console.log("String:" + i.toString());

let str = "3434";
console.log(str, typeof str);
str = Number(str);
console.log(str, typeof str);

let str1 = Number("343d4");
console.log(str1, typeof str1);
let str2 = Number(true);
console.log(str2, typeof str2);
let str3 = Number([1,2,3,4,5]);
console.log(str3, typeof str3);

let num = '34';
console.log(num, typeof num);
num = parseInt('34');
console.log(num, typeof num);

let num1 = '34.257';
console.log(num1, typeof num1);
num1 = Number('34.257');
console.log(num1, typeof num1);
num1 = parseInt('34.257')
console.log(num1, typeof num1);
num1 = parseFloat('34.257');
console.log(num1, typeof num1);
console.log(num1.toFixed(5), typeof num1);








// Type Coercion

let s1 = "698";
let n1 = 34;
console.log(s1+n1);
console.log(Number(s1)+n1);