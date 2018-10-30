var btnStart = document.getElementById("start");

btnStart.addEventListener("click", function(e) {
  var movies = document.createElement("li"); // creo el elemento
  var itemList = document.createTextNode( // le doy contenido al elemento
    ["<li>'0': 'Inception'</li>",
    "<li>'1': 'The butterfly effect'</li>",
    "<li>'2': 'Eternal sunshine of the spotless mind'</li>",
    "<li>'3': 'Blue velvet'</li>",
    "<li>'4': 'Split'</li>"]
  );

  movies.appendChild(itemList);
  var list = document.getElementById("movie-list");
  list.appendChild(movies);
});



// Array con los nombres de la pelicula
// var movies = {
//   '0': 'Inception',
//   '1': 'The butterfly effect',
//   '2': 'Eternal sunshine of the spotless mind',
//   '3': 'Blue velvet',
//   '4': 'Split'
// };