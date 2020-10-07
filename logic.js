$(document).ready(function(){
       var API = "f89acb677bf55f31af77b1cbe2b56df8"
       $('.sidenav').sidenav();
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