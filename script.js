const buttonYes = document.querySelector('.yes');
const buttonNo  = document.querySelector('.No');

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

buttonNo.addEventListener('click',function(){
    buttonYesFontSize = buttonYesFontSize +0.4;
    buttonYes.style.fontSize = buttonYesFontSize +'em';
    buttonNoFontSize = buttonNoFontSize -0.2;
    buttonNo.style.fontSize = buttonNoFontSize +'em';
})
buttonYes.addEventListener('click',function(){
    location.href = './page2.html';
})