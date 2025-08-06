console.log("мій сайт");
let sum = 0;
let min = 100;
let max = 0;
let evenCount = 0;

console.log("\n10 випадкових чисел:");
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 100) + 1;
  console.log(`Число ${i + 1}: ${num}`);
  sum += num;
  if (num < min) min = num;
  if (num > max) max = num;
  if (num % 2 === 0) evenCount++;
}

console.log(`Сума: ${sum}`);
console.log(`Середнє: ${(sum / 10).toFixed(2)}`);
console.log(`Мінімум: ${min}`);
console.log(`Максимум: ${max}`);
console.log(`Кількість парних: ${evenCount}`);
