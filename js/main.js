var setHandlers = function() {
    $("#buttonSeturl").on('click', function(event) {
        event.stopPropagation();
        var url = $('#url').val();
        getPicSize(url);
    });
    $("#solve").on('click', function(event) {
        event.stopPropagation();
        var url = $('#url').val();
        getPicSize(url);
    });
    $("#shuffle").on('click', function(event) {
        event.stopPropagation();
        var url = $('#url').val();
        getPicSizeShuffled(url);
    });
};

$(document).ready(function() {
    setHandlers();
});

var chop = function(w, h, url) {
    var pieces = cutPic(w, h);
    render(w, h, url, pieces);
}

var chopandshuffle = function(w, h, url) {
    var pieces = cutPic(w, h);
    var shuffledpieces = shuf(pieces);
    render(w, h, url, shuffledpieces);
}

//shuffle: http://stackoverflow.com/a/12646864
var shuf = function(pieces) {
    for (var i = pieces.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }
    return pieces;
};

var render = function(w, h, url, pieces) {
    var tall = h / 2;
    var wide = w / 3;
    console.log("xxx");
    console.log(w, h, wide, tall);
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

var getPicSizeShuffled = function(url) {
    //get image size
    var image = new Image();
    image.onload = function() {
        console.log("loaded");
        var w = image.width;
        var h = image.height;
        console.log(w);
        console.log(h);
        chopandshuffle(w, h, url);
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
        console.log("a,b", a, b);
        console.log(bkgPos(a, b));
        $('.box' + i).css({
            "background-position": bkgPos(a, b),
            "height": tall + "px",
            "width": wide + "px",
            "background-image": "url('" + url + "')"
        });
    }
};