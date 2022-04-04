

// *****************************GLOBALVAR*********************
let arraySideBar =[];
var speed = 20;

// *****************************FUNCTION*********************
//source : https://graphiste.com/blog/30-animations-de-texte-pour-surprendre-vos-visiteurs => SAMPLE TYPING EFFECT a 80% de la page
function typeEffectWrite(stringToAdd, element, speed)
 {
    var text = stringToAdd;//ajoute le contenue de Element du html dans la var text 
    element.innerHTML = ""; //clear le html element donc le text 
    
    var i = 0; // set la variable index a 0 pour le decompte 

    //creation de l'interval et de l'ajout des lettre au fur et a meesure 
    //methode utilisé : setInterval(lambda function,timer[arg...])
    var timer = setInterval(function() {
      if (i < text.length) 
      {
        element.append(text.charAt(i));
        i++;
      } 
      else
      {
        clearInterval(timer);
      }
    }, speed);
  }

  //ma modification de ma function de base pour la suppression
  function typeEffectSuppr(element, speed) {
    var text = element.innerHTML;
    
    var i = text.length-1; 

    var timer = setInterval(function() {
        
      if (i >= 0 )
      {
        var newTex = text.substr(0, i);
        element.innerHTML = newTex;
        i--;
      } 
      else
      {
        clearInterval(timer);
      }
    }, speed);
  }

    //Active le switch pour ouvrir et fermé la sideBar
    function SwitchOpenCloseNavBar() {
    document.getElementById("main").style.transition = "all 1s";
    let size = "200px";
    let currentSize = document.getElementById("MainSideBar").style.width;
    console.log(currentSize);
    var textSideBar = document.querySelectorAll('.LinkSideBar a');
    if(arraySideBar.length === 0)
    {
        for (let i = 0; i < textSideBar.length; i++)
        {
            arraySideBar[i] = textSideBar[i].innerHTML;
        }    
    }
    if(currentSize <= "0px")
    {
        console.log("open");
        document.getElementById("MainSideBar").style.width = size;
        document.getElementById("main").style.marginLeft = size;
        document.getElementById("Button_Close_Side_Bar").style.transform ="translateX(200px)";
       
        for (let i = 0; i < textSideBar.length; i++)
        {
            typeEffectWrite(arraySideBar[i],textSideBar[i], speed +50);
        }
    }
    else 
    {
        for (let i = 0; i < textSideBar.length; i++)
        {
            typeEffectSuppr(textSideBar[i],speed);
        }
        console.log("close");
        document.getElementById("MainSideBar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("Button_Close_Side_Bar").style.transform ="translateX(-200px)";
    }
  }

  