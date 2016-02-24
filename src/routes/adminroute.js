var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var users = [
    {
        initial: 'd',
        name: 'dany',
        fullname: 'inasdom'
    },
    {
        initial: 'm',
        name: 'michael',
        fullname: 'jhsdsad'
    }
];
var router = function (nav) {
    
    adminRouter.route('/addUser')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
        
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('users');
                collection.insertMany(users, function (err, results) {
                    res.send(results);
                });
            });
            //res.send('inserting user');
        });
    
    return adminRouter;
};

module.exports = router;