var button = document.getElementById("btn");
button.addEventListener('click', changeMessage);

function changeMessage(){
    document.getElementById("parrafo").innerHTML = "Hello";
}
