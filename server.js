const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use("/drumKit", express.static(__dirname + '/drumKit'));
app.use("/lib", express.static(__dirname + '/lib'));
app.use(bodyParser.urlencoded({
    extended: false
  }));

////////////////////////////////////////////////////////////

app.get('/', function (req,res){
    res.sendFile('index.html', {root: 'drumKit'});
});

app.get('/test', function (req,res){
    res.sendFile('index_test.html', {root: 'drumKit'});
});

app.get('/phone', function (req,res){
    res.sendFile('index.html', {root: 'phonetest'});
});

app.post('/', function(req, res){
	console.log(req.body);
});

////////////////////////////////////////////////////////////

app.use(function (req, res) { res.status(404).send('page inexistante'); })
app.listen(1234, function(){
    console.log('ping');
});

// http://localhost:1234/