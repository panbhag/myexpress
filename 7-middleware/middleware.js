

function middleware()
{
    var middleware = [];

    var currentMiddleware = 0;     //TODO: this should be an new variable for every request,check

    var run = function(req,res, pathHandler){
        currentMiddleware = -1;
        nextMiddleware();
    }

    var nextMiddleware = function()
    {
        currentMiddleware = currentMiddleware +1;

        var nextHandle = middleware[currentMiddleware];
        if(nextHandle)
        {
          nextHandle(req,res,nextMiddleware)
        }
        else
        {
          pathHandler(req,res);
        }
    }

    var use = function(handler)
     {

          middleware.push(handler)

     }


    return {use:use,run:run}




}



module.exports = middleware();
