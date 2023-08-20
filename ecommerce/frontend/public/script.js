const minus1 = document.querySelector('.minus1')
const plus1 = document.querySelector('.plus1');
plus1.addEventListener('click', () => document.getElementById("number1").textContent++);
minus1.addEventListener('click', () => document.getElementById("number1").textContent--);

const minus2 = document.querySelector('.minus2')
const plus2 = document.querySelector('.plus2');
plus2.addEventListener('click', () => document.getElementById("number2").textContent++);
minus2.addEventListener('click', () => document.getElementById("number2").textContent--);

const minus3 = document.querySelector('.minus3')
const plus3 = document.querySelector('.plus3');
plus3.addEventListener('click', () => document.getElementById("number3").textContent++);
minus3.addEventListener('click', () => document.getElementById("number3").textContent--);

const add = document.querySelector(".addtoorder");
add.addEventListener("click", () => {
    document.getElementById("1").value = document.getElementById("number1").textContent;
    document.getElementById("2").value = document.getElementById("number2").textContent;
    document.getElementById("3").value = document.getElementById("number3").textContent;

}
);

const tot = document.querySelector(".confirmorder");
add.addEventListener("click", () => {
    var tAmount;
    tAmount = parseInt(document.getElementById("1").value) * 500 + parseInt(document.getElementById("2").value) * 300 +
        parseInt(document.getElementById("3").value) * 1000;
    document.getElementById("total").value = tAmount;
}
);


