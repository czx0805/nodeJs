var express = require('express');
var router = express.Router();

var AV = require('leanengine');

var DB = require('../public/javascripts/dbService');

var Article = AV.Object.extend('Article');

router.get("/", function (req, res) {
    var db = new DB(Article);

    function callback() {
        this.execute = function (dataList) {
            res.render('blog', {
                title: 'blog',
                data: dataList
            });
        }
    }
    
    db.queryData({}, new callback());
});

module.exports = router;