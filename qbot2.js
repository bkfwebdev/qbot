var request = require("request");
var quoteString = "";
request('http://quotes.stormconsultancy.co.uk/random.json', function(error, response, data) {
   console.log(data);
    console.log(typeof(data));
    var quoteObject = JSON.parse(data);
    quoteTweet = quoteObject.quote + " - " + quoteObject.author
    console.log(quoteTweet);
});