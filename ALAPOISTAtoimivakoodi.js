function laske()
{  
    document.getElementById("tulostusAlue").innerHTML="";

	  var nopeus = document.getElementById("nopeus").value;
    var  tieNopeus = document.getElementById("tieNopeus").value;
    var ylitys = nopeus - tieNopeus;
    var toimintaohje = "";
    
    if (tieNopeus <= 60 && ylitys <= 0){
      toimintaohje ="Saat mennä";
    }
    else if (tieNopeus <= 60 && ylitys >= 1 && ylitys <= 10){
      toimintaohje = "Määrää liikennevirhemaksu 100e";
    }
    else if (tieNopeus <= 60 && ylitys >= 11 && ylitys <= 15){
      toimintaohje ="Määrää liikennevirhemaksu 170e"
    }
    else if (tieNopeus <= 60 && ylitys >=16 && ylitys <= 20){
toimintaohje ="Määrää liikennevirhemaksu 200e"
}
//tällä alkuperäisellä hankalammalla mallilla, jossa eka tarkistettiin ylinopeus (eli + 10km tuli ennen kun määriteltiin nopeusraja) ja sen jälkeen nopeusrajoitus, sain sen tähän saakka toimimaan, kunnes nopeusrajoitus vaihtui yli 60km/h
//aikaisemmassa mallissa siis oli iffejä ja else iffejä sisäkkäin.

if (tieNopeus >=61 && ylitys <=0){
  toimintaohje ="Saa mennä"
    }
    else if (tieNopeus >=61 && ylitys >=1 && ylitys <=10){
      toimintaohje ="Määrää liikennevirhemaksu 70"
        }
        else if (tieNopeus >=61 && ylitys >=11 && ylitys <=15){
          toimintaohje ="Määrää liikennevirhemaksu 140"
            }
            else if (tieNopeus >=61 && ylitys >=16 && ylitys <=20){
              toimintaohje ="Määrää liikennevirhemaksu 170e"
            }
            else if (ylitys > 20){
              toimintaohje ="Tarkista tulot ja määrää päiväsakko";
            }
           //koitin tähän ensin elseä, mutta se ei toiminut, vaan päiväsakko meinasi tulla liiankin helposti, joten sain ratkaistua sen else iffillä

	document.getElementById("tulostusAlue").innerHTML = toimintaohje;
}

//Siis mitä ihmettä, mä kamppailin tän koodin kanssa melkein koko kuukauden, kysyin apua jo koodanneilta, ja yritin katsoa mm. w#schoolista apuja tähän.
//Loppuenlopuksi tsekkasin vielä kertaalleen meidän oppimateriaalin ja ratkaisin tän 3 päivää ennen deadlinea :D
//olin siis ensin ajatellut tämän itsekin liian hankalasti, samoin, kun kaikki apujoukkoni mietti tän liian hankalasti
// otin siis mallin täältä: https://codepen.io/jess5280/pen/xVJPZd josta tajusin lopulta, miten tuo kannattaisi tehdä,
