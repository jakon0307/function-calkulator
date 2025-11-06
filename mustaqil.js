var number1 = parseFloat(prompt("1-sonni kriting"));
var actions = prompt("Amallarni kiriting M: +, -, *, /");
var number2 = parseFloat(prompt("2-sonni kriting"));

function calculator(a, b, actions) {
        return a + b;
}
function calMar(a, b, actions) {
        return a - b
}
function calDes(a, b, actions) {
    return a * b;
}
function calDed(a, b, actions) {
        return a / b;
    
}




if (actions === "+") {
  console.log(calculator(number1, number2));
}
 else if (actions === "-") {
  natija = calMar(number1, number2);
}
 else if (actions === "*") {
  natija = calDes(number1, number2);
}
 else if (actions === "/") {
  natija = calDed(number1, number2);
}
 else {
  natija = "Notog'ri amal";
}
  

console.log("Natija", natija);