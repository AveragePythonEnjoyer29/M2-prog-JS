class App
{
    run()
    {
        let title = document.getElementById("newstitle")
        let random = Math.random();

        // voor het debuggen
        console.log(random);

        let color = "";

        // kies een random kleur
        if      (random == 0)                  { color = "red";    } 
        else if (random < 0.2)                 { color = "blue";   }
        else if (random > 0.2 && random < 0.6) { color = "purple"; }
        else if (random > 0.6)                 { color = "yellow"; } 
        else                                   { color = "pink";   }

        title.style.backgroundColor = color;
    }
}

const app = new App();
app.run();