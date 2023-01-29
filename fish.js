background(89, 216, 255);

var drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor) {

    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength / 4;
    var tailHeight = bodyHeight / 2;
    triangle(centerX - bodyLength / 2, centerY,
        centerX - bodyLength / 2 - tailWidth, centerY - tailHeight,
        centerX - bodyLength / 2 - tailWidth, centerY + tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
};

for (var i = 0; i < 10; i++) {
    var bodyHeight;
    var bodyLength;
    var centerX = random(0, 400);
    var centerY = random(0, 400);
    var a = random(10, 100);
    var b = random(10, 100);
    if (a < b) {
        bodyHeight = a;
        bodyLength = b;
    } else {
        bodyHeight = b;
        bodyLength = a;
    }
    var myColor = color(random(0, 255), random(0, 255), random(0, 255));
    drawFish(centerX, centerY, bodyLength, bodyHeight, myColor);
}


var bubbleSizes = [10, 15, 20, 25];


// makes bubbles when mouse is pressed
var lastBubbleSize = 0;
function getBubbleSize() {
    return bubbleSizes[lastBubbleSize++ % bubbleSizes.length];
}


mousePressed = function () {
    fill(255, 255, 255);
    var bubbleSize = getBubbleSize();
    ellipse(mouseX, mouseY, bubbleSize, bubbleSize);
};


