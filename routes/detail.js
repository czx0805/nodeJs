var express = require('express');
var router = express.Router();

var AV = require('leanengine');

var DB = require('../public/javascripts/dbService');

var Article = AV.Object.extend('Article');

router.get("/", function (req, res) {
    console.info(req.query.title);
    var db = new DB(Article);

    function callback() {
        this.execute = function (dataList) {
            res.render('detail', {
                title: req.query.title,
                content: dataList[0].get('content')
            });
        }
    }

    db.queryData({idNum : req.query.title}, new callback());
});

module.exports = router;