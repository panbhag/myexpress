var http = require('http');
var url = require("url");
var request = require('./request.js');
var response = require('./response');
var routes = require('./routes')
function myExpress()
{


   
   
    var server = http.createServer(function(req, res) {

    request(req); response(res);
  
    var match = routes.match(req);
    
    if(match){
        req.params = match.params;
        match.handler(req,res)
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



