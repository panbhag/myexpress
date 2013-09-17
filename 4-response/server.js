var myExpress = require('./myExpress.js');


var app = myExpress();


app.get("/morning",function(req,res)
{
      res.send('Good morning');
});

app.get("/night",function(req,res)
{
      res.send('Good night');

});


app.get("/go_night",function(req,res)
{
      res.redirect('/night');

});

app.get("/json_night",function(req,res)
{
      res.json({message:"Good Night"});

});

app.listen(3000);


