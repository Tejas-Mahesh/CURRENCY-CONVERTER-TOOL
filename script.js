document.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.querySelector("#convertBtn");
    const swapBtn = document.querySelector("#swapBtn");
    const amountInput = document.querySelector("#amount");
    const fromSelect = document.querySelector("#from");
    const toSelect = document.querySelector("#to");
    const resultText = document.querySelector("#resultText");

    const rate = {
        USD: 1,      INR: 93.79,  EUR: 0.86,   GBP: 0.79,   JPY: 158.29,
        AUD: 1.51,   CAD: 1.37,   SGD: 1.34,   CHF: 0.79,   CNY: 7.23,
        HKD: 7.82,   NZD: 1.66,   BRL: 5.06,   RUB: 92.4,   ZAR: 18.9,
        MXN: 16.6,   PHP: 56.1,   THB: 36.4,   SAR: 3.75,   AED: 3.67,
        SEK: 10.5,   NOK: 10.8,   KRW: 1380,   TRY: 32.5
    };

    function convertCurrency() {
        const amountVal = parseFloat(amountInput.value);
        const from = fromSelect.value;
        const to = toSelect.value;

        if (isNaN(amountVal) || amountVal <= 0) {
            resultText.innerText = "Please enter a valid amount";
            return;
        }

        if (!rate[from] || !rate[to]) {
            resultText.innerText = "Exchange rate unavailable";
            return;
        }

        const calculated = (amountVal / rate[from]) * rate[to];
        const formattedResult = calculated.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        resultText.innerText = `${amountVal} ${from} = ${formattedResult} ${to}`;
    }

    // Event listener for Convert button
    convertBtn.addEventListener("click", convertCurrency);

    // Swap functionality
    swapBtn.addEventListener("click", () => {
        const temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
        convertCurrency();
    });

    // Run initial conversion on load
    convertCurrency();
});
