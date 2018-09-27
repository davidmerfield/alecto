describe("transformer", function(){

  var Transformer = require('../index');
  var fs = require('fs-extra');
  var uuid = require('uuid/v4');
  
  // This function looks to see if there is any information
  // about the file stored. If not, then it invokes middleware
  // function with a path to a temp version of the file.
  // Once the middleware is complete, it calls the done and the
  // info is now stored...


  it("transforms a file", function(done){
    
    var transform = new Transformer('collection:' + uuid(), read);
    var path = __dirname + '/data/input.txt';
    var content = 'Hello, World!';

    function read (tmpPath, callback) {
      fs.readFile(tmpPath, 'utf-8', function(err, res){
        console.log(res);
        callback(err, res);
      });
    }

    fs.outputFileSync(path, content, 'utf-8');

    transform(path, function(err, result){

      expect(err).toEqual(null);
      expect(result).toEqual(content);

      done();
    });
  });


});

