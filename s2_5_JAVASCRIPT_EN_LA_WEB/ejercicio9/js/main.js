var hide = document.querySelector('.main');
var  option = prompt('Chosse one style box. 1:red-box 2:blue-box');

if (option == 1){
    hide.classList.toggle('box')
}else if (option == 2){
    hide.classList.toggle('box-2');
} else {
    hide.classList.toggle('active');
    alert("Nothing appears");
}


