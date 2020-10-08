
$(document).ready(function(){
  var value = $("#textarea1").val()
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2JhbGxlbWF0dCIsImEiOiJja2Z6aWtnNmEwZXFrMnVwaTdhbWt1eTBnIn0.W5EjGIiB0XoupWOHNrlowg';
  var map = new mapboxgl.Map({
  container: 'map', // 
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-97.733330, 30.266666], 
  zoom: 9 
  });

  map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  
    })
    
  
  );
  
     var API = "f89acb677bf55f31af77b1cbe2b56df8"
    $('.sidenav').sidenav();


  
    $('.modal').modal();
  
    $("#generate").click(generateJoke);
  

        var API = "f89acb677bf55f31af77b1cbe2b56df8"
      
        
        $("#search").on("click",function(event){
            event.preventDefault()
            $("div").removeClass("hide")
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
                    var newLine = $("<hr>")
                
                    var tempf = Math.floor((response.main.temp - 273.15) * 1.80 + 32);
                    temp.text(tempf + "\xb0F")
                    humidity.text("Humidity: " + response.main.humidity + "%")
                    wind.text("Wind Speed: " + response.wind.speed + "MPH")
                    today.text("Today's Weather")
                    $("#weather").append(today)
                    $("#weather").append(newLine)
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
                var queryUrl3 = "https://api.openbrewerydb.org/breweries?by_postal=" + zip
                $.ajax({
                    url: queryUrl3,
                    method: "GET"
                }).then(function(response2){
                    console.log(response2)
                    for (i = 0; i < response2.length; i++){
                    var name = $("<h5>")
                    var street = $("<p>")
                    var phone = $("<p>")
                    var website = $('<a>',{
                        text: 'Visit their website!',
                        href: response2[i].website_url,
                    }).appendTo("#brew");
                    $("a").addClass("text")
                    var line = $("<hr>")
                  
                    name.text(response2[i].name)
                    street.text(response2[i].street)
                    phone.text(response2[i].phone)
                    website.attr("href", response2[i].website_url)
                    $("#brew").append(name)
                    $("#brew").append(street)
                    $("#brew").append(phone)
                    $("#brew").append(website)
                    $("#brew").append(line)
                    
                  }
                 
                })
                
                $("#brew").empty()
               

                
        })
  
})

$('#manual-ajax').click(function(event) {
  event.preventDefault();
  this.blur(); // Manually remove focus from clicked link.
  $.get(this.href, function(html) {
    $(html).appendTo('body').modal();
  });
});


function generateJoke(){
    $.getJSON(
        "https://icanhazdadjoke.com/",
        function(data) {
          console.log("Cool, here's some joke data: ", data);
          var jokeText = JSON.stringify(data.joke)
          $(".modal-content").html("<h4> Dad Joke: </h4>" + jokeText);
          
        },
      );
  
    };
