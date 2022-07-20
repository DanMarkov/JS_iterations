// ЗАДАЧА: Посчитайте в цикле сумму квадратов от 1 до 10.

const sumOfSquares = () => {
    let result = 0;
    for (let i = 1; i <= 10; i++){
        result += i ** 2;
    }
    return result;
}

console.log(sumOfSquares()); // 385