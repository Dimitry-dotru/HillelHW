const arraySize = parseInt(prompt('Enter size of array', ''));

if (!arraySize || isNaN(arraySize)) alert('Error!');
else {
    const array = [];
    //!array filling
    for (let i = 0; i < arraySize; i++)
        array.push(Math.floor(Math.random() * 100));

//     //!array sorting
    array.sort(function(a, b) {
        return a - b;
    })
    console.log(array);
    if (array.length < 5) console.log(`Can't slice array!`);
    else {
        array.splice(2,3)
        console.log(array);
    }
}

// const n = 25;
// const arr = [];
// for (let i = 0; i < n; i++) {
//     if (arr.length < 2)
//         arr.push(i);
//     else {
//         let sum = 0;
//         for (let j = i - 2; j < i; j++) sum += arr[j];
//         arr.push(sum);
//     }
// }
// console.log(arr);