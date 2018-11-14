# SIGNL4 Weather Alerts

## Retrieve weather information from the Web and send alerts to teams using SIGNL4.

A lot of cities offer snow clearing services. If there is snow the team goes out to make sure to clear the streets. Especially at night it is important to inform the teams immediately about snow warnings. How and when to expect snow is available on certain Web sites but how to notify the clearing stuff early enough? How to wake them up if necessary and let them sleep if not?

For the alerting part the app-based alerting service SIGNL4 does an excellent job. But how can you retrieve the information from the Web?

## Weather Alerts
We would like to send an alert to a SIGNL4 team when the temperature price is below a certain value. This is just an example and you can adapt it to other weather conditions as well. We use the API of Open Weather Map, a corresponding Google Apps Script and the alerting functionality of SIGNL4.

The basic idea is to monitor the weather information for a certain city on an hourly base. If the temperature falls below a certain value, we trigger a SIGNL4 alarm.

The corresponding interface URL of Open Weather Map is the following: http://api.openweathermap.org/data/2.5/weather?q=<City>&units=metric&appid=<app-id>. Please note, that you would need to get your APP ID from that site first.

Calling this URL in the browser returns a so-called JSON string containing the weather information. The documentation can be found here: https://openweathermap.org/current#current_JSON.

## The Code
Our Google Apps Script code at Google (https://scripts.google.com) might look like described in example on Github at https://github.com/signl4/signl4-weather-alerts.

The main() function of this script can be triggered by Google Apps Script every hour. Just click on the clock symbol in Google Apps Scripts and set up the desired interval. With each run, the script retrieves the current weather information and compares it with the limit as defined in the INT_LOW_TEMP constants. If the temperature is too low, the script sends a SIGNL4 alarm.

Thanks to Frank Gutacker for the code and for preparing this article.

About SIGNL4
SIGNL4 can notify via mobile push, text and voice calls. It tracks acknowledgements  and escalates automatically if required. Learn more about features of SIGNL4 at https://www.sgnl4.com.
