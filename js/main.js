var shuffle = true;

var iPos = function(shuffle) {

    var w = $('#pic').width();
    var h = $('#pic').height();

    var newbgPos = [
                    [-(w), h],
                    [-(w + (w / 3)), h],
                    [-((w + (w / 3)) + (w / 3)), h],
                    [-(w), h / 2],
                    [-(w + (w / 3)), h / 2],
                    [-((w + (w / 3)) + (w / 3)), h / 2],
                ];

    //http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    if (shuffle === true) {
        for (var i = newbgPos.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newbgPos[i];
            newbgPos[i] = newbgPos[j];
            newbgPos[j] = temp;
        }
    }
    return newbgPos;
};

var bkgPos = function(x, y) {
    return "" + x + "px " + y + "px";
};

$(document).ready(function() {

    var pic = iPos(shuffle);

    var displayPic = function() {
        for (var i = 0; i < pic.length; i++) {
            a = pic[i][0];
            b = pic[i][1];
            $('.box' + i).css({
                "background-position": bkgPos(a, b)
            });
        }
    }
    displayPic();
});