var fs = require("fs");
var baseDir = "../../data/source/2017_1/section2/text1/";
var targetDir = "../../data/target/2017_1/section2/text1/";
var paperName = "2017年全国硕士研究生入学统一考试英语(一)";
fs.readFile(baseDir + 'answer.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("读取" + baseDir + "answer.txt成功");
    var answerList = data.toString().split("\r");
    console.log(answerList)
    // var questionList = [];
    // for (var i = 0; i < answerList.length; i++) {
    //     var options = answerList[i].split(/\[[A-D]\]/);
    //     var item = {
    //         questionIndex: i + 1,
    //         answers: {
    //             A: options[1].trim(),
    //             B: options[2].trim(),
    //             C: options[3].trim(),
    //             D: options[4].trim(),
    //         }
    //     }
    //     questionList.push(item);
    // }
    // var paper = {
    //     paperName: paperName,
    //     questionList: questionList
    // };
    // console.log("准备将数据写到" + targetDir + "answer" + paperIndex + ".json");
    // fs.writeFile(targetDir + 'answer' + paperIndex + '.json', JSON.stringify(paper), function (err) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log("数据写入到文件" + targetDir + "answer" + paperIndex + ".json成功！");
    // });
});
