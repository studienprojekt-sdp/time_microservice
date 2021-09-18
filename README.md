# Microservice to return the current time :clock11:

using IP Geolocation Timezone API: https://ipgeolocation.io/
and Axios: https://axios-http.com/docs/intro

time is returned in ISO-8601 format

* if **no** parameter is passed local time based on the IP is returned
* if **timezone** parameter is passed in the form of a CLDR (https://cldr.unicode.org/) standardized timezone name, the current time in this timezone is returned

## How to use

#### Create the image
create with:   `docker build . -t <image_name>`

#### Start the container and let it run in the background
start with:  `docker run -dit <image_name>`

#### Enter the shell of the specified container to run the commands
exec with: `docker exec -it <container_id> bash`

#### Send a request for the current time (timezone is optional)
send request with: `node zeitservice <timezone>`
