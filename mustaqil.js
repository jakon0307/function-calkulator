function calculator(a, b, amal) {
    if (amal === "+"){
        return a + b;

    } else if (amal === "-") {
    return a - b

    } else if (amal === "*") {
    return a * b;
    }else if (amal === "/") {
        return a / b;
    }else {
        return "Nato'g'ri amal kiritildi"
    }
}

var son1 = parseFloat(prompt("1-sonni kriting"));
var amal = prompt("Amallarni kiriting M: +, -, *, /");
var son2 = parseFloat(prompt("2-sonni kriting"));

var natija = calculator(son1, son2, amal);
console.log("Natija", natija);
