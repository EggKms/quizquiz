//콘솔입력 객체 생성
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//문제 리스트
let quizList = [
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3},
    {quiz:"작가와 작품의 연결이 잘못된 것은?\r\n1.호손 - 주홍글씨\r\n2.괴테 - 파우스트\r\n3.이솝 - 좁은문\r\n4.도스트예프스키 - 백치",answer:3}
];

//문제 출제 객체
let questionClass = {
    count: 0,
    correct: 0,
    wrong: 0,
    //출제
    question:function(){
        if(questionClass.count > 0){
            console.log("\r\n다음 문제입니다!")    
        }
        console.log("=========================================");
        console.log("[문제]");
        console.log(quizList[questionClass.count].quiz)               
    },

    //채점
    grading:function(answer){
        correctAnswer = quizList[questionClass.count].answer;
        if(answer == correctAnswer){
            console.log("정답입니다!");        
            questionClass.correct++;
        }
        else{
            console.log("틀렸습니다!");
            console.log("정답은 ", correctAnswer, "번!");
            questionClass.wrong++;
        }
        //출제 횟수 ++
        questionClass.count++;
    }
};


// 본문
console.log("시작!");
console.log("문제를 출제합니다!");

questionClass.question();
let kang;
rl.on("line", (line) => {
    //입력받은 값 채점
    questionClass.grading(line);        

    //10문제 다 풀었다면 끝
    if(questionClass.count == 10){
        rl.close();
        return;
    }     
    questionClass.question();
});
rl.on("close", () => {
    console.log("\r\n문제 끝!");
    console.log("총 10 문제 중 ", questionClass.correct, "문제 맞추셨습니다!");
    console.log("\r\n안녕히 가세요!");
    process.exit();
});

