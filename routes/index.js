var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.consumerKey,//your application consumer key
      process.env.applicationSecret,//your application secret
      '1.0A',
      null,
      'HMAC-SHA1'
    );

  oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.userToken, //test user token 
      process.env.userSecret, //test user secret             
      function (e, data){
        if (e) console.error(e);
        res.send(data);     
      });

});

module.exports = router;
