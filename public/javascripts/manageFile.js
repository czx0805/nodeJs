//加载文件模块
var fs = require('fs');

function FileManage(file) {
    this.fileName = file.name;
    this.path = file.path;
    this.data = file.data;
}

//同步读取文件
FileManage.prototype.getFileSync = function () {
    var jsonData = null;
    jsonData = JSON.parse(fs.readFileSync(this.path));
    return jsonData;
};

//异步读取文件
FileManage.prototype.getFileAsync = function (callback) {
    fs.readFile(this.path, {
        encoding: 'utf-8'
    }, function (err, data) {
        callback.execute(data);
    })
};

//文件写入
FileManage.prototype.setFile = function (data,callback) {
    fs.writeFile(this.path,data, function (err) {
        callback.execute(err);
    });
}

module.exports = FileManage;