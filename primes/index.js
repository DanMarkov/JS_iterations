
// ЗАДАЧА: Выведите простые числа от 2 до 100. Простое число - это число, которое делится только на себя и на 1. Пример простых чисел: 3, 5, 7, 11, 13, 17.


// let primeNumber = [];

// for (let number = 2; number <= 100; number++) {
//     primeNumber.every(item => number % item !== 0) ? primeNumber.push(number) : '';
// }

// console.log(primeNumber);

// for (let counter = 2; counter <= 100; counter++) {
//     let isPrime = true;
//     for (let iterator = counter - 1; iterator > 1; iterator--) {
//         isPrime = counter % iterator !== 0;
//         if (!isPrime) {
//             break;
//         }
//     }

//     isPrime && console.log(counter);
// }