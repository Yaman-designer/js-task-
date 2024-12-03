

// اول وصف

let BasicSalary = 5000;
let incomeTax = 0.15;//  ضريبة الدخل
let SocialSecurityTax = 0.05;// ضريبة الضمان الاجتماعي 
let IncomeTaxCalculation = incomeTax * BasicSalary;// حساب ضريبة الدخل
let SocialSecurityTaxCalculation = SocialSecurityTax * BasicSalary;//  حساب ضريبة الضمان الاجتماعي 
let CalculateTotalDiscounts = SocialSecurityTaxCalculation + IncomeTaxCalculation; //  حساب إجمالي الخصومات
let netSalary = BasicSalary - CalculateTotalDiscounts; // حساب الراتب الصافي
console.log(netSalary)


// ثاني وصف
let hour = 14
let minutes = 30
let elapsedSeconds = (hour * 3600) + (minutes * 60);
let totalSecondsinday = 24 * 3600;
let remainingSeconds = totalSecondsinday - elapsedSeconds;
console.log(remainingSeconds)


// ثالث وصف

let number = 5
if (number % 2 === 0) { number *= 2 }
else (number -= 1)
console.log(number)


// رابع وصف

let days = 4
let minute = days * 24 * 60;
console.log(minute);