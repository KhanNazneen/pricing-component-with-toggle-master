const monthlyPrice = [19.99, 24.99, 39.99];
const annualPrice = [199.99, 249.99, 399.99];

document.getElementById('switch').onclick = function() {
    let i = 0; // to loop over array of prices
    document.querySelectorAll('.price').forEach( price => {
        if(!this.checked) {
            price.innerHTML = annualPrice[i];
        } else {
            price.innerHTML = monthlyPrice[i];
        }
        i++;
    })
};