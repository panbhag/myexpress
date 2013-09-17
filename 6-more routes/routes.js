var url = require('url');

function routes()
{
   var route_handlers = [];


   var match_path = function(route,path)
{
    //return true if(route.path == path); // return if exact match
    var pathArray = path.split("/")
    var routeArray = route.path.split("/");
    var match = true;
    var urlParams = {};

    for(var i=0; i < routeArray.length ; i++)
    {
        var r = routeArray[i];
        var p = pathArray[i];
        if(r[0] == ":"){  urlParams[r.substr(1)] = p }
        else if(r == "*" ){  break;  } //no need to match any further routes
        else if(r !== p ){ match = false; break  }

    }

    if(match)
    {
        return {params:urlParams,handler:route.handler}
    }
    else
    {
        return false
    }


}

   //returns {param,handler} or false
   var match = function(req)
   {
       var path = url.parse(req.url).pathname
       var result = false;
   for(var i = 0; i < route_handlers.length; i++)
   {
       var route = route_handlers[i];
       result = match_path(route,path) ;

       if(result != false){break;} //break on first matching route
   }

   return result;

   }


   var get = function(path,handler)
   {
       route_handlers.push({path:path,handler:handler});
   }

   return {get:get,match:match}
}


module.exports = routes();
