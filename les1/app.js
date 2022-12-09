class App
{
    runApplication()
    {
        let appNaam = "M2-prog-JS";
        let versienummer = 0.9;
        let versiedatum = "Mon 21 November 2022";
        let auteur = "Oscar/AveragePythonEnjoyer29";
        let copyright = "Copyright Oscar 2022";
        let distributeur = "Oscar Industries";
        let darkmode = true;
        let license = "GPL-3.0 license";

        console.log(appNaam);
        console.log(versienummer + " " + versiedatum);
        console.log(auteur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
        console.log("Licensed under " + license)
    }
}

let app = new App();
app.runApplication();