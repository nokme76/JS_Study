console.log("----- 함수 사용하기 ------")

function sum(num1, num2)
{
    const a = 10;
    const b = 10;
    const result = a + b;
    console.log(`두 수의 덧셈은 ${result}`)
}

// sum();
sum(2,4);

//  함수의 4가지 형태
// 1. 매개변수와 반환값이 모두 없는 형태
//  연산에 필요한 변수를 메서드 내부에서 선언하고, 사용하고, 삭제함
//  연산 후 그 결과를 함수 내부에서 표현함
//  연산의 결과가 동일함

// 2. 매개변수는 존재하고, 반환값은 없는 형태
//  연산에 필요한 데이터를 함수 외부에서 전달받음
//  연산 후 그 결과를 함수 내부에서 표현함
//  연산의 결과가 입력되는 데이터에 따라 변경됨

// 3. 매개변수는 없고, 반환값은 존재하는 형태
//  연산에 필요한 데이터를 함수 내부에서 선언하고, 사용하고, 삭제함
//  연산 후 그 결과를 함수 외부로 되돌려줌
//  연산 결과를 다른 곳에서 활용할 수 있음
//  연산의 결과가 동일함

// 4. 매개변수와 반환값이 모두 존재하는 형태
//  연산에 필요한 데이터를 함수 외부에서 전달받음
//  연산 후 그 결과를 함수 외부로 되돌려줌
//  연산 결과를 다른 곳에서 활용할 수 있음
//  연산의 결과가 입력되는 데이터에 따라 변경됨



function add1()
{
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`)
}

function add2(a, b)
{

    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`)
}

function add3() {
    const a = 10;
    const b = 20;
    const c = a + b;
    return c;
}

function add4(a, b)
{

    const c = a + b;
    return c;
}

console.log("----------------------");


// var btn = document.getElementById("aaa");
// btn.addEventListener("click",function ()
// {
//     alert("aaa")
// });

//  익명함수 : 이름이 없어서 호출(실행) 불가한 함수, 매개변수로 함수를 사용시(콜백함수) 사용
//  변수에 익명 함수를 대입하여 변수 명으로 익명함수를 호출할 수 있음
const noname = function (num1,num2)
{   const a = 10;
    const b = 20;
    console.log(`두 수의 덧셈은 ${a+b}`)
}

noname(1,2);


//  즉시 실행 함수(일회용 함수) : 프로그램 실행 시 단 한번만 실행해야 되는 부분을 실행하기 위해서 사용함
(function () {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c)
}())




// 문제6) 문제3의 소스코드를 함수를 사용하는 양식으로 수정하세요
//  1. 사용자 입력 부분을 함수로 생성, quiz6Input
//  2. 3의 배수를 계산하는 부분을 함수로 생성, quiz6Cal

function quiz6Input()
{
    userInput = prompt("1부터 몇까지의 3의 배수를 출력하시겠습니까?");
    return userInput;
}

function quiz6Cal()
{
    userNum = quiz6Input();
    let result = `3의 배수 찾기`;
    count = parseInt(`${userNum/3}`);

    for (let i = 1; i<userNum; i ++)
    {
        if (i%3 == 0)
        {
            result += ` ${i}`
        }
    }
    alert(`${result} ${userNum}까지 
    3의 배수의 개수 :${count}`);
}

quiz6Cal();


// 문제7) 문제4의 소스코드를 함수를 사용하는 양식으로 수정하세요
//  1. money,coffee,price 의 초기값을 설정하는 함수 생성 quiz7Setup
//  2. 커피 판매 부분을 함수로 생성 quiz7CoffeeSale

//함수의 반환값은 1개의 데이터만 반환 가능함

let money = 0;
let coffee = 0;
let price = 0;
function quiz7Setup()
{
    let inputMoney = prompt("소지하고있는 금액을 입력하세요 :")
    alert(`현재 소지 금액은 ${inputMoney}원 입니다.`);
    let inputCoffee = prompt("최대 판매할 커피 수를 적으세요")
    alert(`최대 커피 수는 ${inputCoffee}잔 입니다.`);
    let coastCoffee = prompt("커피 한 잔의 값을 정해주세요")
    alert(`커피 한 잔의 값은 ${coastCoffee}원 입니다.`);
    money = inputMoney;
    coffee = inputCoffee;
    price = coastCoffee;
}
////강사님 답안
//return 은 한값만 반환돼서 배열로 반환
// function quiz7Setup()
// {
//     let inputMoney = prompt("소지하고있는 금액을 입력하세요 :")
//     alert(`현재 소지 금액은 ${inputMoney}원 입니다.`);
//     let inputCoffee = prompt("최대 판매할 커피 수를 적으세요")
//     alert(`최대 커피 수는 ${inputCoffee}잔 입니다.`);
//     let coastCoffee = prompt("커피 한 잔의 값을 정해주세요")
//     alert(`커피 한 잔의 값은 ${coastCoffee}원 입니다.`);
//     return {money:inputMoney, coffee:inputCoffee, price:coastCoffee}
// }

function quiz7CoffeeSale()
{
    quiz7Setup();

    while (true)
    {
        console.log("커피를 주문합니다")
        if (money >= price)
        {
            if (coffee>0)
            {
                coffee--;
                money -= 300;
                console.log("커피를 한잔 판매합니다.")
                console.log(`현재 남은 커피량 : ${coffee}`)
            }
            else
            {
                console.log(`커피가 다 팔렸습니다`)
                console.log(`영업을 종료합니다.`)
                break;
            }
        }
        else
        {
            console.log(`돈이 부족합니다`)
            break;
        }
    }
}

quiz7CoffeeSale();








// 문제8) 문제5의 소스코드를 함수를 사용하는 양식으로 수정하세요
//  1. 입금 부분을 함수로 생성 quiz8InputMoney
//  2. 예금 확인 부분을 함수로 생성 quiz8CheckMoney
//  3. 출금 부분을 함수로 생성 quiz8OutputMoney

let userInsertMoney ;
let userOutputMoney ;
let userRemainMoney = 3500;
let bankMenu ;

function quiz8InputMoney()
{
    userInsertMoney = prompt("입금하실 금액을 입력해 주세요.");
    if (isNaN(userInsertMoney) == true)
    {
        alert("잘못 입력하셨습니다. 숫자로 입력해주세요.")
        return 0;
    }
    userRemainMoney += Number(userInsertMoney);
    alert(` ${parseInt(userInsertMoney)}원 을 입금합니다.`);
}

function quiz8CheckMoney()
{
    alert(`예금 잔액은 : ${userRemainMoney}원 입니다.`);
}
function  quiz8OutputMoney()
{
    userOutputMoney = prompt("출금하실 금액을 입력해 주세요");
    if (isNaN(userOutputMoney) == true)
    {
        alert("잘못 입력하셨습니다. 숫자로 입력해주세요.")
        return 0;
    }
    if (userRemainMoney < parseInt(userOutputMoney))
    {
        alert(`         출금 금액이 예금 금액보다 많습니다.
                잔액 ${userRemainMoney}원을 출금합니다.`);
        userRemainMoney = 0;
        alert(`예금 잔액은 : ${userRemainMoney}원 입니다.`);
    }
    else
    {
        alert(`${userOutputMoney}원을 출금합니다`);
        userRemainMoney -= Number(userOutputMoney);
        alert(`예금 잔액은 : ${userRemainMoney}원 입니다.`);
    }
}



alert("안녕하세요 java505 은행입니다.")

while(true)
{
    bankMenu = prompt(`메뉴를 선택하세요
1: 입금, 2: 예금 확인, 3: 출금, 0: 종료`)

    if (bankMenu == 1)
    {
        quiz8InputMoney();
    }
    else if (bankMenu == 2)
    {
        quiz8CheckMoney();
    }
    else if (bankMenu == 3)
    {
        quiz8OutputMoney();
    }
    else if (bankMenu == 0)
    {
        alert("프로그램을 종료합니다");
        break;
    }
    else
    {
        alert("잘못 입력하셨습니다.")
    }
}