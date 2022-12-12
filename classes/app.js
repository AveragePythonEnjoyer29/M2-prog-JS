class Plant
{
    constructor(naam)
    {
        this.name = naam
        this.dino = false
    }
}

class Dino
{
    constructor(name, isvleeseter, age)
    {
        this.name = name;
        this.vleeseter = isvleeseter;
        this.age = age;

        this.dino = true
        this.leeft = true;
        this.honger = true;
    }

    eat(object)
    {
        if (object.dino == true)
        {
            object.leeft = false;
            console.log(`nom nom nom, ${object.name} is nu dood`);
        } else {
            console.log(`nom nom nom, ${object.name} is nu opgegeten`)
        }
    }

    roar(level)
    {
        if (level == "soft")
        {
            console.log("raaa");
        } else if (level == "medium") {
            console.log("raaaaaaaaaaaa");
        } else if (level == "loud") {
            console.log("RAAAAAAAAAAAAAAAAAAAAAA");
        }
    }
}

class App
{
    constructor(objects)
    {
        this.objects = objects;
    }

    run()
    {

        const trex = this.objects[0];
        const velociraptor = this.objects[1];
        const parasaur = this.objects[2];
        const plant = this.objects[3]

        trex.roar("loud");
        velociraptor.roar("medium");
        parasaur.roar("low");

        trex.eat(velociraptor);
        parasaur.eat(plant);
    }
}

const objects = [
    new Dino("T-Rex", true, 20),
    new Dino("Velociraptor", true, 41),
    new Dino("parasaur", false, 1),
    new Plant("rectum corvo")
]

const app = new App(objects);

app.run();