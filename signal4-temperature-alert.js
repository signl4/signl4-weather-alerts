

var INT_LOW_TEMP = 10; // Lower temperature limit
 
var STRING_APPID = "xyz"; // APP ID of your https://openweathermap.org/ account
var STRING_CITY = "Bangor"; // City name
var STRING_UNITS = "metric"; // Please choose "metric", or "imperial"
 
var STRING_TEAMCODE = "xxxxxxxx"; // SIGNL4 team code, which can be found here: https://account.signl4.com/manage
var STRING_API_URL_SIGNL4 = "https://connect.signl4.com/webhook/" + STRING_TEAMCODE;
var STRING_API_OWM = "http://api.openweathermap.org/data/2.5/weather?q=" + STRING_CITY + "&units=" + STRING_UNITS + "&appid=" + STRING_APPID;
 
function sendAlert(fTemperature, sMessage) {
    var oRequest = {
      "title" : "Low temperature in " + STRING_CITY,
      "temperature"          : fTemperature,
      "city" : STRING_CITY
   }
              var sRequest = JSON.stringify(oRequest);
    
    Logger.log(UrlFetchApp.fetch(STRING_API_URL_SIGNL4, {'contentType': 'application/json', 'method': 'POST', 'muteHttpExceptions': true, 'payload': "'" + sRequest + "'" }));
}
 
function processAnswer(sAnswer) {
              Logger.log(sAnswer);
  
    var oAnswer = JSON.parse(sAnswer);
    var fTemperature = parseFloat(oAnswer.main.temp);
    if (fTemperature < INT_LOW_TEMP) { 
                            sendAlert(fTemperature, sAnswer);
    }
}
 
function main() {
    var sAnswer = UrlFetchApp.fetch(STRING_API_OWM, {'muteHttpExceptions': true});
              
    processAnswer(sAnswer);
}
