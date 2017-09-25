var express = require('express');

var request = require('request');

var app = express();

var port = 8080;

app.use(express.static(`${__dirname}/public`));

app.get('/', function(request, response){
    res.sendFile(`${__dirname}/public/index.html`);
});

//proxy server
app.get('/api-event', function(req, res){
    var baseUrl = 'http://api.eventful.com/json/events/search';
    var url = req.url.replace(req.path, baseUrl);
    request(url ,function(err, body, response){
        if(err){
            console.log(err)
        }
        res.send(response);
    });
})

app.listen(port, function(){
    console.log('server is up');
})