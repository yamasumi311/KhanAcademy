function house(processingJS) {
    with (processingJS) {
        size(400, 400);

        var xPositions = [];
        var yPositions = [];
        var dropColors = [];
        var speeds = [];

        for (var i = 0; i < 100; i++) {
            xPositions.push(random(1, 399));
            yPositions.push(random(1, 399));
            var dropColor = color(random(0, 255), random(0, 255), random(0, 255));
            dropColors.push(dropColor);
            speeds.push(random(1, 5));
        }

        draw = function () {
            background(204, 247, 255);

            noStroke();

            for (var i = 0; i < xPositions.length; i++) {
                fill(dropColors[i]);
                ellipse(xPositions[i], yPositions[i], 10, 10);
                /* if condition version
                    if (yPositions[i] > 400) {
                        yPositions[i] = 0;    
                    } 
                    else {
                        yPositions[i] += speeds[i];
                    }
                */
                // module(remainder%) version
                yPositions[i] = speeds[i] + yPositions[i] % 400;
            }

        };
    }
}

var canvas = document.getElementById("mycanvas");
new Processing(canvas, house);

