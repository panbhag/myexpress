var myExpress = require('./myExpress.js');


var app = myExpress();


app.get("/",function(req,res)
{
      res.send('Good morning');

}
);


app.get("/morning",function(req,res)
{
      console.log(req.params);
      res.send('Good morning ' + req.params["name"]);

}
);

app.get("/greet",function(req,res)
{
      console.log(req.params);
      res.send( req.params["greeting"] + ' ' + req.params["name"]);

}
);

app.listen(3000);


