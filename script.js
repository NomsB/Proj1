var city = "Potchefstroom";

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=5dc599d7ddfe625ad2ff297c597b99b5",function(data)
{
    console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var name = data.weather[0].main;
    
    $('.icon').attr('src',icon);
    $('.weather').append(name);
    $('.temp').append(temp);
})