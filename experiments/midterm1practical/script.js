function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let sum = n1 + n2;
    let difference = n1 - n2;
    let product = n1 * n2;
    document.getElementById("result").innerHTML =
        "Sum = " + sum + "<br>" +
        "Difference = " + difference + "<br>" +
        "Product = " + product;
}