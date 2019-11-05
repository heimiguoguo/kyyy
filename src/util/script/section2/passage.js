var fs = require("fs");
var index = 4
var baseDir = `../../data/source/2017_1/section2/text${index}/`;
var targetDir = `../../data/target/2017_1/section2/text${index}/`;
var paperName = "2017年全国硕士研究生入学统一考试英语(一)";
fs.readFile(baseDir + 'passage.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("读取" + baseDir + "passage.txt成功");
    var paragraphList = data.toString().split("\r").map(item => item.trim());
    // console.log(paragraphList)
    var result = [];
    for(let index in paragraphList){
        result.push({
            index,
            content: paragraphList[index]
        })
    }
    // console.log(result)
    
    console.log("准备将数据写到" + targetDir + "passage.json");
    fs.writeFile(targetDir + 'passage.json', JSON.stringify(result), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入到文件" + targetDir + "passage.json成功！");
    });
});
