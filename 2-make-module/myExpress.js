var http = require('http');

function myExpress()
{

   var server = http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('Hello Http from module');
    });

   
   var listen = function(port){
   
      server.listen(port);
      console.log("listening on port : " , port);
   
   }


return {listen:listen}

}


module.exports = myExpress;
