var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/uploads/:image',function(req, res){

    try{
        var readstream = gfs.createReadStream({ filename: req.params.image});
        res.set('Content-Type', 'image/png');
        readstream.pipe(res);

    }
    catch (err) {
        log.error(err);
        return next(errors.create(404, "File not found."));
    }


});





module.exports = router;
