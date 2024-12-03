let ProductPrice= 60
let taxRate= 0.15
let taxAmount=ProductPrice * taxRate;  // نسبة الضريبة
let finalPrice= ProductPrice + taxAmount ;// نسبة السعر النهائي

console.log(ProductPrice);
console.log(taxAmount);
console.log(finalPrice);
if (finalPrice > 100) {console.log("السعر مرتفع");}
else {console.log("السعر مقبول")}

