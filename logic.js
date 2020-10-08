
$(document).ready(function(){

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
  
    $("#textarea1").click(emptyLabel);

    function emptyLabel(){
      $('.label1').html('');
    }
    
    
        var API = "f89acb677bf55f31af77b1cbe2b56df8"
        
        $("#search").on("click",function(event){
            event.preventDefault()
            

            var zip = $("#textarea1").val()
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



