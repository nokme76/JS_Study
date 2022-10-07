console.log("----- 문자열 템플릿 -----");

// 문자열 템플릿 : 문자열을 표현하기 위해 "",'' 를 사용하지 않고 1옆에 있는 ``를 사용할 경우 문자열 내에서 ${...}에 변수를 사용할 수 있음

console.log("일반적인 문자열 사용");
console.log(`백틱을 사용한 문자열 출력`);

// ``을 사용하여 문자열을 표현 시 "",'' 를 이스케이프 문자 없이 바로 사용 할 수 있음

console.log("작은 '따옴표'를 문자열로 표시1");
console.log('작은 \'따옴표\'를 문자열로 표시2');
console.log('큰 "따옴표"를 문자열로 표시1');
console.log("큰 \"따옴표\"를 문자열로 표시2");
console.log(`백틱을 사용하면 큰"따옴표" 작은'따옴표' 마음대로 사용 가능`);

console.log();
// 여러 줄 입력을 지원함
let txt1 = "문자열을" + "여러줄로"
    + "입력을하려면"
    + "    이런식으로    " +
    "       입력하면       " +
    "됩니다";

let txt2 = `문자열을   
        여러줄로 
            입력을 하려면 
                이런식으로  
            입력하면 됩니다`;

console.log(txt1);
console.log(txt2);

console.log();
// 백틱을 사용한 문자열 내에 ${}를 사용하면 변수가 대입되어 출력된다
// ${} 내부에 연산식 사용 가능
let name = "홍길동";
let age = "30";

let txt3 =`나의 이름은 ${name}이고 나이는 ${age}살 입니다.`;
console.log(txt3);
txt3 = "나의 이름은 " + name + "이고 나이는 " + age + "살 입니다.";
console.log(txt3);

console.log();

let price = 1000;
let vat = 0.25;

let total = `Total : ${price * (1 + vat).toFixed(2)}`;
console.log(total);

console.log(`10 + 20 = ${10+20}`);