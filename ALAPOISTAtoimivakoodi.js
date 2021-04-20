function laske()
{  
    document.getElementById("tulostusAlue").innerHTML="";

	  let nopeus = parseInt(document.getElementById("nopeus").value, 10);
    let tieNopeus = parseInt(document.getElementById("tieNopeus").value, 10);
    
    let toimintaohje = "";
    
		if (nopeus <= tieNopeus)
		{
	    toimintaohje = "Toivota hyvää matkaa!";

		}
    else if (tieNopeus >=60){
      toimintaohje += "1-10km/h 70euroa"
    }
    else if (nopeus <= tieNopeus + 20){
      toimintaohje = "Määrää liikennevirhemaksu 170e!";
    }
    else if (nopeus <=tieNopeus +10){
      toimintaohje = "Määrää liikennevirhemaksu 70e";
    }
        else if (tieNopeus <= 60) {
		    toimintaohje += "1-10 km/h 100 euroa!";
		}
    else if (nopeus <= tieNopeus + 20)
        {
          toimintaohje = "määrää liikennevirhemaksu! 200e";
          }
    else if (nopeus <= tieNopeus + 10)
        {
            toimintaohje = "Määrää liikennevirhemaksu! 100e";
          }
    
        else {
  		toimintaohje = "sakko";
		}
	

	document.getElementById("tulostusAlue").innerHTML = toimintaohje;
    }