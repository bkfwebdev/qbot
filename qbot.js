console.log("qbot is the shiznit");
var request = require("request");
var quoteString = "";
var tweet = {};
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
function tweeted(err, data, response){
    if (err){console.log('something went wrong son!');
            console.log(err);
            console.log(data);
            }
    else{
        console.log('you got this my ninja');
    }
}
request('http://quotes.stormconsultancy.co.uk/random.json', function(error, response, data) {
    var quoteObject = JSON.parse(data);
    quoteString = quoteObject.quote 
   tweet.status = quoteString
   T.post('statuses/update',tweet , tweeted);
});