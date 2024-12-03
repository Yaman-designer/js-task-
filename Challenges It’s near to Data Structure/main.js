

// اختبار 1 – طباعة العناصر:
const cities = ["Paris", "Istanbul", "Cairo", "Tokyo", "Dubai"];
for (let i = 0; i < cities.length; i++) {
    console.log("City " + (i + 1) + ": " + cities[i]);
}



// اختبار 2 – الطول:
const number = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(number.length);




// اختبار 3 – إضافة العناصر:
const arr = []
arr.push(1, 4, 7);
console.log(arr);



// اختبار 4 – البحث داخل المصفوفة:
const names = ["nour", "yeman", "aya", "cene", "cemile"];
const inputName = prompt("أدخل الاسم:");
if (names.includes(inputName)) {
    console.log("الاسم موجود.");
}
else { console.log("الاسم غير موجود"); }




// اختبار 5 – تصفية البيانات:
let newArr = [45, 22, 60, 10, 78];
newArr = newArr.filter(value => value > 50);
console.log(newArr);




// اختبار 6 – تكرار العناصر:
const names1 = ["Ali", "Sara", "Noor", "Ali"];
let seenNames = [];
names1.forEach(name => {
    if (seenNames.includes(name)) {
        console.log(`الاسم ${name} مكرر`);
    }
    else { seenNames.push(name) };

})



// اختبار 7 – جمع القيم:
let num = [10, 15, 20, 25];
let sum = num.reduce((total, num) => total + num, 0);
console.log(sum);






// اختبار 8 – تعديل القيم:
let Arr = [2, 4, 6, 8];
let doubled = Arr.map(num => num * 2);
console.log(doubled);




// اختبار 9 – ترتيب القيم:
let newArray = [5, 3, 8, 1, 4];
newArray.sort((a, b) => a - b);
console.log(newArray);




// اختبار 10 – دمج المصفوفات:
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let combined = array1.concat(array2);
console.log(combined);




// اختبار 11 – إيجاد أكبر وأصغر قيمة:
let nuum = [3, 7, 2, 8, 1, 9];
let max = Math.max(...nuum);
let min = Math.min(...nuum);
console.log("أكبر قيمة:", max);
console.log("أصغر قيمة:", min);




// اختبار 12 – عكس المصفوفة:
let arrays = [1, 2, 3, 4, 5]
arrays.reverse();
console.log(arrays);


// (Challenges It’s near to Data Structure):


// سؤال تطبيقي 1:
let grades = [45, 60, 78, 30, 90];
let studentGrades = grades.filter(grades => grades > 50);
let count = studentGrades.length;
console.log(count);


// سؤال تطبيقي 2:

let ages = [12, 25, 17, 30, 18, 16];
let TotalAges = ages.reduce((Total, ages ) => Total + ages , 0);
console.log("مجموع الأعمار",TotalAges);
// let averageAge = totalAges / ages.length;
// console.log("متوسط الأعمار:",averageAge);  error لم استطع معرفة متوسط الاعمار
let Ages= ages.filter(ages => ages  < 18);
console.log("عدد الأشخاص الذين أعمارهم أقل من 18.",Ages);




