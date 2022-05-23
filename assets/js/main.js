




berechne = () => {
    const größe = document.getElementById('körpergröße').value;
    const alter = document.getElementById('alter').value;
    const gewicht = document.getElementById('gewicht').value;
    const männlich = document.getElementById('männlich');
    const weiblich = document.getElementById('weiblich');

    let kcal_grund = document.getElementById('kcal_grund');
    let kcal_gesamt = document.getElementById('kcal_gesamt');
    let kj_grund = document.getElementById('kj_grund');
    let kj_gesamt = document.getElementById('kj_gesamt');
    let selectedAktiviät = document.getElementById('selectedAktiviät').value;

    // console.log(selectedAktiviät);

    const grundumsatz_männlich = 664.7 + (13.7 * Number(gewicht)) + (5 * Number(größe)) - (6.8 * Number(alter));
    const grundumsatz_weiblich = 655.1 + (9.6 * Number(gewicht)) + (1.8 * Number(größe)) - (4.7 * Number(alter));

    let gesamtumsatz;


    if (männlich.checked) {

        if (selectedAktiviät == 0) {
            gesamtumsatz = grundumsatz_männlich * 0.95;
        }
        else if (selectedAktiviät == 1) {
            gesamtumsatz = grundumsatz_männlich * 1.2;
        }
        else if (selectedAktiviät == 2) {
            gesamtumsatz = grundumsatz_männlich * 1.5;
        }
        else if (selectedAktiviät == 3) {
            gesamtumsatz = grundumsatz_männlich * 1.7;
        }
        else if (selectedAktiviät == 4) {
            gesamtumsatz = grundumsatz_männlich * 1.9;
        }
        else if (selectedAktiviät == 5) {
            gesamtumsatz = grundumsatz_männlich * 2.2;
        }

        console.log(gesamtumsatz);
        kcal_grund.innerHTML = grundumsatz_männlich;
        kj_grund.innerHTML = (grundumsatz_männlich * 4.184).toFixed();
        kcal_gesamt.innerHTML = (gesamtumsatz).toFixed();
        kj_gesamt.innerHTML = (gesamtumsatz * 4.184).toFixed();


    }





    else if (weiblich.checked) {

        if (selectedAktiviät == 0) {
            gesamtumsatz = grundumsatz_weiblich * 0.95;
        }
        else if (selectedAktiviät == 1) {
            gesamtumsatz = grundumsatz_weiblich * 1.2;
        }
        else if (selectedAktiviät == 2) {
            gesamtumsatz = grundumsatz_weiblich * 1.5;
        }
        else if (selectedAktiviät == 3) {
            gesamtumsatz = grundumsatz_weiblich * 1.7;
        }
        else if (selectedAktiviät == 4) {
            gesamtumsatz = grundumsatz_weiblich * 1.9;
        }
        else if (selectedAktiviät == 5) {
            gesamtumsatz = grundumsatz_weiblich * 2.2;
        }

        console.log(gesamtumsatz);
        kcal_grund.innerHTML = grundumsatz_weiblich;
        kj_grund.innerHTML = (grundumsatz_weiblich * 4.184).toFixed();
        kcal_gesamt.innerHTML = gesamtumsatz.toFixed();
        kj_gesamt.innerHTML = (gesamtumsatz * 4.184).toFixed();

    }
}