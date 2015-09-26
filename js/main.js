var setUrlInputHandler = function() {
    $("#buttonSeturl").on('click', function(event) {
        event.stopPropagation();
        main();
    });
};

$(document).ready(function() {
    setUrlInputHandler();
});

var main = function() {
    var url = $('#url').val();
    var dim = getPicSize(url);
    var height = dim["height"];
    var width = dim["width"];
    var pieces = cutPic(width, height);
    displayPieces(url, pieces);
};

var getPicSize = function(url) {
    //send url to #pic img tag in html
    //get width and height
    //return width, height and url
    console.log(url);
    return {"width": "10px", "height": "5px"}
};

var cutPic = function(width, height){
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