var url = require("url");

function routes()
{
   var route_handlers = {};


   var match = function(req)
   {
       var handler = route_handlers[url.parse(req.url).pathname];
       return handler;
   }

   var get = function(path,handler)
   {
       route_handlers[path] = handler;
   }

   return {get:get,match:match}
}


module.exports = routes();
