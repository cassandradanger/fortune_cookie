//Ajax
//REST - standardization of communication with server

//Get - pulls info from server
//Post - sends info to server
//Put - modifies existing file in server
//Delete - deletes file from server

//Connection between client and server

//Ajax - asynchronous javascript and xml

//Request -
//Response -

//
var fortuneCookies = null;

$(document).ready(function(){
    $('#button').on('click',function(){

        $('.here').empty();

        $.get('data.json', function(data) {
            fortuneCookies = data;
            var i = Math.floor((Math.random() * fortuneCookies.fortunes.length-1) + 1);
            var message = fortuneCookies.fortunes[i].message;
            console.log("It worked");
            $(".here").append("<div><p>" + message + "</p></div>").hide().fadeIn("slow");
        });
    });
});