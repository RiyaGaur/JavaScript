let btn = document.getElementById('btn');
//btn.addEventListener('click', func1);

//function func1(e) {
//    console.log("Thanks", e);
//    e.preventDefault();
//}

btn.addEventListener('dblclick', func2);

function func2(e) {
    console.log("Thanks its a double click", e);
    e.preventDefault();
}

btn.addEventListener('mousedown', func3);

function func3(e) {
    console.log("Thanks its a mouse down ", e);
    e.preventDefault();
}

document.querySelector('.no').addEventListener('mouseenter', function(){


    console.log('You entered no')
})

document.querySelector('.no').addEventListener('mouseleave', function(){
    console.log('You exited no')
})

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})
