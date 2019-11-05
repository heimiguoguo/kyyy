var fs = require("fs");
var index = 4
var baseDir = `../../data/source/2017_1/section2/text${index}/`;
var targetDir = `../../data/target/2017_1/section2/text${index}/`;
var paperName = "2017年全国硕士研究生入学统一考试英语(一)";
fs.readFile(baseDir + 'answer.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("读取" + baseDir + "answer.txt成功");
    var answerList = data.toString().split("\r");
    // console.log(answerList)
    var questionList = [];
    for(let i = 0; i < 5; i++){
        let questionRow = answerList[5*i]
        let index = Number(questionRow.match(/\d{2}/))
        let question = questionRow.split(/\d{2}\./)[1].trim()
        let options = {
            A: answerList[5*i+1].split(/\[[A-D]\]/)[1].trim(),
            B: answerList[5*i+2].split(/\[[A-D]\]/)[1].trim(),
            C: answerList[5*i+3].split(/\[[A-D]\]/)[1].trim(),
            D: answerList[5*i+4].split(/\[[A-D]\]/)[1].trim()
        }
        questionList.push({
            index,
            question,
            options
        })
    }
    // console.log(questionList)
    
    console.log("准备将数据写到" + targetDir + "answer.json");
    fs.writeFile(targetDir + 'answer.json', JSON.stringify(questionList), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入到文件" + targetDir + "answer.json成功！");
    });
});
