/**
 * Created by Jon on 16/12/12.
 */
var express = require('express');
var router = express.Router();

var AV = require('leanengine');

var DB = require('../public/javascripts/dbService');

var Users = AV.Object.extend('Users');

router.get("/", function (req, res) {
    res.render('login', {
    });
});
router.post("/", function (req, res) {
    var userName = req.body.username;
    var passWord = req.body.password;
    var db = new DB(Users);
    function callback() {
        this.execute = function (result) {
            if(result.length > 0){
                req.session.user = userName;
                res.send(true);
            }else{
                res.send(false);
            }
        }
    }
    console.info(userName);
    db.queryData({
        userName: userName,
        password: passWord
    }, new callback());
});

module.exports = router;