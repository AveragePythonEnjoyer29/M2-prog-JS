const kleuren = [
    "#FF0000",
    "#00FF00",
    "#0000FF"
]

class App
{
    tekenCirkel(g, xpos, ypos)
    {
        xpos *= 30
        ypos *= 30
        const size = Math.random() * 100;
        const color = kleuren[Math.floor(Math.random() * kleuren.length)];

        console.log(`Een cirkel aan het tekenen op (${xpos}, ${ypos}) met kleur ${color}`);

        g.beginPath();
        g.fillStyle = color;

        g.arc(
            xpos,
            ypos,
            size,
            xpos,
            0,
            Math.PI*2
        );

        g.fill()
        g.stroke();
        g.closePath();
    }

    run()
    {
        const canvas = document.getElementById("canvas");
        const g = canvas.getContext("2d");

        for (let i = 0; i < 200; i++)
        {
            const randx = i * Math.random();
            const randy = i * Math.random();

            this.tekenCirkel(g, randx, randy);
        }
    }
}

let app = new App();
app.run();