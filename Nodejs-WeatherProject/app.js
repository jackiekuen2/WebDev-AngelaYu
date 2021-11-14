const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// Root Route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body.cityName);

    const query = req.body.cityName // Name of the input
    const apiKey = "0bb9304054212f069baf6247b0454e03"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey

    https.get(url, function(response) {
    console.log(response.statusCode);

        // Access the data from response
        response.on("data", function(data){
            const weatherData = JSON.parse(data); //Parsing weather data
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const iconCode = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + iconCode +"@2x.png"
            
            res.write("<p>The weather is currently " + desc + "</p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degree Celcius.</h1>");
            res.write('<img src="' + imageURL + '">');
            res.send();
        })
    });
});

app.listen(port, function() {
    console.log("Server is running on port " + port);
});