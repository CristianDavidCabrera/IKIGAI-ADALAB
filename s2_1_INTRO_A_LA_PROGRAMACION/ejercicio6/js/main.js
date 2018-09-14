/**
 *
 * # Calulator: hours alive.
 *
 *  Exercise to practice and learn algoritms, functions and some methods to manipulate strings and dates.
 *  Calculate the number of hours taking into account the days since the date of birth to the current date.
 *
 *  ### Month table.
 *
 *  We must consider the table of months / days to calculate exactly the hours.
 *
 *  0 January, 			31 days
 *  1 February, 		28/29 days
 *  2 March, 			31 days
 *  3 April,			30 days
 *  4 May,				31 days
 *  5 June,				30 days
 *  6 July,				31 days
 *  7 Agugust,			31 days
 *  8 September,		30 days
 *  9 October,			31 days
 *  10 November,		30 days
 *  11 December,		31 days
 *
 * ### Variables
 *
 * @param bornDate  intial date, his format is aaaa-mm-dd hh:mm:ss
 * @param actualDate  intial date, his format is aaaa-mm-dd hh:mm:ss
 * @param date1 auxiliary variable to collect the date entered by the user.
 * @param date2 auxiliary variable to collect the date entered by the user.
 *
 * @param alive auxiliary variable to get time in milliseconds.
 * @param aliveHours auxiliary variable to get time in hours.
 *
 * */

function timeAlive() {
  var bornDate = document.getElementById("date1").value;
  var actualDate = document.getElementById("date2").value;

  var date1 = new Date(
    bornDate.substring(0, 4),
    bornDate.substring(5, 7) - 1,
    bornDate.substring(8, 10),
    bornDate.substring(11, 13),
    bornDate.substring(14, 16),
    bornDate.substring(17, 18)
  );
  var date2 = new Date(
    actualDate.substring(0, 4),
    actualDate.substring(5, 7) - 1,
    actualDate.substring(8, 10),
    actualDate.substring(11, 13),
    actualDate.substring(14, 16),
    actualDate.substring(17, 18)
  );

  var alive = date2.getTime() - date1.getTime();
  var aliveHours = Math.round(alive / (1000 * 60 * 60));
  alert("Las horas vividas: " + aliveHours);
}
