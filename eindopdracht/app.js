const canvas = document.getElementById("draw");
const g = canvas.getContext("2d");

g.canvas.width  = window.innerWidth;
g.canvas.height = window.innerHeight;

// colors
const black = "#000000";
const red = "#FF0000";
const yellow = "#FFFF00";
const blue = "#0000FF";
const brown = "#3A1F04";
const white = "#FFFFFF";
const orange = "#CC5500";
const green = "#228B22";
const gold = "#D4AF37";

function randChoice(list) {
    let index = randInt(
        0,
        list.length
    );

    return list[index];
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const xmas = [
    red,
    yellow,
    green,
    gold
];

const treeshades = [
    "#454B1B",
    "#228B22",
    "#4CBB17",
    "#335814",
    "#384a38"
];

const xmas_greeting = randChoice([
    "Merry chrisler",
    "Merry xmas",
    "Merry christmas",
    "Merry chrism",
    "Happy chridmus",
    "Merry chrismuh",
    "Merry crisis"
])

class Snowman {

    circle(x, y, factor, color) {
        g.beginPath();
        g.fillStyle = color;

        g.arc(
            x, 
            y, 
            10 * factor, 
            0, 
            2 * Math.PI
        );

        g.fill();
        g.stroke(); 
    }

    run(x, y, factor) {
        this.circle(x, y + .05 * factor , 1 * factor, "white");
        this.circle(x, y + 23.5 * factor, 1.5 * factor, "white");
        this.circle(x, y + 47.5 * factor, 2 * factor, "white");

        this.circle(x - 3.5 * factor, y - 3.5 * factor, 0.2 * factor, "black");
        this.circle(x + 3.5 * factor, y - 3.5 * factor, 0.2 * factor, "black");
        this.circle(x, y, 0.2 * factor, "orange");
    }
}

class House {

    run(x, y, factor, roof, lwall, rwall) {

        // roof
        g.beginPath();
        g.moveTo(x + 3 * factor, y +  1 * factor);
        g.lineTo(x + 7 * factor, y +  2 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 2 * factor, y +  3 * factor);
        g.lineTo(x + 3 * factor, y +  1 * factor);

        g.fillStyle = roof;
        g.fill();
        g.closePath();

        // left wall
        g.beginPath();
        g.moveTo(x + 2 * factor, y +  3 * factor);
        g.lineTo(x + 2 * factor, y +  5 * factor);
        g.lineTo(x + 6 * factor, y +  6 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 2 * factor, y +  3 * factor);
        
        g.fillStyle = lwall;
        g.fill();
        g.closePath();

        // right wall
        g.beginPath();
        g.fillStyle = rwall;
        g.moveTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 6 * factor, y +  6 * factor);
        g.lineTo(x + 8 * factor, y +  5 * factor);
        g.lineTo(x + 8 * factor, y +  3 * factor);
        g.lineTo(x + 7 * factor, y +  2 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);

        g.closePath();
        g.stroke();
        g.fill();
    }
}

class Tree {
    triangle(x, y, factor, color) {

        g.fillStyle = color;
        g.beginPath();
        g.moveTo(
            x - 5 * factor, 
            y
        );

        g.lineTo(
            x + 5 * factor, 
            y
        );

        g.lineTo(
            x, 
            y - 7.5 * factor
        );

        g.fill();
    }

    run(x, y, factor, size) {
        const jump = 20;
        const color = randChoice(treeshades);

        let bottom = 0;
        for (let i = 0; i < size; i++) {

            bottom = y + jump + (i * 20);

            this.triangle(
                x, 
                bottom, 
                factor + i, 
                color
            );
        }

        // draw wood
        g.beginPath();
        g.fillStyle = brown;

        g.rect(
            x-10, bottom,
            20,
            randInt(50, 80) // adds some diversity
        )

        g.closePath();
        g.stroke();
        g.fill();
    }
}

class Cart
{

    renderText() {
        g.fillStyle = randChoice(xmas);

        g.beginPath();
        g.font = "35px Sans-Serif";

        g.fillText(xmas_greeting, 25, 35);
    }

    renderFrame() {

        // draw houses
        let house = new House();
        house.run(100, 100, 25, green, red, blue);
        house.run(400, 400, 25, yellow, brown, black);
        house.run(121, 517, 25, gold, red, orange);
        house.run(121, 517, 25, gold, red, orange);

        // draw snow fellas
        let snowfella = new Snowman();
        snowfella.run(200, 200, 1.5);
        snowfella.run(570, 205, 1.7);

        const cords = [
            [100, 120],
            [137, 201],
            [400, 400],
            [490, 388],
            [296, 200],
            [200, 305],
            [503, 160],
            [807, 102],
            [826, 401]
        ];

        // draw the tree for every position
        let t = new Tree();
        for (let i = 0; i < cords.length; i++) {
            let xpos = cords[i][0];
            let ypos = cords[i][1];

            t.run(
                xpos,
                ypos,
                4,
                randInt(5, 9)
            );
        }
    }

    frame() {
        this.renderFrame();

        setInterval(
            this.renderText,
            200
        );
    }
}

const cart = new Cart();
cart.frame();