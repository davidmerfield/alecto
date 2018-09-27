
testPath('/input.txt', done);

function done (err, result){

  if (err) throw err;

  console.log(result);
}




function testPath (path, callback) {

  var lowercase = new Transformer(blogID, 'lowercase');

  var src = __dirname + path;
  var dest = localPath(blogID, path);

  // lowercase.flush(function(){

  //   console.log("Flushed lowercase...");

    cp(src, dest, function(err){

      if (err) throw err;

      lowercase.lookup(path, function (path, done){

        console.log('Transforming', path);

        fs.readFile(path, 'utf-8', function(err, contents){

          if (err) done(err);

          done(null, {
            contents: contents.toLowerCase(),
            size: contents.length
          });
        });
      }, callback);
    });
  // });
}