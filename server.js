const express = require('express');
const app = express();

app.use("/drumKit", express.static(__dirname + '/drumKit'));
app.use("/lib", express.static(__dirname + '/lib'));

////////////////////////////////////////////////////////////

app.get('/', function (req,res){
    res.sendFile('index.html', {root: 'drumKit'});
});

////////////////////////////////////////////////////////////

app.use(function (req, res) { res.status(404).send('page inexistante'); })
app.listen(1234, function(){
    console.log('ping');
});

// http://localhost:1234/