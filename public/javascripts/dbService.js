//引入LeanCloud数据存储模块
var AV = require('leanengine');

function DBService(tableObj) {
    this.tableObj = tableObj;

}

DBService.prototype.queryData = function (queryObj, callback) {
    var _this = this;
    var query = new AV.Query(_this.tableObj);
    for(var item in queryObj){
        query.equalTo(item,queryObj[item]);
    }
    query.find({}).then(function (results) {
        callback.execute(results);
    }, function (err) {
        callback.execute(err);
    });
};

DBService.prototype.saveData = function (saveObj, callback) {
    var _this = this;
    var objTable = new _this.tableObj();
    for(var item in saveObj){
        objTable.set(item,saveObj[item]);
    }
    objTable.save(null).then(function(results){
        callback.execute(results);
    },function(){
        callback.execute(results);
    });
};

module.exports = DBService;
