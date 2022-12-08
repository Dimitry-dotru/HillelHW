//.trim() + пробел, для того чтобы строки были разделены только одним пробелом
const str1 = prompt('Enter first part', '').trim() + ' ';
const str2 = prompt('Enter second part', '').trim() + ' ';
const str3 = prompt('Enter third part', '').trim() + ' ';
const resStr = ''.concat(str1,str2,str3);

alert(resStr);

const inputNum = prompt('Enter five-digit number', '');

if (isNaN(parseInt(inputNum)))
alert('You entered not a num!');
else {

    if (inputNum.length != 5) alert('Num isn\'t five digit');
    else {
        const splitted = inputNum.split('').join(' ');
        alert(splitted);
    }
}