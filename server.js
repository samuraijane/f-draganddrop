var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('app'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/heartbeat', function(req, res) {
  res.json({
    is: 'working'
  });
});

app.listen(PORT, function() {
  console.log('is listening');
});
