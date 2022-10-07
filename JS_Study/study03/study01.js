console.log("----- while문 사용하기 -----")


let count = 0;
let sum = 0;
while (count<11)
{
    sum += count;
    count++;
    console.log(sum)
}

console.log();


let dan = 5;
count = 1;
//
// while(count<10)
// {
//     console.log(`${dan} * ${count} = ${dan * count}`);
//     count++;
// }

// 문제 1) 구구단 전체 출력을 while 문으로 사용하여 출력하세요

dan = 2;
while(dan<10)
{
    count = 2;
    console.log(`--- ${dan}단 ---`)
    while(count<10)
    {
        console.log(`${dan} * ${count} = ${dan * count}`);
        count++;
    }
    dan++;
    console.log()
}

console.log("----- for문 사용하기 -----")


sum = 0;
for(let i = 0; i<=5; i++)
{
    sum = i + sum;
    console.log(sum);
}

console.log()

const arr1 = [1,2,3,4,5];
sum = 0;
for (let i=0; i<arr1.length; i++)
{
    sum = arr1[i] + sum;
    console.log(sum);
}

console.log("--문제2--");
// 문제2) 배열 arr1를 이용하여 1 ~ 10 까지의 총합을 구하는 프로그램을 for문을 사용하여 작성하세요
sum=0;
for (let i = 0; i <arr1.length; i++)
{
    sum += (arr1[i]) + (arr1[4]+1+i) ;
    console.log(`(${arr1[i]}) + (${arr1[4]+1+i}) = ${sum} `);
}
console.log();

for (let i = 0; i <10; i++)
{
    if (i == 5)
    {
        break;
    }
    else
    {
        console.log(`현재 i의 값 : ${i}`)
    }
}

console.log();

for (let i = 0; i <10; i++)
{
    if (i == 5)
    {
        continue;
    }
    else
    {
        console.log(`현재 i의 값 : ${i}`)
    }
}

console.log();
for (let i = 2; i<10; i++)
{
    if (i==5)
    {
        break;
    }
    console.log();
    for (let j=1; i<10; j++)
    {
        if (j==5)
        {
            break;
        }
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

console.log();