$(document).ready(function(){
  var temp=0;
  
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
  
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;
   var url = "https://fcc-weather-api.glitch.me//api/current?lat="+latitude+"&lon="+longitude;
   $.getJSON(url, function(a){
            $("#city").html(a.name);
            $("#temp").html(a.main.temp +" C");
            temp = a.main.temp;
            $("#situation").html(a.weather[0].main);
            $("#img").html("<img src="+a.weather[0].icon+" >");
     
          
   });    
    });
}
  else {
    $("#content").html("Location is not obtained. please turn on GPS and refresh the page.");
  }
  
  $("#C").addClass("disabled");
                
  $("#F").on("click", function(){
    temp = (9/5)*temp + 32;
    temp = temp.toPrecision(3);
    $("#temp").html(temp+" F");
    $("#F").addClass("disabled");
    $("#C").removeClass("disabled");
  });
  
  $("#C").on("click", function(){
    temp = (5/9)*(temp - 32);
    temp = temp.toPrecision(3);
    $("#temp").html(temp+" C");
    $("#F").removeClass("disabled");
    $("#C").addClass("disabled");
  });
  
   });