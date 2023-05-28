const input1 = document.getElementById("first-input");
const input2 = document.getElementById("second-input");
const cur1 = document.getElementById("first-currency");
const cur2 = document.getElementById("second-currency");

const convrate = document.getElementById("convrate");
const curswap = document.getElementById("swap-currency");

function currencycalc() {
    const currency1 = cur1.value;
    const currency2 = cur2.value;
    fetch(`https://v6.exchangerate-api.com/v6/3f4f1b4eba6eaab21a2f74a2/latest/${currency1}`)
    .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currency2];
            convrate.innerText = `1 ${currency1} = ${rate} ${currency2}`;
            input2.value = (input1.value * rate).toFixed(2)
        });
}

cur1.addEventListener("change", currencycalc);
cur2.addEventListener("change", currencycalc);
input1.addEventListener("input", currencycalc);
input2.addEventListener("input", currencycalc);
curswap.addEventListener("click", () => {
    const via = cur1.value;
    cur1.value = cur2.value;
    cur2.value = via;
    currencycalc();
})