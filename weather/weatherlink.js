/* let unix_timestamp = 1558729481
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);
console.log(Date.now() +" Timestamp");
console.log(Date() + "Full Date");
let date1 = new Date();
let seconds1 = date1.getSeconds();
console.log(seconds1 + " seconds");
if(seconds1 <= 300){
    var sec = seconds1;
}

console.log(sec +" seconds");
let contenido =  document.getElementById('weather');

let url = `https://api.weatherlink.com/v2/stations?api-key=987654321&t=${Date.now()}&api-signature=9b6a15f40d78b309a10b8b5a70ce5de4a3993ac2309795b9f90c9f93d5c31f20`

console.log("Website Link: " + url);

function clima(){
    fetch('url')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
}

console.log(clima()); */

jQuery(document).ready(function($) {
    $.ajax({
       url: "https://api.aerisapi.com/observations/seattle,wa?client_id=CLIENT_ID&client_secret=CLIENT_SECRET"
    })
    .done(function(json) {
          if (json.success == true) {
             var ob = json.response.ob;
             $('#js').html('The current weather in Seattle is ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '&deg;');
          }
          else {
             alert('An error occurred: ' + json.error.description);
          }
      });
 });