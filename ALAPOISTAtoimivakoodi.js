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
    else if (nopeus <= tieNopeus + 10)
		{
    	toimintaohje = "Määrää liikennevirhemaksu";
	
    	if (tieNopeus <= 60)
		    toimintaohje += "100"
		}
    
      else if (nopeus <= tieNopeus + 15)
	  {
  		toimintaohje = "170";
		}
		else if (nopeus <= tieNopeus + 20)
	  {
    	toimintaohje = "200";
    
    	if (tieNopeus >= 60){
		    toimintaohje += " Määrää liikennevirhemaksu!!"
    }
    else if (nopeus <= tieNopeus + 10){
      toimintaohje = "70e"
    }
  else if (nopeus <= tieNopeus + 15){
toimintaohje ="140e";
  }
  else if (nopeus <= tieNopeus + 20){
    toimintaohje="170e"
  }}
		else
{
  		toimintaohje = "Tarkista tulot ja määrää päiväsakko";
		}
    document.getElementById("tulostusAlue").innerHTML = toimintaohje;
  }
