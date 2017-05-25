console.log("qbot is the shiznit");
var request = require("request");
var quoteString = "";
var tweet = {};
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

setInterval(bongBong, 60000);

function bongBong (){
function tweeted(err, data, response){
    if (err){console.log('something went wrong son!');
            console.log(err);
            console.log(data);
            }
    else{
        console.log('you got this my ninja');
    }
}
request('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', function(error, response, data) {
    var quoteObject = JSON.parse(data);
    quoteString = quoteObject.quoteText; 
    tweet.status = quoteString
    T.post('statuses/update',tweet , tweeted);
    console.log(quoteString)
});
}