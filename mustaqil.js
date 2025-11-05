var raqamlar = [];
var kodlar = ["90","91","93","94","95","97","98","99"];

for (var i = 0; i < 1000; i++) {
  var kod = kodlar[Math.floor(Math.random() * kodlar.length)];
  var son = Math.floor(1000000 + Math.random() * 9000000);
  raqamlar.push(kod + son);
}

var res = prompt("9 xonali raqam kiriting (masalan: 901234567)");

if (res.length !== 9) {
  alert(" Raqam 9 xonali bo‘lishi kerak!");
} 
else if (res.slice(0, 2) === "92" || res.slice(0, 2) === "96") {
  alert(" Xato! 92 yoki 96 bilan boshlanadi!");
} 
else if (raqamlar.includes(res)) {
  alert("Raqam ro‘yxatda bor");
} 
else {
  alert("Raqam ro‘yxatda yoq");
}
console.log(raqamlar);