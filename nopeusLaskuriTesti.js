function laske()
{  
    document.getElementById("tulostusAlue").innerHTML="";

	  let nopeus = parseInt(document.getElementById("nopeus").value, 10);
    let tieNopeus = parseInt(document.getElementById("tieNopeus").value, 10);
    let toimintaohje = "";
    
    
    if (nopeus <= tieNopeus)

    toimintaohje ="toivota hyvää matkaa!"

    else if (nopeus <= tieNopeus + 10){
    toimintaohje ="Määrää liikennevirhemaksu 70e"
    
    if (tieNopeus >= 60)
    
        toimintohje += ""

   else  if (nopeus <= tieNopeus + 15){
    toimintaohje ="Määrää liikennevirhemaksu 140"
    }
    else if (nopeus <= tieNopeus + 20)
    toimintaohje =" Määrää liikennevirhemaksu 170e"
    }
		if (nopeus <= tieNopeus)
		{
	    toimintaohje = "Toivota hyvää matkaa!";
		}
		else if (nopeus <= tieNopeus + 10)
		{
    	toimintaohje = "Määrää liikennevirhemaksu 100e";

    	if (tieNopeus <= 60)
		    toimintaohje += ""
        }
        else if (nopeus <= tieNopeus +15)
        {
          toimintaohje = "Määrää liikennevirhemaksu 170e";
          }
		else if (nopeus <= tieNopeus + 20)
	  {
  		toimintaohje = "Määrää liikennevirhemaksu!200e";
		}
		else
		{
  		toimintaohje = "Tarkista tulot ja  määrää päiväsakko!";
		}
	

	document.getElementById("tulostusAlue").innerHTML = toimintaohje;
}
