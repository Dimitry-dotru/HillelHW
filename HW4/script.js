/*
Створити скрипт який повинен виконувати наступне:

    питаємо у користувача, що він хоче зробити (add, sub, mult, div);
    питаємо у користувача перше число;
    запитуємо у користувача друге число;
    виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").
*/

const mathOperation = prompt('Which operation do you want to do?', 'add or sub or mult or div').trim().toLowerCase();
const firstNum = +prompt('Enter first num', '');
const secondNum = +prompt('Enter second num', '');


switch (mathOperation) {
        case 'add':
            alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
            break;
        case 'sub':
            alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
            break;
        case 'mult':
            alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
            break;
        case 'div':
            alert(`${firstNum} \\ ${secondNum} = ${firstNum / secondNum}`);
            break;
        default:
            alert('Error!');
            break;
}