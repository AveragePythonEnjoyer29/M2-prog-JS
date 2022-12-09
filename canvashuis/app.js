class App
{
    factor = 100
    canvas = document.getElementById("canvasId");
    g = this.canvas.getContext("2d");

    drawRoof()
    {
        this.g.beginPath();
        this.g.fillStyle = "red";

        this.g.moveTo(
            3 * this.factor,
            1 * this.factor
        );

        this.g.lineTo(
            2 * this.factor,
            3 * this.factor
        );

        this.g.lineTo(
            6 * this.factor,
            4 * this.factor
        );

        this.g.lineTo(
            7 * this.factor,
            2 * this.factor
        );

        this.g.closePath();
        this.g.stroke();
        this.g.fill();
    }

    runApplication()
    {
        this.drawRoof();        
    } 
}

let app = new App();
app.runApplication();