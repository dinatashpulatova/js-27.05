let square = document.getElementById("square")
let depth = document.getElementById("depth")
let price = document.getElementById("price")
let but = document.getElementById("but")
let total = document.getElementById("total")

but.onclick = f1

function f1() {
console.log(square.value);
console.log(depth.value);
console.log(price.value);
let result = ((square.value * depth.value) * price.value);
total.innerText = "стоимость фундамента " + result + "₽"
}


let quantity = document.getElementById("quantity")
let but2 = document.getElementById("but2")
let total2 = document.getElementById("total2")

but2.onclick = f2

function f2(){
console.log(quantity.value);
let price2 = 1500;
if (quantity.value<100){
    let result2 = (quantity.value*price2)
    total2.innerText = "сумма покупки без скидки = " + result2 + "₽";
}
else if ((quantity.value>=100) && (quantity.value<200)){
    let result2 = ((quantity.value*price2)*0.95)
    total2.innerText = "сумма покупки скидкой 5% = " + result2 + "₽";
}
else if ((quantity.value>=200) && (quantity.value<300)){
    let result2 = ((quantity.value*price2)*0.9)
    total2.innerText = "сумма покупки скидкой 10% = " + result2 +"₽";
}
else if (quantity.value>=300){
    let result2 = ((quantity.value*price2)*0.8)
    total2.innerText = "сумма покупки скидкой 20% = " + result2 + "₽";
}
}



