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

var chop = function(w, h) {
    $('.bigbox').css({
        "width": w + 32,
        "height": h - 20
    });
    var pieces = cutPic(w, h);
    displayPieces(url, pieces);
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
        chop(w, h);
    }
    image.src = url;
    return;
};

var cutPic = function(width, height) {
    console.log(width);
    console.log(height);
    var pieces = [
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
    ];
    return pieces;
};

var displayPieces = function(url, pieces) {
    console.log(url);
    console.log(pieces);
};