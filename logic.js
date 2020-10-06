
$(document).ready(function(){
 
        var API = "f89acb677bf55f31af77b1cbe2b56df8"
      
        
        $("#search").on("click",function(event){
            event.preventDefault()
            var zip = $("#textarea1").val()
            var queryUrl = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=" + API
            console.log(zip)
            console.log("works")
            $.ajax({
                url: queryUrl,
                method: "GET"
            }).then(function(response){
                        console.log(response)
                    var temp = $("<p>").css("text-align", "center")
                    var humidity = $("<p>").css("text-align", "center")
                    var wind = $("<p>").css("text-align", "center")
                    var uv = $("<p>") .css("text-align", "center")
                    var today = $("<h3>").css("text-align", "center")
                
                    var tempf = Math.floor((response.main.temp - 273.15) * 1.80 + 32);
                    temp.text(tempf + "\xb0F")
                    humidity.text("Humidity: " + response.main.humidity + "%")
                    wind.text("Wind Speed: " + response.wind.speed + "MPH")
                    today.text("Today's Weather")
                    $("#weather").append(today)
                    $("#weather").append(temp)
                    $("#weather").append(wind)
                    $("#weather").append(humidity)
                    var lat = (response.coord.lat)
                    var long = (response.coord.lon)
                    var queryUrl2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=" + API
                $.ajax({
                    url: queryUrl2,
                    method: "GET"
                    }).then(function (response1) {
                        console.log(response1)
                        uv.text("UV Index: " + response1.value)
                        $("#weather").append(uv)
                    })
            })
               

        })
    







})


  $("#generate").click(generateJoke);

function generateJoke(){
    $.getJSON(
        "https://icanhazdadjoke.com/",
        function(data) {
          console.log("Cool, here's some joke data: ", data);
          alert (data.joke);
        },
      );
  
    };

