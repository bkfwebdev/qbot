console.log("qbot is the shiznit");
var tweet = {
    status:'qbot is the shiznit,powered by node.js #bkfwebdev'
};
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
function tweeted(err, data, response){
    if (err){console.log('something went wrong son!');
            console.log(err);
            console.log(data);}
    else{
        console.log('you got this my ninja');
    }
}
T.post('statuses/update',tweet , tweeted);
