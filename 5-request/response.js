function response(res)
{

   res.send = function(body)
   {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', body.length);
        res.end(body);
   }


   res.json = function()
   {


   }





   return res;
}


module.exports = response;
