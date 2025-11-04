//Use reduce() to find the total of numbers [10, 20, 30, 40].
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total); 
