const axios = require('axios'); // using axios to handle the http request
let requestURL;
let localTime = true;

// the process.argv[] array saves the parameters, if [2] is null, we return the time at the current ip address
// if [2] is not null we return the time for the specified timezone
if (process.argv[2]  != null) {
    requestURL = "http://worldtimeapi.org/api/timezone/" + process.argv[2];
    localTime = false;
} else {
    requestURL = "http://worldtimeapi.org/api/ip";
}

var config = {
  method: 'get',
  url: requestURL,
  headers: {}
};

axios(config)
.then(function (response) {
  console.log(response.data.datetime);
})
.catch(function (error) {
  if (localTime) {
      console.log(new Date());
  }
  else if (error.response) {
      console.log("Error occurred! Reason: " + error.response.data.error);
  }
  else {
    console.log("Unknown error occurred!")
  }
});



