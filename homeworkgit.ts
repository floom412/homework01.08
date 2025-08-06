console.log("мій сайт");
let a:number=5;
console.log(a*9);

function smartConvert(uahAmount:number):void
{
    let curseUsd=41.5;
    let curseEur=48.7;
    let cursePln=12.1;
    let usdAmount:number=uahAmount/curseUsd;
    let eurAmount:number=uahAmount/curseEur;
    let plnAmount:number=uahAmount/cursePln;
    let maxAmount:number=Math.max(usdAmount,eurAmount,plnAmount);
    if (maxAmount===usdAmount)
    {
        console.log(`найвигідніша валюта для покупки-доллари. Ви отримуєте ${usdAmount} долларів`);
        
    }
    else if (maxAmount===eurAmount)
    {
        console.log(`найвигідніша валюта для покупки-євро. Ви отримуєте ${eurAmount} євро`);
        
        
    }
    else {
        console.log(`найвигідніша валюта для покупки-злотих. Ви отримуєте ${plnAmount.toFixed(2)} злотих`);
        
        
    }

}

smartConvert(5000);

