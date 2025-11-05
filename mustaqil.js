var son1 = +prompt("1-son");
 var amal = prompt("Amal  (+, -, *, /) ");
 var son2 = +prompt("2-son");
 
 if (amal == "+") {
     console.log((son1 + son2)); 
 }
 else if (amal == "-") {
     console.log((son1 - son2));
 }
 else if (amal == "*") {
     console.log((son1 * son2));
 }
 else if (amal == "/") {
     console.log((son1 / son2));
 }
 else {
     console.log(("Noto‘g‘ri amal!"));
 };