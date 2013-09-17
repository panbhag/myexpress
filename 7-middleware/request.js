var qs = require('qs');
var url = require('url');

function request(req)
{

   req.params = qs.parse(url.parse(req.url).query);  //url.parse(self.req.url,true).query


}


module.exports = request;
