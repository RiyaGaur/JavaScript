/*
element selectors:
1. Single element selector
2. Multi element selector

*/

// 1. Single element selector
let element = document.getElementById('myfirst');
//element = element.className;
//element = element.childNodes;
//element = element.parentNode;
console.log(element);
element.style.color = 'red';
element.innerText = 'She is a good girl';
element.innerHTML = '<b>She is a good girl</b>';
console.log(element.innerText);


let sel = document.querySelector('#myfirst');
console.log(sel);
sel = document.querySelector('.child');
console.log(sel);
sel = document.querySelector('div');
sel.style.color = 'green';
console.log(sel);

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
console.log(elems)
elems = document.getElementsByClassName('container');
console.log(elems)
elems = document.getElementsByTagName('div');
console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element); 
}
Array.from(elems).forEach(element => {
    console.log(element);
    //element.style.color = 'blue'; 
});
console.log(elems[0].getElementsByClassName('child'))
