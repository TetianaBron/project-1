// // 1. Написать две функции facRec и facLoop, которые считают факториал числа
// // n(передаётся в аргументе) с помощью рекурсии и с помощью цикла.
// // Факториал от отрицательного числа не существует,
// // поэтому функция должна возвращать значение NaN, а факториал от 0 равен цифре 1.

// const facRec = n => {
//   if  (n < 0) {
//       return NaN;
//     }
//   if (n < 2) {
//     return 1;
//   } 
//       return n * facRec(n-1);
  
// }


// console.log(facRec(-10)); // NaN
// console.log(facRec(5)); // 6


// function facLoop(n) {
//     if (n === 0) {
//         return 1;
//     } else if (n < 0) {
//         return NaN;
//     } else {
//         let total = n; // n = 3; total = 3;
//         while (--n > 1) total *= n; // (2 > 1)  6 = 3 * 2;
//          return total;
//     }
// }

// // ++i - сначала изменяется число, потом возвращается значение этого числа;
// // i++ - возвращается значение числа, потом изменяется это число;

// // // 1 iteration: (total = 1) * (i=1 + 1) = 2;
// // // 2 iteration: (total = 2) * (i=2 + 1) = 6;
// // // 3 iteration: (total = 6) * (i=3 + 1) = 24;
// // // 4 iteration: (total = 24) * (i=4 + 1) = 120;


// console.log(facLoop(-1)); // NaN
// console.log(facLoop(0)); // 1
// console.log(facLoop(3)); // 6
// console.log(facLoop(5)); // 120



// // 2. Написать две функции fibRec и fibLoop, которые считают n - й член последовательности
// // Фиббоначи с помощью рекурсии и с помощью цикла.
// // За нулевой элемент последовательности взять число 1.
// // Если в функции будет передано отрицательное число, то вернуть значение NaN.
// // Последовательность Фиббоначи начинается с двух первых единиц и каждый
// // последующий элемент равен сумме двух предыдущих.
// // Пример последовательности Фиббоначи: 1, 1, 2, 3, 5, 8, 13, 21...

// const fibRec = (n) => { // 6
//     if (n < 0) return NaN;
//     if (n < 2) return 1;
//     return fibRec(n - 1) + fibRec(n - 2);
//     // 5(8) + 4(5)
//     // 4(5) + 3(3) 
//     // 3(3) + 2(2)
//     // 2(2) + 1(1)
//     // 1(1) + 0(1)
// }

// console.log(fibRec(-1)); // NaN
// console.log(fibLoop(0)); // 1
// console.log(fibRec(5)); // 8
// console.log(fibLoop(3)); // 3
// console.log(fibLoop(8));

// function fibLoop(n) {
//     if (n < 0) return NaN;
//     let a, b, total;
//     a = b = total = 1;
    
//     while (n-- > 1) {
//         total = a + b;
//         a = b;
//         b = total;
//     }
//     return total;
// }

// let x = -5; 
// while (x++ < 9) {
//     if (x < -3 || x > 3) console.log(2 * x - 5, x);
// } 

// let x = -50;
// do { if (x % 2 > 0) console.log(x); } while (x++ < 0);


