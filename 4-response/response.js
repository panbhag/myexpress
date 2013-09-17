function response(res)
{

   res.send = function(body)
   {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', body.length);
        res.writeHead(200);
        res.end(body);
   }


   res.json = function(body)
   {    body = JSON.stringify(body);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Length', body.length);
        res.writeHead(200);
        res.end(body);
   }

   res.redirect = function(url)
   {

        res.setHeader('Location', url);
        res.writeHead(301)
        res.end();

   }





   return res;
}


module.exports = response;
