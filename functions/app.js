class App
{
    showMario()
    {
        console.log("MARIO!!");
    }

    showLaugh()
    {
        return "BWAHAHA!!!"
    }

    addition(int1, int2)
    {
        return int1 + int2
    }

    sixandnine()
    {
        return this.addition(6, 9)
    }

    runApplication()
    {
        this.showMario();
        console.log(this.showLaugh());
        console.log(this.addition(13, 37));
        console.log(this.sixandnine());
    }
}

let app = new App();
app.runApplication()