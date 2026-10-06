let Purchases=prompt("Enter is Purchases:")
if (Purchases >= 200) {
if (Purchases * (15 / 100) <= 100) {
console.log(Purchases - Purchases * (15 / 100));
} else {
console.log(
Purchases * (8 / 100) <= 100
? Purchases - Purchases * (8 / 100)
: Purchases - 100
);
}
} else
console.log(Purchases);


// console.log(Purchases>=200 ? Purchases*(15/100)<=100 ? Purchases-Purchases*(15/100): Purchases*(8/100)<=100 ? Purchases - Purchases*(8/100)  : Purchases- 100 :Purchases);
// بطريقة Terrnary operatar