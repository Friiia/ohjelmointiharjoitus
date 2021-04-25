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
	  
	  
	  if (nopeus >= 61)
		  toimintaohje = "Määrää liikennevirhemaksu 70e"
		
	  }
	  else if (nopeus <= + 15){
		toimintaohje = "Määrää liikennevirhemaksu 140e"
	  
	  }
		  else if (nopeus <= + 20){
			toimintaohje = "Määrää liikennevirhemaksu 170e"
		  
	  }
		else
{
  		toimintaohje = "Tarkista tulot ja määrää päiväsakko";
}
    document.getElementById("tulostusAlue").innerHTML = toimintaohje;
}
