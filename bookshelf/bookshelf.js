function bookshelf(processingJS) {
    with (processingJS) {
        size(400, 400);


        background(222, 217, 211);

        var books = [
            {
                title: "cute marcimus",
                art: getImage("avatars/marcimus-orange"),
                artSize: 50,
                stars: 5
            }, {
                title: "Mr Pants with hat !!",
                art: getImage("avatars/mr-pants-with-hat"),
                stars: 3
            }, {
                title: "Mr Pink !!",
                art: getImage("avatars/mr-pink"),
                stars: 2
            },
            {
                title: "orange juice squad",
                art: getImage("avatars/orange-juice-squid"),
                stars: 4
            }, {
                title: "Old space man",
                art: getImage("avatars/old-spice-man-blue"),
                stars: 1
            }, {
                title: "Purple pi teal",
                art: getImage("avatars/purple-pi-teal"),
                stars: 5
            }, {
                title: "Spunky sam green",
                art: getImage("avatars/spunky-sam-green"),
                stars: 3
            }
        ];

        // draw shelf
        for (var i = 0; i < 4; i++) {
            fill(173, 117, 33);
            rect(10, 120 + i * 130, 340, 10);
            fill(105, 73, 34);
            quad(10, 120 + i * 130, 40, 100 + i * 130, 380, 100 + i * 130, 350, 120 + i * 130);
            quad(380, 100 + i * 130, 350, 120 + i * 130, 350, 130 + i * 130, 380, 110 + i * 130);
        }

        // draw books
        for (var i = 0; i < books.length; i++) {

            // color
            var myColor = color(random(0, 255), random(0, 255), random(0, 255));
            fill(myColor);

            // book
            var bookWidth = 90;
            var bookHeight = 100;
            var bookPositionX = i % 3 * 110;
            var bookPositionY = Math.floor(i / 3) * 130;
            rect(31 + bookPositionX, 9 + bookPositionY, bookWidth, bookHeight);
            fill(255, 255, 255);
            rect(29 + bookPositionX, 11 + bookPositionY, bookWidth, bookHeight);
            rect(27 + bookPositionX, 13 + bookPositionY, bookWidth, bookHeight);
            fill(myColor);
            rect(25 + bookPositionX, 15 + bookPositionY, bookWidth, bookHeight);

            // title
            fill(255, 255, 255);
            text(books[i].title, 30 + bookPositionX, 25 + bookPositionY, 90, 100);

            // image
            var artSize = 50;
            var artX = 50 + bookPositionX;
            var artY = 50 + bookPositionY;
            image(books[i].art, artX, artY, artSize, artSize);

            // stars
            for (var star = 0; star < books[i].stars; star++) {
                image(getImage("cute/Star"), 30 + star * 15 + bookPositionX, 95 + bookPositionY, 15, 20);
            }
        }
    }
}

var canvas = document.getElementById("mycanvas");
new Processing(canvas, bookshelf);
