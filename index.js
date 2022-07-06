function run() {
    let gewicht = document.querySelector('#gewicht').value;
    gewicht = parseFloat(gewicht);

    let groesse = document.querySelector('#groesse').value;
    groesse = parseFloat(groesse);

    let bmi = gewicht / groesse / groesse;
    bmi = bmi.toFixed(2)

    document.querySelector('#ausgabe').innerHTML = "Dein BMI beträgt:" + bmi ;
    
}