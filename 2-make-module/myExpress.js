var http = require('http');

function myExpress()
{

   var server = http.createServer(function(req, res) {
       var message = 'Hello Http from module'
       res.setHeader('Content-Type', 'text/plain');
       res.setHeader('Content-Length', message.length);
       res.writeHead(200);
       res.end(message);
    });

   
   var listen = function(port){
   
      server.listen(port);
      console.log("listening on port : " , port);
   
   }


return {listen:listen}

}


module.exports = myExpress;
