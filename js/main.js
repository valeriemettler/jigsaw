var setUrlInputHandler = function() {
    $("#buttonSeturl").on('click', function(event) {
        event.stopPropagation();
        var url = $('#url').val();
        getPicSize(url);
    });
};

$(document).ready(function() {
    setUrlInputHandler();
});

var chop = function(w, h, url) {
    var pieces = cutPic(w, h);
    var tall = h / 2;
    var wide = w / 3;
    console.log("xxx");
    console.log(w,h,wide,tall);
    displayPieces(url, pieces, tall, wide);
}

var getPicSize = function(url) {
    //get image size
    var image = new Image();
    image.onload = function() {
        console.log("loaded");
        var w = image.width;
        var h = image.height;
        console.log(w);
        console.log(h);
        chop(w, h, url);
    }
    image.src = url;
    return;
};

var cutPic = function(w, h) {
    console.log(w);
    console.log(h);
    var pieces = [
        [-(w), h],
        [-(w + (w / 3)), h],
        [-((w + (w / 3)) + (w / 3)), h],
        [-(w), h / 2],
        [-(w + (w / 3)), h / 2],
        [-((w + (w / 3)) + (w / 3)), h / 2],
    ];
    console.log(pieces);
    return pieces;
};

var bkgPos = function(x, y) {
    return "" + x + "px " + y + "px";
};

var displayPieces = function(url, pieces, tall, wide) {
    console.log("displayPieces url", url);
    console.log("displayPieces pieces", pieces);
    for (var i = 0; i < pieces.length; i++) {
        var a = pieces[i][0];
        var b = pieces[i][1];
        console.log("a,b",a,b);
        console.log(bkgPos(a, b));
        $('.box' + i).css({
            "background-position": bkgPos(a, b),
            "height": tall + "px",
            "width": wide + "px",
            "background-image": "url('" + url + "')"
        });
    }
};