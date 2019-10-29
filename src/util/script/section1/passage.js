var fs = require("fs");

var baseDir = "data/source/";
var targetDir = "data/target/";
var paperIndex = 2;

fs.readFile(baseDir+'passage'+paperIndex+'.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(baseDir +"读取passage"+paperIndex+".txt成功");
    console.log(data.toString());
    var paragraphList = data.toString().split("\n");
    var result = [];
    for (var i = 0; i < paragraphList.length; i++) {
        var item = {
            paragraphIndex: i + 1,
            content: paragraphList[i]
        }
        result.push(item);
    }
    console.log("准备将数据写到"+targetDir + "passage" + paperIndex + ".json");
    fs.writeFile(targetDir + 'passage' + paperIndex + '.json', JSON.stringify(result), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入到文件" + targetDir + "passage" + paperIndex + ".json成功！");
    });
});
