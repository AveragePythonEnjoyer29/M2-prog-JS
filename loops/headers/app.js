class App
{
    runApplication()
    {
        let artists = [
            "Yung Innanet", 
            "YTCracker", 
            "Ohm-I", 
            "Eminem", 
            "$UICIDEBOY$"
        ];

        let counter = 0;
        while (counter < artists.length)
        {
            console.log(artists[counter]);

            counter++;
        }

        const headers = document.getElementsByClassName("header")
        for (let i=0; i < headers.length; i++)
        {
            headers[i].innerHTML = "I am a header"
        }
    }
}

let app = new App();
app.runApplication()