var button = document.getElementById("btn");
button.addEventListener('click', showMessage);

function showMessage(){
    var msn = document.getElementById("message").value;
    alert("Hola " + msn);
}
