const axios = require('axios'); // using axios to handle the http request
let requestURL;
let localTime = true;

var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;
  console.log("Request time: " + timeDiff + "s");
}

start();

// testing123...

// the process.argv[] array saves the parameters, if [2] is null, we return the time at the current ip address
// if [2] is not null we return the time for the specified timezone
if (process.argv[2]  != null) {
    requestURL = "https://api.ipgeolocation.io/timezone?apiKey=59149b3287fd4d55b0d992b9cf2924ea&tz=" + process.argv[2];
    localTime = false;
} else {
    requestURL = "https://api.ipgeolocation.io/timezone?apiKey=59149b3287fd4d55b0d992b9cf2924ea";
}

var config = {
  method: 'get',
  url: requestURL,
  headers: {}
};

axios(config)
.then(function (response) {
  console.log(response.data.date_time_ymd);
  end();
})
.catch(function (error) {
  if (localTime) {
      console.log(new Date());
  }
  else if (error.response) {
      console.log("Error occurred! Reason: " + error.response.data.message);
  }
  else {
    console.log("Unknown error occurred!")
  }
});