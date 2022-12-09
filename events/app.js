class App
{
    run()
    {
        console.log("Hello world!");

        const button = document.getElementById("button");
        const textbox = document.getElementById("textbox");

        // add listener
        button.addEventListener("click", () => {
            textbox.innerHTML = "heh";
        })
    }
}

const app = new App();
app.run();