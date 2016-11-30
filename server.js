var express = require('express');
var _ = require('underscore');
var router = express();
var MongoClient = require('mongodb').MongoClient;

var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://gopi:gopi@ds115918.mlab.com:15918/webdata';


router.set('port', (process.env.PORT || 3000));

 router.listen(router.get('port'), function () {
  console.log('Example app listening on port 3000!')
})

router.get('/',function (req,res) {
            res.sendFile(__dirname + '/index.html');
        });


module.exports = router;

router.get('/getData/:id',function (req,res) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            return console.dir(err);
        }
        db.collection('webdata', function(err, collection) {

             var x = req.params.id;
            collection.findOne({id:x}, function(err, item) {
                console.log(item)
                res.send(item);
            });
        });

    });

});
