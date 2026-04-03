    function con(){
    let amount=document.querySelector("#amount").value;
    console.log(amount);
    let from=document.querySelector("#from").value;
    console.log(from);
    let to=document.querySelector("#to").value;
    console.log(to);
    let rate = {
        USD: 1,      INR: 93.79,   EUR: 0.86,   GBP: 0.79,   JPY: 158.29,
        AUD: 1.51,   CAD: 1.37,   SGD: 1.34,   CHF: 0.79,   CNY: 7.23,
        HKD: 7.82,   NZD: 1.66,   BRL: 5.06,   RUB: 92.4,   ZAR: 18.9,
        MXN: 16.6,   PHP: 56.1,   THB: 36.4,   SAR: 3.75,   AED: 3.67
    };
    console.log(rate);
    let result=(amount/rate[from])*rate[to];
    console.log(result);
    document.querySelector("#resultText").innerText=`${amount} ${from} = ${result} ${to}`;
}
