Microservice to return the current time

using World Time API: https://worldtimeapi.org
and Axios: https://axios-http.com/docs/intro

time is returned in ISO-8601 format

if no parameter is passed local time based on the IP is returned
if timezone parameter is passed in the form of a CLDR (https://cldr.unicode.org/) standardized timezone name (all valid names can also be found here: https://worldtimeapi.org/api/timezone), the current time in this timezone is returned

create docker image with:   docker build . -t IMAGENAME

run docker container with:  docker run IMAGENAME PARAMETER

timezones can be passed as PARAMETER
