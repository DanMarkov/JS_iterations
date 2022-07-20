// for (let number = 5; number >= 0; number--) {
//     console.log(number);
// }

// for (let number = 0; number <= 10; number += 2) {
//     console.log(number);
// }

// const people = ['Sam', 'Alex'];

// for (const person of people) {
//     console.log(person);
// }

// Два преимущества:

// Синтаксис, вместо использования .forEach(),
// Использование ключевых слов break  и continue


// Ключевое слово break позволяет полностью завершить итерацию на раннем этапе, это может быть полезно, если вы итерируетесь на тысячах записей и в какой-то момент вам необходимо остановиться.

// let sum = 0;

// for (const number of numbers) {
//     sun += number;
//     if (sum >= 500) {
//         break;
//     }
// }

// Эта запись позволяет остановить итерацию, как только сумма превысит 500.
// Ключевое слово continue позволяет пропустить оставшееся тело итерации и продолжить следующую итерацию.

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const item of items) {
//     if (item %2 === 0) {
//         console.log('Even number, skip the iteration');
//         continue;
//     }
//     console.log('Odd number', item);
// }

// Обратите внимание, как `continue` останавливает выполнение оставшейся части тела `for...of` и продолжает следующую итерацию.

// `for...of` работает не только с массивами, но и со всеми типами данных и переменными, которые являются «итерируемыми» . Итерируемый означает типы данных, которые вы можете перебирать.

// const items = document.querySelectorAll('.items');
// for (const item of items) {
//     console.log(item.textContent);
// }



// people.forEach(person => {
//     console.log(person);
// })

// people.map(person => {
//     console.log(person);
//     return person;
// })


// Вы можете перебирать объекты с помощью for...in.

// const person = {
//     id: 1,
//     name: 'Alex'
// };

// for (const key in person) {
//     console.log(key);
//     console.log(person[key]);
// }

// for...in работает и для массивов, но не рекомендуется его использовать.