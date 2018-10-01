var chooseCity = prompt(
  "Introduce a number to choose a city: 1-Londres, 2-Madrid, 3-Paris"
);
var nameCity;

function changePhoto(nameCity) {
  for (i = 1; i < 4; i++) {
    var photoCity = document.getElementById('img-'+i);
    photoCity.src = "image/" + nameCity + "-" + i + ".jpg";
  }
}

if (chooseCity == 1) {
  nameCity = "londres";
  changePhoto(nameCity);
} else if (chooseCity == 2) {
  nameCity = "madrid";
  changePhoto(nameCity);
} else if (chooseCity == 3) {
  nameCity = "paris";
  changePhoto(nameCity);
} else {
  alert("Error. You can only choose an option from 1 to 3.");
}
