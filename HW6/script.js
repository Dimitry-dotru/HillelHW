const firstNum = parseInt(prompt('Enter first num', 'your answer here'), 10);
const secondNum = parseInt(prompt('Enter second num', 'your answer here'), 10);
const thirdNum = parseInt(prompt('Enter third num', 'your answer here'), 10);

let counter = 0;
let summ = 0;

if (!Number.isNaN(firstNum)) {
    counter++;
    summ += firstNum;
}
if (!isNaN(secondNum)) {
    counter++;
    summ += secondNum;
}
if (!isNaN(thirdNum)) {
    counter++;
    summ += thirdNum;
}
alert(`You entered ${counter} correct nums. Their summ is ${summ}, mean val - ${!counter ? 0 : (summ / counter).toFixed(2)}`);
