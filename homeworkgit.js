console.log("мій сайт");
var a = 5;
console.log(a * 9);
function smartConvert(uahAmount) {
    var curseUsd = 41.5;
    var curseEur = 48.7;
    var cursePln = 12.1;
    var usdAmount = uahAmount / curseUsd;
    var eurAmount = uahAmount / curseEur;
    var plnAmount = uahAmount / cursePln;
    var maxAmount = Math.max(usdAmount, eurAmount, plnAmount);
    if (maxAmount === usdAmount) {
        console.log("\u043D\u0430\u0439\u0432\u0438\u0433\u0456\u0434\u043D\u0456\u0448\u0430 \u0432\u0430\u043B\u044E\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438-\u0434\u043E\u043B\u043B\u0430\u0440\u0438. \u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 ".concat(usdAmount, " \u0434\u043E\u043B\u043B\u0430\u0440\u0456\u0432"));
    }
    else if (maxAmount === eurAmount) {
        console.log("\u043D\u0430\u0439\u0432\u0438\u0433\u0456\u0434\u043D\u0456\u0448\u0430 \u0432\u0430\u043B\u044E\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438-\u0454\u0432\u0440\u043E. \u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 ".concat(eurAmount, " \u0454\u0432\u0440\u043E"));
    }
    else {
        console.log("\u043D\u0430\u0439\u0432\u0438\u0433\u0456\u0434\u043D\u0456\u0448\u0430 \u0432\u0430\u043B\u044E\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438-\u0437\u043B\u043E\u0442\u0438\u0445. \u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 ".concat(plnAmount.toFixed(2), " \u0437\u043B\u043E\u0442\u0438\u0445"));
    }
}
smartConvert(5000);
