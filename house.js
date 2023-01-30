function house(processingJS) {
    with (processingJS) {
        size(400, 400);

        background(219, 255, 255);
        // roof
        fill(174, 180, 214);
        triangle(200, 28, 350, 150, 50, 150);

        // body
        fill(255, 255, 255);
        rect(60, 150, 280, 207);

        // wall
        for (var y = 0; y < 10; y++) {
            for (var x = 0; x < 13; x++) {
                var pattern = x + y;
                if (pattern % 3 === 0) {
                    fill(110, 66, 66);
                } else {
                    fill(143, 75, 75);
                }
                rect(x * 20 + 60, y * 20 + 150, 20, 10);
                rect(x * 20 + 70, y * 20 + 160, 20, 10);
            }
            // left half bricks
            rect(60, 160 + y * 20, 10, 10);
            // right half bricks
            rect(330, 160 + y * 20, 10, 10);
            // right full bricks
            rect(320, 150 + y * 20, 20, 10);
        }

        // window
        fill(198, 221, 222);
        for (var y = 0; y < 6; y++) {
            for (var x = 0; x < 7; x++) {
                rect(70 + x * 40, 157 + y * 30, 25, 25);
            }
        }

        // doorS
        fill(120, 80, 19);
        rect(180, 275, 40, 77);

        // grass
        noStroke();
        fill(103, 168, 99);
        for (var i = 0; i < 20; i++) {
            triangle(i * 20, 350, 10 + i * 20, 330, 20 + i * 20, 350);
        }
        rect(0, 350, 400, 50);

    }
}

var canvas = document.getElementById("mycanvas");
new Processing(canvas, house);
