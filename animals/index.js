// ЗАДАЧА: Что находится в animals после исполнения кода?

let rainForestAcres = 10;
let animals = 0;

while(rainForestAcres < 13 || animals <= 2) {
    rainForestAcres++;
    animals += 2;
}

console.log(animals); //6


// while похрен вообще на оператор ||...