
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
