

//문제 3) 숫자를 입력받은후 1부터 그숫자까지의 3의 배수를 모두 화면에 출력합니다 그리고 출력된 3의배수가 총 몇개인지 알려주는 프로그램을 작성해 보세요.

let userNum = prompt("몇까지 3의 배수를 찾을까요?");
count = parseInt(`${userNum/3}`);
let result = `3의 배수 찾기`;

for (let i = 1 ; i<=userNum; i++)
{
    if (i%3==0)
    {
        result += ` ${i}`
    }
}

alert(`${result}
${userNum}까지 3의 배수의 개수 :${count}`)



// //강사님 풀이
//
// let num = prompt("몇까지 3의 배수를 찾을까요?");
// num = Number(num);
// let count = 0;
// for (let i = 1; i <=num; i++)
// {
//     if(i%3 ==0)
//     {
//         console.log(i);
//         count++;
//     }
// }
//
// console.log(`${num}까지의 3의 배수 개수 : ${count}` )




console.log();
// 문제 4) 커피 자판 프로그램을 작성하세요
// 1. 사용자가 가지고 있는 금액을 입력 받기
// 2. 커피 1잔의 금액은 300원
// 3. 자판기에 들어있는 커피의 양은 10개
// 4. 커피를 판매할 때마다 1개의 커피가 소비됨
// 5. 소지 금액이 부족 시 '돈이 부족합니다' 를 출력
// 6. 커피가 부족할 경우 '커피가 다 팔렸습니다' 를 출력
// 7. 커피 판매 시 '커피를 한잔 판매 합니다.' 와 커피 재고량을 출력
//      ex) 커피를 한잔 판매합니다.
//          남은 커피 00 잔


let userCoin ;
let orderCoffe ;
const coffe = 300;
let remainCoffe = 10;

while(true)
{
    userCoin = parseInt(prompt(`가지고 계신 금액을 입력해 주세요

        현재 남은 커피${remainCoffe}잔     커피한잔 가격 : 300`));
    orderCoffe = parseInt(`${userCoin/coffe}`);
    if (userCoin < coffe)
    {
        alert("돈이 부족합니다");
        continue;
    }
    else if(userCoin >= coffe)
    {
        if (remainCoffe < orderCoffe)
        {
            alert(`남은 커피가 모자랍니다`);
            continue;
        }
        remainCoffe = remainCoffe - orderCoffe;
        alert(`커피를 ${orderCoffe}잔 판매합니다`);
    }
    if (remainCoffe < 1)
    {
        alert("커피가 다 팔렸습니다");
        break;
    }
}

// //강사님 풀이
// let money = prompt("소지하고있는 금액을 입력하세요 :")
// console.log(`현재 소지 금액은 ${money}원 입니다.`);
// let coffe = 10;
//
// while (true)
// {
//     console.log("커피를 주문합니다")
//     if (money >= 300)
//     {
//         if (coffe>0)
//         {
//             coffe--;
//             money -= 300;
//             console.log("커피를 한잔 판매합니다.")
//             console.log(`현재 남은 커피량 : ${coffe}`)
//         }
//         else
//         {
//             console.log(`커피가 다 팔렸습니다`)
//             console.log(`영업을 종료합니다.`)
//             break;
//         }
//     }
//     else
//     {
//         console.log(`돈이 부족합니다`)
//         break;
//     }
//
// }



// 문제 5) 은행 프로그램을 작성하세요
// 1. 프로그램 시작 시 안내 메시지와 메뉴가 출력
//  ex) 안녕하세요 java505 은행입니다.
//  ex) 1: 입금, 2: 예금 확인, 3: 출금, 0: 종료

// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금


let userInsertMoney;
let userOutputMoney;
let userRemainMoney = 3500;
let bankMenu = Number;

alert("안녕하세요 java505 은행입니다.")

while(true)
{
    bankMenu = prompt(`메뉴를 선택하세요
1: 입금, 2: 예금 확인, 3: 출금, 0: 종료`)

    if (bankMenu == 1)
    {
        userInsertMoney = prompt("입금하실 금액을 입력해 주세요.");
        if (isNaN(userInsertMoney))
        {
            alert("잘못 입력하셨습니다.")
            continue;
        }
        userRemainMoney += Number(userInsertMoney);
        alert(` ${parseInt(userInsertMoney)}원 을 입금합니다.`);

    }
    else if (bankMenu == 2)
    {
        alert(`예금 잔액은 : ${userRemainMoney}원 입니다.`);

    }
    else if (bankMenu == 3)
    {
        userOutputMoney = prompt("출금하실 금액을 입력해 주세요");
        if (userRemainMoney < Number(userOutputMoney))
        {
            alert(`         출금 금액이 예금 금액보다 많습니다.
                잔액 ${userRemainMoney}원을 출금합니다.`);
            userRemainMoney = 0;
            alert(`예금 잔액은 : ${userRemainMoney}원 입니다.`);
            continue;
        }
        userRemainMoney -= parseInt(userOutputMoney);
        alert(`예금 잔액은 : ${userRemainMoney}원 입니다.`);


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


