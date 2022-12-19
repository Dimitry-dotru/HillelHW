let divNum = 1;

//!1
let task = document.querySelector(`.f${divNum++} span`);
for (let i = 10; i <= 20; i++) {
    if (i <= 19) task.innerText += i + ',';
    else task.innerText += i;
}

//!2
task = document.querySelector(`.f${divNum++} span`);
for (let i = 10; i <= 20; i++)
    task.innerText += `${i}^2 = ${i**2}\n`;

//!3
task = document.querySelector(`.f${divNum++} span`);
for (let i = 1; i <= 10; i++)
    task.innerText += `7*${i} = ${7*i}\n`;

//!4
task = document.querySelector(`.f${divNum++} span`);
let sum = 0;
for (let i = 1; i <= 15; i++)
    sum += i;
task.innerText = `Summ of 15 elements >${sum}`;
1

//!5
task = document.querySelector(`.f${divNum++} span`);
let mult = 1n;
for (let i = 15n; i <= 35n; i++)
    mult *= i;
task.innerText = `Multiplication of elements in diapazon [15;25] >${mult} (that's a lot....)`;

//!6
task = document.querySelector(`.f${divNum++} span`);
sum = 0;
for (let i = 1; i <= 500; i++)
    sum += i;
task.innerText = `Mean value of 500 nums is >${sum / 500}`;

//!7
task = document.querySelector(`.f${divNum++} span`);
sum = 0;
for (let i = 30; i <= 80; i += 2)
    sum += i;
task.innerText = `Mean value of odd elements in diapazon [30;80](${(80 - 30)/2 + 1}) is >${sum / (80 - 30)/2 + 1}`;

//!8
task = document.querySelector(`.f${divNum++} span`);
for (let i = 100; i <= 200; i++)
    if (i + 3 >= 200) task.innerText += !(i % 3) ? `${i} ` : '';
    else task.innerText += !(i % 3) ? `${i}, ` : '';

//!9
task = document.querySelector(`.f${divNum++} span`);

//заданное число
const n = 13;
for (let i = 1; i <= n; i++) {
    if (i === n) 
        task.innerText += i;
    else if ( !(n % i) )
        task.innerText += `${i} ,`;
}

//!10
task = document.querySelector(`.f${divNum++} span`);
let amntDividers = 0;
sum = 0;
for (let i = 1; i <= n; i++) {
    if (!(n % i) && !(i % 2)) {
        amntDividers++;
        sum += i;
    }
}
task.innerText = `Amnt odd dividers in num ${n} >${amntDividers}`;

//!11
task = document.querySelector(`.f${divNum++} span`);
task.innerText = `Sum of odd dividers of num ${n} >${sum}`;

//!12
task = document.querySelector(`.f${divNum++} span`);
for (let i = 1; i<=10; i++)
    for (let j = 1; j<=10;j++) {
        if (j == 10) task.innerText += `${i} * ${j} = ${i*j}\n------------------------\n`;
        else task.innerText += `${i} * ${j} = ${i*j}\n`;
    }