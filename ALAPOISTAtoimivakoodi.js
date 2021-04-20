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
    if (tieNopeus <= 60) {
      toimintaohje += "";
  }
  else if (nopeus <= tieNopeus + 20)
      {
        toimintaohje = "200";
        }
  else if (nopeus <= tieNopeus +15){
toimintaohje="170e"

        }
if (nopeus <= tieNopeus + 10)
      {
          toimintaohje = "100e";
        }
   if (tieNopeus >= 60){
      toimintaohje += ""
   }
   
     else if (nopeus <= tieNopeus + 20)
        {
          toimintaohje = "määrää liikennevirhemaksu! 170e";
        }
       else  if (nopeus <= tieNopeus +15){
          toimintaohje = "Määrää liikennevirhemaksu 140e";
        }
  if (nopeus <= tieNopeus + 10)
          {
            toimintaohje = "Määrää liikennevirhemaksu 70e!";
          
          }
         
        else {
  		toimintaohje = "Tarkista tulot ja määrää päiväsakko!";
		
        }

	document.getElementById("tulostusAlue").innerHTML = toimintaohje;
        }
