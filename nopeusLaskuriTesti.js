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
    // Hyvää matkaa tulee siis siinä vaiheessa, jos auton nopeus on alle sen, mitä käyttäjä syöttää tieNopeus-kenttään
    
    else if (nopeus > pieniYli){
        print = "Määrää liikennesakko 100e";
      //100 e mätkähtää jos ajat 1-10km/h ylinopeutta
    }
   else if (nopeus > vahanYli){
        print = "Määrää liikennesakko 170e";
       //170e sakkoa jos ajat 11-15km/h ylinopeutta
   }     
 else  if (nopeus > paljonYli){
    print = "Määrää liikennesakko 200e";
     //jos ajat 16-20km/h ylinopeutta
 }
else if (nopeus > tieNopeus) {
    print = " Tarkista tulot ja määrää päiväsakko";
    //mikäli olet niin idiootti, että ajat yli 20km/h karkuun ja jäät kiinni
}
document.getElementById("tulostusAlue").innerHTML = print;
}
