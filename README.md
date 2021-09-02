Microservice to return time

using World Time API: https://worldtimeapi.org
and Axios: https://axios-http.com/docs/intro

time is returned in ISO-8601 format

if no parameter is passed local time based on the IP is returned
if timezone parameter is passed in the form of a CLDR (https://cldr.unicode.org/) standardized timezone name, the current time in this timezone is returned
