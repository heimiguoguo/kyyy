var fs = require("fs");

var baseDir = "data/source/";
var targetDir = "data/target/";
var sourceFileBaseName = "paper";
var targetFileBaseName = "paper";
var paperIndex = 1;

fs.readFile(baseDir + sourceFileBaseName + paperIndex +'.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("读取" + baseDir + sourceFileBaseName + paperIndex +".txt成功");
    console.log(data.toString());
    var lineList = data.toString().split("\n");
    var paper = {};
    var paperName = lineList[0].trim();
    //计算questionList的开始行数
    var passageStartLineNum = lineList.length-20;
    var paragraphLines = lineList.slice(4, passageStartLineNum);
    var questionLines = lineList.slice(passageStartLineNum);
    // 处理passage
    var paragraphList = [];
    for (var i = 0; i < paragraphLines.length; i++) {
        var item = {
            paragraphIndex: i + 1,
            content: paragraphLines[i]
        }
        paragraphList.push(item);
    }
    // 处理题目
    var questionList = [];
    for (var i = 0; i < questionLines.length; i++) {
        var options = questionLines[i].split(/\[[A-D]\]/);
        var item = {
            questionIndex: i + 1,
            answers: {
                A: options[1].trim(),
                B: options[2].trim(),
                C: options[3].trim(),
                D: options[4].trim(),
            }
        }
        questionList.push(item);
    }
    var paper = {
        paperName: paperName,
        paragraphList: paragraphList,
        questionList: questionList
    };
    console.log("准备将数据写到" + targetDir + targetFileBaseName + paperIndex + ".json");
    fs.writeFile(targetDir + targetFileBaseName + paperIndex + '.json', JSON.stringify(paper), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入到文件" + targetDir + targetFileBaseName + paperIndex + ".json成功！");
    });
});
