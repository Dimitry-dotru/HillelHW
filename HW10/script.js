/* 
    Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
    Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
    Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
    Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
    Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
*/
let divNum = 1;

//! 1
let task = document.querySelector(`.f${divNum++} span`);
for (let i = 20; i <= 30; i += 0.5) {
    if (i == 30) task.innerText += ` ${i}`;
    else task.innerText += ` ${i},`;
}

//! 2
task = document.querySelector(`.f${divNum++} span`);
const currencyCost = 27;
for (let i = 10; i <= 100; i += 10)
    task.innerText += `${i}$ = ${i*currencyCost} грн\n`;

//! 3
task = document.querySelector(`.f${divNum++} span`);
const num = 89;
task.innerText = `Числа які в квадраті <= ${num}:\n`;
for (let i = 1; i ** 2 <= num && i <= 100; i++)
    task.innerText += ` ${i}`;

//! 4
task = document.querySelector(`.f${divNum++} span`);
const simpleNum = 19;
//default - num is simple
let isSimple = true;
for (let i = 2; i < simpleNum; i++)
    if (!(simpleNum % i)) {
        isSimple = false;
        break;
    }
task.innerText += `Число ${simpleNum} ${isSimple ? `є простим` : `не є простим`}`

//! 5
task = document.querySelector(`.f${divNum++} span`);
const powNum = 3;
let isPower = false, pow;
for (pow = 1;3**pow <= powNum; pow++)
    if (3**pow == powNum) {
        isPower = true;
        break;
    }
task.innerText += `Число ${powNum} ${isPower ? `можна отримати якщо взвести 3^${pow}` : `не можливо отримати`}`;