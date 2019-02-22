$("#testContent").on("click", function () {
    var txtIp = '.'+$('#xssip').val();

    var sanitizedInput = $.parseHTML(txtIp);

    $(sanitizedInput[0].textContent).hide();
});

var apiKey ='6ed74ba84beae30770b8b5ddeb1a7837',
    baseApiUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=Chennai, TamilNadu&appid=';

$(".getWeatherData").on("click", loadWeatherData(x=>{
    $(".results").html(x);
}));

function loadWeatherData(callback){
    var weatherUrl = baseApiUrl+apiKey;
    $.ajax({url: weatherUrl, success: function(result){
            // $(".results").html(result);
            callback(result);
    }});
}