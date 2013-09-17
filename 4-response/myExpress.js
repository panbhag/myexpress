var http = require('http');
var url = require('url');
var routes = require('./routes');

var response = require('./response.js');


function myExpress()
{


   var server = http.createServer(function(req, res) {

       response(res);

    var pathHandler = routes.match(req);
    
    if(pathHandler){

        pathHandler(req,res)
    }
    else
    {
      res.send('Route not found');

    }
    });



   
   var listen = function(port){
   
      server.listen(port);
      console.log("listening on port : " , port);
   
   }


return {listen:listen, get:routes.get}

}


module.exports = myExpress;
