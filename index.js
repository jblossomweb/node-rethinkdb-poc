var r = require("rethinkdb");
var config = require("./config");

r.connect({
  host: config.rethink.host,
  port: config.rethink.port
}, function(err, conn) {
  if (err) {
    throw err;
  }
  if(conn) {
    console.log('connected to rethinkdb at '+ config.rethink.host);

    var query = r.db('foo').table('posts');

    query.run(conn, function(err, cursor) {
      if (err) {
        throw err;
      }
      cursor.toArray(function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
      })
    });
    
  }
})