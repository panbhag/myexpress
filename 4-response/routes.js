function routes()
{
   var route_handlers = {};


   var match = function(req)
   {
       var handler = route_handlers[req.url];
       return handler;
   }

   var get = function(path,handler)
   {
       route_handlers[path] = handler;
   }

   return {get:get,match:match}
}


module.exports = routes();
