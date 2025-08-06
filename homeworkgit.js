console.log("мій сайт");
var sum = 0;
var min = 100;
var max = 0;
var evenCount = 0;
console.log("\n10 випадкових чисел:");
for (var i = 0; i < 10; i++) {
    var num = Math.floor(Math.random() * 100) + 1;
    console.log("\u0427\u0438\u0441\u043B\u043E ".concat(i + 1, ": ").concat(num));
    sum += num;
    if (num < min)
        min = num;
    if (num > max)
        max = num;
    if (num % 2 === 0)
        evenCount++;
}
console.log("\u0421\u0443\u043C\u0430: ".concat(sum));
console.log("\u0421\u0435\u0440\u0435\u0434\u043D\u0454: ".concat((sum / 10).toFixed(2)));
console.log("\u041C\u0456\u043D\u0456\u043C\u0443\u043C: ".concat(min));
console.log("\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C: ".concat(max));
console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u0440\u043D\u0438\u0445: ".concat(evenCount));
