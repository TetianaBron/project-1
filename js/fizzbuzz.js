// Дан массив чисел от 1 до 100.
// Нужно сделать так, что бы числа, делящиеся на 3 без остатка принимали значения Fizz,
// а числа, делящиеся на 5 принимали значение Buzz,
// а числа делящиеся на 3 и на 5 принимали значение Fizzbuzz

// const array = [];
// function createArray() {
//     for (let i = 1; i < 101; i++)
//         array.push(i);
// };




// createArray();
// console.log(array);
      
// for (let i = 1; i < 101; i++) {
//      if (i % 3 === 0 && i % 5 === 0) {
//          console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }


for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log('Fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

