function laske(){
    let print = "";
    document.getElementById("tulostusAlue").innerHTML="";
    let nopeus = document.getElementById("nopeus").value;
    let tieNopeus = document.getElementById("tieNopeus").value;
    let pieniYli = tieNopeus + 10;
    let vahanYli = tieNopeus + 15;
    let paljonYli = tieNopeus + 20;
    
    if (nopeus < tieNopeus){
    print = " Hyvää matkaa";
    }
    else if (nopeus > pieniYli){
        print = "Määrää liikennesakko 100e";
       
    }
   else if (nopeus > vahanYli){
        print = "Määrää liikennesakko 170e";
   }     
 else  if (nopeus > paljonYli){
    print = "Määrää liikennesakko 200e";
 }
else if (nopeus > tieNopeus) {
    print = " Tarkista tulot ja määrää päiväsakko";
}
document.getElementById("tulostusAlue").innerHTML = print;
}
