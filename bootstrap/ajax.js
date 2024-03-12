$.ajax({
type: "GET",
url: "http://www.imdbapi.com/",
cache: false,
data: dataString,

success: function(html){
//$("#more").after(html);
alert("Success!");
}