document.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.querySelector("#convertBtn");
    const swapBtn = document.querySelector("#swapBtn");
    const amountInput = document.querySelector("#amount");
    const fromSelect = document.querySelector("#from");
    const toSelect = document.querySelector("#to");
    const resultText = document.querySelector("#resultText");
    const rateInfo = document.querySelector("#rateInfo");

    // Base conversion table relative to USD
    const exchangeRates = {
        USD: 1,
        INR: 93.79,
        EUR: 0.86,
        GBP: 0.79,
        JPY: 158.29,
        AUD: 1.51,
        CAD: 1.37,
        SGD: 1.34,
        CHF: 0.79,
        CNY: 7.23,
        AED: 3.67
    };

    function convertCurrency() {
        const amountVal = parseFloat(amountInput.value);
        const from = fromSelect.value;
        const to = toSelect.value;

        if (isNaN(amountVal) || amountVal <= 0) {
            resultText.innerText = "Enter valid amount";
            rateInfo.innerText = "";
            return;
        }

        if (!exchangeRates[from] || !exchangeRates[to]) {
            resultText.innerText = "Rate unavailable";
            rateInfo.innerText = "";
            return;
        }

        // Calculation via USD base conversion
        const baseInUSD = amountVal / exchangeRates[from];
        const converted = baseInUSD * exchangeRates[to];
        const unitRate = (1 / exchangeRates[from]) * exchangeRates[to];

        const formattedResult = converted.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        const formattedUnitRate = unitRate.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        });

        resultText.innerText = `${amountVal.toLocaleString()} ${from} = ${formattedResult} ${to}`;
        rateInfo.innerText = `1 ${from} ≈ ${formattedUnitRate} ${to}`;
    }

    // Input & Button Listener Setup
    convertBtn.addEventListener("click", convertCurrency);
    amountInput.addEventListener("input", convertCurrency);
    fromSelect.addEventListener("change", convertCurrency);
    toSelect.addEventListener("change", convertCurrency);

    // Swap Currencies
    swapBtn.addEventListener("click", () => {
        const temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
        convertCurrency();
    });

    // Initial Conversion Run
    convertCurrency();
});
