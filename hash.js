var ensure = require('../ensure');
var callOnce = require('../callOnce');

var fs = require('fs');
var crypto = require('crypto');

module.exports = function (path, callback) {

  ensure(path, 'string')
    .and(callback, 'function');

  callback = callOnce(callback);

  var hash = crypto.createHash('sha1');
      hash.setEncoding('hex');

  var fd = fs.createReadStream(path);
      fd.pipe(hash);

  // we also want to copy the file to a tmp
  // Location so maybe merge the streams?

  fd.on('error', callback);

  fd.on('end', function() {
    hash.end();
    callback(null, hash.read());
  });
};