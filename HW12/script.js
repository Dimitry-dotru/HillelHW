const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let maxEl = arr[0], minEl = arr[0], amnt = 0, maxMinIndexes = [], sum = 0;

for (let i = 0;i < arr.length; i++) {
    if (maxEl < arr[i]) {
        maxEl = arr[i];
        maxMinIndexes[0] = i;
    }
    if (minEl > arr[i]) {
        minEl = arr[i];
        maxMinIndexes[1] = i;
    }
    if (arr[i] < 0) amnt++;
}

console.log('Your array: ', arr);
console.log('Max element: ', maxEl + `[${maxMinIndexes[0]}]`);
console.log('Min element: ', minEl + `[${maxMinIndexes[1]}]`);
console.log('Amnt of negative elements: ', amnt);


//!шукаємо кількість непарних позитивних елементів
amnt = 0;
for (let i = 0;i < arr.length; i++)
    if (arr[i] % 2 && arr[i] >= 0) amnt++;
//!шукаємо суму парних позитивних елементів
for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 && arr[i] >= 0) sum += arr[i];
console.log('Amnt of НЕПАРНИХ positive elements: ', amnt, 'Sum: ', sum);

//!шукаємо кількість парних позитивних елементів
amnt = 0;
for (let i = 0;i < arr.length; i++)
if (!(arr[i] % 2) && arr[i] >= 0) amnt++;
//!шукаємо суму парних позитивних елементів
for (let i = 0; i < arr.length; i++)
    if (!(arr[i] % 2) && arr[i] >= 0) sum += arr[i];
console.log('Amnt of ПАРНИХ positive elements: ', amnt , 'Sum: ', sum);

let mult = 1;
for (let i = 0; i < arr.length; i++)
    if (arr[i] > 0) mult *= arr[i];
console.log('Multiplication of positive elements except 0: ', mult);

for (let i = 0; i < arr.length; i++)
    if (arr[i] != maxEl) arr[i] = 0;
console.log(`All elements are 0 except ${maxEl}: `, arr);