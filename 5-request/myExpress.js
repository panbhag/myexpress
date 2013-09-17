var http = require('http');
var routes = require('./routes');
var response = require('./response.js');
var request = require('./request.js');


function myExpress()
{


   var server = http.createServer(function(req, res) {


    request(req);
    response(res);


    var pathHandler = routes.match(req);
    
    if(pathHandler){
       pathHandler(req,res)
    }
    else
    {
      res.writeHead(200);
      res.end('Route not found');

    }
    });


    



   
   var listen = function(port){
   
      server.listen(port);
      console.log("listening on port : " , port);
   
   }


return {listen:listen, get:routes.get}

}


module.exports = myExpress;
