const body = document.querySelector('body');
const btnhamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade')
btnhamburger.addEventListener('click', function(){
if(header.classList.contains('open')){
    header.classList.remove('open');
    body.classList.remove('noscroll')
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    })
}
else{

    header.classList.add('open');
    body.classList.add('noscroll')
    fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');


    });
}
});