function middleware() {
    var middleware = [];

    var currentMiddleware = 0;     //TODO: this should be an new variable for every request,check

    var run = function(req, res) {
        var next = createNext(req, res, middleware);
        next();
    }

    var createNext = function(req, res, middleware) {
        var currentMiddleware = -1;

        var next = function() {
            currentMiddleware = currentMiddleware + 1;
            var nextHandle = middleware[currentMiddleware];
            if (nextHandle) {
                nextHandle(req, res, next)
            }
            else {
                req.handler(req, res);
            }
        }

        return next
    }



    var use = function(handler) {

        middleware.push(handler)

    }


    return {use:use,run:run}


}


module.exports = middleware();
