function calCalc() {
    let size = Number(document.querySelector('.size').value);
    let weight = Number(document.querySelector('.weight').value);
    let age = Number(document.querySelector('.age').value);
    let male = document.querySelector('#male');
    let pal = Number(document.querySelector('#myList').value);
    console.log(size, weight, age, pal);

    if (male.checked) {
        let maleBmr = Math.round(664.7 + (13.7 * weight) + (5 * size) - (6.8 * age));
        let maleTotal = Math.round(maleBmr * pal);
        document.querySelector('.result__bmr').innerHTML = maleBmr;
        document.querySelector('.result__total').innerHTML = maleTotal;
        console.log("male");
        console.log(maleBmr);
    } else {
        let femBmr = Math.round(655.1 + (9.6 * weight) + (1.8 * size) - (4.7 * age));
        let femTotal = Math.round(femBmr * pal);
        document.querySelector('.result__bmr').innerHTML = femBmr;
        document.querySelector('.result__total').innerHTML = femTotal;
        console.log("female");
        console.log("bmr= " + femBmr);
        console.log("total" + femTotal);
    }
}