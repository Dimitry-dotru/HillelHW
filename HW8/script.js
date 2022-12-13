const numOrStr = prompt('Input number or string');
console.log(numOrStr)

switch(true) {
    case numOrStr === null:
        alert('You canceled');
        break;
    case numOrStr.trim() === '':
        alert('Empty string');
        break;
    case isNaN(parseInt(numOrStr)):
        alert('You entered a Ba_NaN :)');
        break;
    default:
        alert('Ok! :)');
}