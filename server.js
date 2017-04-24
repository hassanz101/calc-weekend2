var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){ //for this file to be a server we need it to listen
  console.log('listening on port 3000');
});

// get route to serv back our index.html
app.get('/', function (req, res){
console.log('in get route');
res.sendFile(path.resolve('public/views/index.html'));
});

//calculator route
app.post('/calculator', function(req, res){
  //req.body.type will refer to the number type of index.html
  switch(req.body.type){
    //req.body.x (x * y)=
    //req.body.x (x / y)=
    //req.body.x (x + y)=
    //req.body.x (x - y)=
    case '*':
      var answer = Number(req.body.x) * Number(req.body.y);
      break;
    case '/':
      answer = Number(req.body.x) / Number(req.body.y);
      break;
    case '+':
      answer = Number(req.body.x) + Number(req.body.y);
      break;
    case '-':
      answer = Number(req.body.x) - Number(req.body.y);
      break;
    default:
      answer = 'cool';


  }//end switch

  //put answer in object
  var endAnswer = {
    number: answer
  }; //end endAnswer
  res.send(endAnswer);
}); //end calculator route
