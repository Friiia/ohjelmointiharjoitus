function laske(){
    let print = "";
    document.getElementById("tulostusAlue").innerHTML=""
    var nopeus = document.getElementById("nopeus").value;
    var tieNopeus = document.getElementById("tieNopeus").value;
    var nopeusOli = nopeus < 60;
    let pieniYli = tieNopeus + 10;
    let vahanYli = tieNopeus + 15;
    let paljonYli = tieNopeus + 20;
    
    if (nopeus == pieniYli){
        print = "Määrää liikennesakko 100e";
       }

       else if (nopeus == vahanYli){
        print = "Määrää liikennesakko 170e";
                }
    else if (nopeus == paljonYli){
    print = "Määrää liikennesakko 200e";
    }
else if (nopeus > tieNopeus) {
    print = " Tarkista tulot ja määrää päiväsakko";
    }
    else {
        print = " Hyvää matkaa";
        }

document.getElementById("tulostusAlue").innerHTML = print;
}