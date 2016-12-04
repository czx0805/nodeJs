var express = require('express');
var router = express.Router();

var AV = require('leanengine');

var DB = require('../public/javascripts/dbService');

var Article = AV.Object.extend('Article');

router.get("/", function (req, res) {
    res.render('edit', {
        title: 'edit'
    });
});

router.post("/", function (req, res) {
    var htmlStr = req.body.data;
    var title = req.body.title;
    var intro = req.body.intro;
    var db = new DB(Article);
    var randomNum = parseInt(Math.random()*5,10);
    function callback() {
        this.execute = function (result) {
            res.redirect('/blog')
        }
    }

    db.saveData({
        title: title,
        introduce: intro,
        content : htmlStr,
        imgSrc: 'images/img_0'+ randomNum +'.jpg'
    }, new callback());
});

module.exports = router;