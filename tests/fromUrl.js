// testURL('https://pbs.twimg.com/media/Cj-ffhPUkAET01m.jpg', done);

function testURL (url, callback) {

  var sizer = new Transformer(blogID, 'sizer');

  sizer.lookup(url, function (path, done){

    console.log('Transforming', path);

    fs.stat(path, function(err, stat){

      if (err) done(err);

      done(null, {size: stat.size});
    });
  }, callback);
}

function testURL (url, callback) {

  var sizer = new Transformer(blogID, 'sizer');

  sizer.lookup(url, function (path, done){

    console.log('Transforming', path);

    fs.stat(path, function(err, stat){

      if (err) done(err);

      done(null, {size: stat.size});
    });
  }, callback);
}